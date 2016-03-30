import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('post', { path: '/post/:post_id', resetNamespace: true }, function() {
    this.route('details', { path: '/details' });
  });

  this.route('community', { path: '/community/:communityId', resetNamespace: true }, function() {
    this.route('room', { path: '/room/:roomId', resetNamespace: true }, function() {
      this.route('wall', { path: '/wall/:wallId', resetNamespace: true }, function() {
        this.route('wallitem', { path: '/wallitem/:wallitemId' });
      });
    });

    this.route('resourceNotFound', { path: '/*glob' });
  });
});

export default Router;
