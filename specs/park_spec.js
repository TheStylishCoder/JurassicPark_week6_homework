const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 60);
    dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 35);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 40);
    dinosaur5 = new Dinosaur('velociraptor', 'carnivore', 20);

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur5);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
   
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = 185;
    assert.strictEqual(actual, park.calculateTotalDailyVisitors());
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = 67525;
    assert.strictEqual(actual, park.calculateTotalYearlyVisitors());
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = 675250;
    assert.strictEqual(actual, park.calculateTotalYearRevenue());
  });

});
