import Abstractroute from './abstractroute';

export default class OrderRoute extends Abstractroute {
  model() {
    return this.store.query('order', {
      filter: { idEmployee: 1 },
      include: 'product',
    });
  }
}
