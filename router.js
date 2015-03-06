Auction.Router.map(function() {
  this.resource('departments', {path: '/'}, function() {
    this.resource('new-department');
  });
  this.resource('department', {path: '/departments/:department_id'}, function() {
    this.resource('new-lot');
  });
  this.resource('lot', {path: '/lots/:lot_id'}, function() {
    this.resource('new-item');
  });
  this.resource('item', {path: '/items/:item_id'});
});
