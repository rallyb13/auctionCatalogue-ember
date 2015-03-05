Auction.LotController = Ember.ObjectController.extend({

  actions: {
    delete: function() {
      if (confirm("You realize this will be forever banished, yes?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('department', this.id);
      }
    }
  }
});
