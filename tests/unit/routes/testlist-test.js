import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | testlist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:testlist');
    assert.ok(route);
  });
});
