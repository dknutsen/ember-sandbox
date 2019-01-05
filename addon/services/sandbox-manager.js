import Service from '@ember/service';
import { inject as service } from '@ember/service';

let sandboxConfig = {
  'container': {
    componentName: 'sandbox-container',
    supportsBlocks: true,
    componentArgs: {
      display: {
        type: 'array',
        values: ['block', 'flex'],
        default: 'block'
      },
      direction: {
        type: 'array',
        values: ['row', 'column'],
        default: 'row'
      },
      spacing: {
        type: 'array',
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        default: 'space-between'
      },
      wrap: {
        type: 'array',
        values: ['nowrap', 'wrap', 'wrap-reverse'],
        default: 'nowrap'
      }
    }
  },
  'placeholder': {
    componentName: 'sandbox-placeholder',
  },
  'heading': {
    componentName: 'sandbox-heading',
    supportsBlocks: true,
    componentArgs: {
      headingLevel: {
        type: 'array',
        values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        default: 'h1'
      }
    }
  },
  'paragraph': {
    componentName: 'sandbox-paragraph',
    supportsBlocks: true,
    componentArgs: { }
  },
  'blockquote': {
    componentName: 'sandbox-blockquote',
    supportsBlocks: true,
    componentArgs: { }
  },
  'text': {
    componentName: 'sandbox-text',
    componentArgs: {
      text: {
        type: 'string',
        default: 'Placeholder Text'
      }
    }
  },
  'link': {
    componentName: 'sandbox-link',
    componentArgs: {
      href: {
        type: 'string',
        default: 'https://www.google.com'
      }
    }
  }
};

export default Service.extend({
  store: service(),

  config: null,

  builderMode: false,

  init() {
    this._super(...arguments);
    this.config = { sandbox: sandboxConfig };
  },

  configForComponent(componentName) {
    let componentConfig = null;
    Object.keys(this.config).forEach(namespace => {
      let namespaceComponents = this.config[namespace];
      Object.keys(namespaceComponents).forEach(ccname => {
        let cc = namespaceComponents[ccname];
        if(cc.componentName === componentName) {
          componentConfig = cc;
        }
      });
    });
    return componentConfig;
  },

  createItem(type, parent) {
    let itemConfig = this.configForComponent(type);
    if(!itemConfig) {
      return null;
    }
    let configArgs = itemConfig.componentArgs || { };
    let componentArgs = Object.keys(configArgs).reduce((args,arg) => {
      args[arg] = itemConfig.componentArgs[arg].default || null;
      return args;
    }, {});
    let newItem = this.get('store').createRecord('sandbox-item-config', {
      componentName: itemConfig.componentName,
      componentArgs,
      supportsBlocks: itemConfig.supportsBlocks,
      parent,
    });
    if(parent) {
      parent.get('children').pushObject(newItem);
    }
    return newItem;
  },
});

