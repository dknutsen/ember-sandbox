import Component from '@ember/component';
import layout from '../templates/components/sandbox-builder-toolbar';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['sandbox-builder-toolbar'],
  // TODO: ditch inline styles
  attributeBindings: ['style'],
  style: computed(function() {
    return `background:rgba(230,230,230,0.5);display:flex;justify-content:space-between;flex-wrap:wrap;border:1px solid grey;padding:0.25rem 0.5rem;font-size:1rem;font-weight:normal`;
  }),
});
