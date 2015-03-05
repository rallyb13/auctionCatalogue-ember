Auction.NewLotController = Ember.Controller.extend({
  needs: ['department'],
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('lotName'),
        imageURL: "../imgs/" + this.get('lotImage')
      });

      newLot.save();

      var department = this.get('controllers.department.model');
      department.get('lots').pushObject(newLot);
      department.save();

      this.transitionToRoute('department', department.id);
    }
  }
});
