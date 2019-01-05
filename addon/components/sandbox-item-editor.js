import Component from '@ember/component';
import layout from '../templates/components/sandbox-item-editor';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  attributeBindings: ['style'],
  style: computed(function() {
    return `
      padding:0.5rem 1rem;
      font-size:1rem;
      font-weight:normal;
    `;
  }),
});
