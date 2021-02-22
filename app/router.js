import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('testnew');
  this.route('testlist');
  this.route('contacts', function() {
    this.route('add');
    this.route('update', { path:'update/:contact_id'});
  });

  this.route('categories', function() {
    this.route('add');
    this.route('update', { path:'/:category_id'});
    this.route('contacts', { path:'/:category_id'}, function() {
      this.route('add');
      this.route('update', { path:'/:category_id'});
    });
  });
});
