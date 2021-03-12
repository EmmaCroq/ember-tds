import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('board');
  this.route('logout');
  this.route('sections');
  this.route('order', { path: 'order/:order_id' });
  this.route('Abstractroute');
});
