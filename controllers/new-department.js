Auction.NewDepartmentController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newDept = this.store.createRecord('department', {
        title: this.get('depTitle'),
        imageURL: "../imgs/" + this.get('depImage')
      });
      newDept.save();
      this.transitionToRoute('departments');
    },

    // delete: function() {
    //   if (confirm("Must you? Reeeally?")) {
    //     this.get('model').destroyRecord();
    //     this.transitionToRoute('departments');
    //   }
    // }
  }
});
