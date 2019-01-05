import Component from '@ember/component';
import SpreadMixin from 'ember-spread';

export function initialize(/* application */) {
  // TODO: only do this if addon is enabled
  Component.reopen(SpreadMixin, {
    componentSpreadOptions: {},
    spreadOptions: {
      property: 'componentSpreadOptions'
    }
  });
}

export default {
  initialize
};
