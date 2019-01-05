import Component from '@ember/component';
import layout from '../templates/components/sandbox-modal';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: 'div',
  attributeBindings: ['tabindex:tabindex', 'style'],
  tabindex: -1,

  style: computed(function() {
    return `
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 100;
      touch-action: none;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }),

  onClose: null,

  actions: {
    onClose() {
      if(this.get('onClose')) {
        this.get('onClose')();
      }
    }
  }
});
