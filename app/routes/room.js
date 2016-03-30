import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return { id: params.roomId, name: `Room ${params.roomId}` };
  }
});
