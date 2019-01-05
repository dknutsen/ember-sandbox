import Component from '@ember/component';
import layout from '../templates/components/sandbox-placeholder';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  layout,
  attributeBindings: ['style'],
  style: computed(function() {
    return htmlSafe(
      `width:100%;
      min-height:6rem;
      min-width:6rem;
      background:#ccc;
      display:flex;
      justify-content:center;
      align-items:center`
    );
  })
});
