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

Park.prototype.mostPopular = function() {
  let result = 0;
  for (const dinosaur of this.collection) {
    if (dinosaur.guestsAttractedPerDay > result) {
      result = dinosaur.guestsAttractedPerDay;
    }
  }
  return result;
};

Park.prototype.findSpecies = function(speciesToFind) {
  const result = [];
  for (const dinosaur of this.collection) {
    if (dinosaur.species === speciesToFind) {
      result.push(dinosaur);
    }
  }
  return result;
}

Park.prototype.visitorDailyTotal = function() {
  let total = 0;
  for (const dinosaur of this.collection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

module.exports = Park;
