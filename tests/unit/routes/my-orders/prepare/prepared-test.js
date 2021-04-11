import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myOrders/prepare/prepared', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-orders/prepare/prepared');
    assert.ok(route);
  });
});
