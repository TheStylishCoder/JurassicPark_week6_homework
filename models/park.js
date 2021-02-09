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
Park.prototype.findAllOfParticularSpecies = function(species){
    let foundDinosaurs = [];
    for (const dinosaur of this.dinosaurs){
        if(dinosaur.species == species){
            foundDinosaurs.push(dinosaur);
        };
    };
    return foundDinosaurs;
};

Park.prototype.calculateTotalDailyVisitors = function(){
    let total = 0;

    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
};
Park.prototype.calculateTotalYearlyVisitors = function(){
    let total = 0;
    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    newTotal = total * 365;
    return newTotal;
};
Park.prototype.calculateTotalYearRevenue = function(){
    let total = 0;
    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    newTotal = total * 365;
    totalYearRevenue = newTotal * this.ticketPrice;
    return totalYearRevenue;
}

module.exports = Park;


