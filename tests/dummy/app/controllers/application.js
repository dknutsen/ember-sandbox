import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  sandboxManager: service(),

  root: null,
  init() {
    this._super(...arguments);
    let root = this.get('sandboxManager').createItem('sandbox-container', null);
    this.set('root', root);
  }
});
 
