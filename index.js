'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    app.import('vendor/ember/ember-template-compiler.js');
  },
};
