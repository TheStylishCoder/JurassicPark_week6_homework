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

Park.prototype.calculateTotalDailyVisitors = function(){
    let total = 0;

    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
};


module.exports = Park;


