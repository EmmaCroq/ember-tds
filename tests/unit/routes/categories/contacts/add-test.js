import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | categories/contacts/add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:categories/contacts/add');
    assert.ok(route);
  });
});
