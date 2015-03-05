Auction.Department = DS.Model.extend({
  title: DS.attr(),
  imageURL: DS.attr(),
  lots: DS.hasMany('lot', {async: true})
});
