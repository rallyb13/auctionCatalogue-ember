Auction.DepartmentRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('department', params.department_id);
  }
});
