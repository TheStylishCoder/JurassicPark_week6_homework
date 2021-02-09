const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};
Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};
Park.prototype.removeDinosaur = function(){
    this.dinosaurs.pop()
};
module.exports = Park;