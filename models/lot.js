Auction.Lot = DS.Model.extend({
  name: DS.attr(),
  imageURL: DS.attr(),
  department: DS.belongsTo('department', {async: true}),
  items: DS.hasMany('item', {async: true})
});
