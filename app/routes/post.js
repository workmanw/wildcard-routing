import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return { id: params.post_id, name: `post ${params.post_id}` };
  }
});
