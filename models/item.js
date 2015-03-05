Auction.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  imageURL: DS.attr(),
  price: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
