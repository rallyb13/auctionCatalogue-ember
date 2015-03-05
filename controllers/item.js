Auction.ItemController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm("Check yo self. This is about to get realz!")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('lot', this.id)
      }
    }
  }

});
