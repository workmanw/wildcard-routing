import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });

  this.route('room', { path: '/room/:roomId', resetNamespace: true }, function() {
    this.route('wall', { path: '/wall/:wallId', resetNamespace: true }, function() {
      this.route('item', { path: '/item/:itemId' });
    });

    this.route('resourceNotFound', { path: '/*glob' });
  });
});

export default Router;
