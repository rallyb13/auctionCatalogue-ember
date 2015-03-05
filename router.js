Auction.Router.map(function() {
  this.resource('departments', {path: '/'}, function() {
    this.resource('new-department');
  });
  this.resource('department', {path: '/:department_id'}, function() {
    this.resource('new-lot');
  });
  this.resource('lot', {path: '/:lot_id'});
});
