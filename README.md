ember-sandbox
==============================================================================

Ember Sandbox is an addon that uses a little magic to allow you to play with your Ember components in a WSYWIG-style fashion.

Installation
------------------------------------------------------------------------------

```
ember install ember-sandbox
```


Usage
------------------------------------------------------------------------------

* install ember-sandbox in your addon
* configure the components you wish to allow sandboxing by extending the sandbox-manager service (see dummy app for example)
* render a sandbox-item component somewhere

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-sandbox`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
