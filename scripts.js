let totalEnergy = 0;
let totalHappiness = 0;
let activity = " ";

function pet() {totalHappiness += 1};
function feed() {totalEnergy += 2};
function walk() {
    totalHappiness += 2
    totalEnergy -= 1
};

let Name = prompt("What is your pet's name?"); 

for (let i = 0; i<6; i++) {
    let activity = prompt("Would you like to pet, feed or walk?")
    if (activity==="pet") {
        pet()
    }
    else if (activity ==="feed") {
        feed()
    }
    
    else if (activity==="walk" && totalEnergy >=1) {
        walk()
    }
    else {
        alert("Not enough energy to enjoy a walk.") 
    }
};


console.log(Name + " has " + totalEnergy + " energy and " + totalHappiness + " happiness.");