import Component from '@ember/component';
import layout from '../templates/components/sandbox-container';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  layout,
  attributeBindings: ['style'],

  direction: 'column',
  spacing: 'space-between',
  wrap: 'nowrap',
  display: 'block',

  style: computed('direction', 'spacing', 'wrap', 'display', function() {
    return htmlSafe(`
      display:${this.get('display')};
      justify-content:${this.get('spacing')};
      flex-direction:${this.get('direction')};
      flex-wrap:${this.get('wrap')};
      width: 100%;
    `);
  })
});
