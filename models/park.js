const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.collection = [];
};

Park.prototype.addDinosaur = function(dinosaur) {
  this.collection.push(dinosaur);
};

/* I was going to attempt removing a specific dinosaur by name,
    but the dinosaurs don't really have a unique identifier.
    just going with good old .pop() instead. */
Park.prototype.removeDinosaur = function() {
  this.collection.pop();
};


module.exports = Park;
