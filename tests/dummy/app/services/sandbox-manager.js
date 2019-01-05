import SandboxManager from 'ember-sandbox/services/sandbox-manager';

let wackyConfig = {
  'button': {
    componentName: 'wacky-button',
    supportsBlocks: true,
    componentArgs: {
      buttonType: {
        type: 'array',
        values: ['primary', 'secondary'],
        default: 'primary'
      },
      disabled: {
        type: 'boolean',
        default: false
      }
    }
  },
  'card': {
    componentName: 'wacky-card',
    supportsBlocks: true,
    componentArgs: {}
  },
  'card header': {
    componentName: 'wacky-card-title',
    supportsBlocks: true,
    componentArgs: {}
  },
  'card content': {
    componentName: 'wacky-card-content',
    supportsBlocks: true,
    componentArgs: {}
  }
};

export default SandboxManager.extend({
  init() {
    this._super(...arguments);
    this.config['wacky'] = wackyConfig;
  }
});
