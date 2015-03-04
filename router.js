Auction.Router.map(function() {
  this.resource('departments', {path: '/'}, function() {
    this.resource('new-department');
  });
});
