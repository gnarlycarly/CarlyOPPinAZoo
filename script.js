var animalPopulation=0;
var allAnimals = [];

$(document).ready(function() {

    var tigger = new Tiger("Tigger");

    var pooh = new Bear("Pooh");

    var rarity = new Unicorn("Rarity");

    var gemma = new Giraffe("Gemma");

    var stinger = new Bee("Stinger");


    allAnimals = [tigger,pooh,rarity,gemma,stinger];
});

function addAnimal(){
    var animalType = $("#animalType").val();
    var name = $("#nameField").val()
    var newAnimal;

    switch(parseInt(animalType)){
        case 1:
            newAnimal= new Tiger(name);
            break;
        case 2:
            newAnimal= new Bear(name);
            break;
        case 3:
            newAnimal= new Giraffe(name);
            break;
        case 4:
            newAnimal= new Unicorn(name);
            break;
        case 5:
            newAnimal= new Bee(name);
            break;
    }
    allAnimals.push(newAnimal);
    listAnimals();

}

function listAnimals() {
    $("#animalList").empty();
    for(var i=0; i<allAnimals.length; i++){
        $("#animalList").append(allAnimals[i].name + "<br>");
    }
    //loop through animals and print each one out to page
    // $("#animalList").append(allAnimals[i].name);
}

function deleteAnimal(){

}

function feedAnimals(){

}


class Animal{
    constructor(name,favoriteFood){
        this.name=name;
        this.favoriteFood= favoriteFood;
        animalPopulation++;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!" + this.name + " wants more " + food);
        } else {
            this.sleep();
        }
    }
    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name){
        super(name ,"meat");
    }
}

class Bear extends Animal{
    constructor(name){
        super(name, "fish")
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months")
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!" + this.name + " wants more " + food);
        }
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    eat(food){
        if(food!==this.favoriteFood){
            console.log("YUCK!" + this.name + " will not eat " + food);
            this.sleeps;
        }else{
            console.log(this.name + " eats " + food);
            console.log("YUM!!" + this.name +" wants more " + food);
        }
        this.sleeps;
    }
}

class Bee extends Animal{
    constructor(name){
        super(name,"pollen");
    }
    eat(food){
        if(food!==this.favoriteFood){
            console.log("YUCK!" + this.name + " will not eat " + food);
        }else{
            console.log(this.name + " eats " + food);
            console.log("YUM!!" + this.name +" wants more " + food);
            this.sleep();
        }
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}

class Zookeeper{
    constructor(name){
        this.name =name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");
        for(var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }

    }
}