Auction.DepartmentController = Ember.ObjectController.extend({

  actions: {
    delete: function() {
      if (confirm("Must you? Reeeally?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('departments');
      }
    }
  }

});
