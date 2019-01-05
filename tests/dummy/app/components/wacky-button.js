import Component from '@ember/component';
import layout from '../templates/components/wacky-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['wacky-button'],
  classNameBindings: ['buttonType'],
  attributeBindings: [
    'disabled',
    'ariaDescribedby:aria-describedby',
    'ariaLabelledby:aria-labelledby',
    'ariaExpanded:aria-expanded',
    'ariaPressed:aria-pressed',
    'ariaControls:aria-controls',
    'ariaLabel:aria-label'
  ],

  click(evt) {
    if (this.get("onclick")) {
      this.get('onclick')(evt);
    }
  },

  ariaLabel: null,
  ariaDescribedby: null,
  ariaLabelledby: null,
  ariaExpanded: null,
  ariaPressed: null,
  ariaControls: null,
  buttonType: 'primary',
  disabled: false,
});

