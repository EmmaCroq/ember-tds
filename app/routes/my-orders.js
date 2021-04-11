import Abstractroute from './abstractroute';

export default class MyOrdersRoute extends Abstractroute {
  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'orderdetails.product',
    });
  }
}
