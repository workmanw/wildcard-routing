import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return { id: params.communityId, name: `post ${params.communityId}` };
  }
});
