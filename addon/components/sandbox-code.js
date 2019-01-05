import Component from '@ember/component';
import layout from '../templates/components/sandbox-code';

export default Component.extend({
  layout,

  style: 'classic', // v.s. "anglebracket"

  root: null,

  indentSize: 2
});
