import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;
import { computed } from '@ember/object';

export default Model.extend({
  children: hasMany('sandbox-item-config', { inverse: 'parent' }),
  parent: belongsTo('sandbox-item-config', { inverse: 'children' }),

  componentName: attr('string'),
  componentArgs: attr(),

  supportsBlocks: attr('boolean'),

  // TODO: remove or consolidate w/ sandbox-code components
  hbs: computed('hbsLines', function() {
    // TODO: gross
    let concatPrefixed = (items, prefix) => {
      let prefixed = "";
      items.forEach(item => {
        if(item.constructor === Array) {
          prefixed += concatPrefixed(item, prefix+" ");
        } else {
          prefixed += (prefix + item);
        }
      });
      return prefixed;
    };
    return concatPrefixed(this.get('hbsLines'), "\n");
  }),
  hbsLines: computed('componentArgs.{}', 'componentName', 'children.length', 'children.@each.hbsLines', function() {
    let args = this.get('componentArgs');
    let argStrings = Object.keys(args).map(arg => `${arg}="${args[arg]}"`);
    if(!this.get('supportsBlocks')) {
      return [`{{${this.get('componentName')}${argStrings.length?' ':''}${argStrings.join(' ')}}}`];
    } else {
      let opening = `{{#${this.get('componentName')}${argStrings.length?' ':''}${argStrings.join(' ')}}}`;
      let closing = `{{/${this.get('componentName')}}}`;
      let childHbs = this.get('children').map(child => child.get('hbsLines'));
      return [opening, childHbs, closing];
    }
  }),
});
