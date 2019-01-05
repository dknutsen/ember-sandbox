import Component from '@ember/component';
import layout from '../templates/components/sandbox-code-item';
import { computed } from '@ember/object';
import { classify } from '@ember/string';


export default Component.extend({
  layout,
  tagName: '',

  item: null,

  style: 'classic', // vs 'anglebracket'

  indent: 0,
  indentSize: 2,

  childIndent: computed('indent', 'indentSize', function() {
    return this.get('indent') + this.get('indentSize');
  }),

  opening: computed('style', 'indent', 'item.supportsBlocks', 'item.componentName', 'item.componentArgs', function() {
    if(!this.get('item.componentName')) {
      return null;
    }

    let classic = this.get('style') === 'classic';
    let supportsBlocks = this.get('item.supportsBlocks');

    let indent = Array(this.get('indent')+1).join(" ");

    let opener = classic ? '{{' : '<';
    let closer = classic ? '}}' : '>';

    let prefix = classic && supportsBlocks ? '#' : '';
    let postfix = !classic && !supportsBlocks ? '/' : '';

    let componentName = this.get('item.componentName');
    componentName  = classic ? componentName : classify(componentName);

    let args = this.get('item.componentArgs');
    let argStrings = Object.keys(args).map(arg => {
      return `${classic?'':'@'}${arg}="${args[arg]}"`;
    });

    return `${indent}${opener}${prefix}${componentName}${argStrings.length?' ':''}${argStrings.join(' ')}${postfix}${closer}`;
  }),

  closing: computed('style', 'item.componentName', function() {
    if(!this.get('item.componentName')) {
      return null;
    }
    let classic = this.get('style') === 'classic';
    let indent = Array(this.get('indent')+1).join(" ");
    let opener = classic ? '{{' : '<';
    let closer = classic ? '}}' : '>';
    let componentName = this.get('item.componentName');
    componentName  = classic ? componentName : classify(componentName);
    return `${indent}${opener}/${componentName}${closer}`;
  }),
});
