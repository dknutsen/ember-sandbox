import Component from '@ember/component';
import layout from '../templates/components/sandbox-add-child';
import { inject as service } from '@ember/service';

export default Component.extend({
  sandboxManager: service(),
  layout,
  classNames: ['sandbox-add-child'],

  actions: {
    createChildItem(itemType) {
      this.get('sandboxManager').createItem(itemType, this.get('elementModel'));
    },
  }
});
