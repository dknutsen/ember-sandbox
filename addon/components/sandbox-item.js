import Component from '@ember/component';
import layout from '../templates/components/sandbox-item';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  sandboxManager: service(),
  layout,

  tagName: '',

  // TODO: rename
  elementModel: null,

  editMode: false,
  builderMode: reads('sandboxManager.builderMode'),

  componentConfig: computed('elementModel.componentName', function() {
    return this.get('sandboxManager').configForComponent(this.get('elementModel.componentName'));
  }),

  actions: {
/*
    createChildItem(itemType) {
      this.get('sandboxManager').createItem(itemType, this.get('elementModel'));
    },
*/
    delete() {
      this.get('elementModel').destroyRecord();
    }
  }
});
