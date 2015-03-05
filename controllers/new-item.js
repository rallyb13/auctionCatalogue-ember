Auction.NewItemController = Ember.Controller.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        name: this.get('itemName'),
        description: this.get('itemDesc'),
        price: parseFloat(this.get('itemPrice')).toFixed(2),
        imageURL: "../imgs/" + this.get('itemImage')
      });

      newItem.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(newItem);
      lot.save();

      this.transitionToRoute('lot', lot.id);
    }
  }
});
