var animalPopulation=0;
var allAnimals = [];

$(document).ready(function() {

    var tigger = new Tiger("Tigger");

    var pooh = new Bear("Pooh");

    var rarity = new Unicorn("Rarity");

    var gemma = new Giraffe("Gemma");

    var stinger = new Bee("Stinger");


    allAnimals = [tigger,pooh,rarity,gemma,stinger];

    $("#feed").click(function(){
        feedAnimal();
    });
    $("#" + allAnimals.name).click(function(){
         allAnimals.splice();
     });
    listAnimals();
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
    if(newAnimal.name==""){
        $("#actions").append("Please choose a name" + "<br>")
    } else {
        $("#actions").append(newAnimal.name + " was created" + "<br>");
    }
    listAnimals();

}

function listAnimals() {
    $("#table").empty();
    $("#table").append("<tr><td>NAME:</td><td>SPECIES:</td><td>FAVORITE FOOD:</td></tr>");
    for(var i=0; i<allAnimals.length; i++){
        //$("#table").append("<tr><td>" + allAnimals[i].name + "</td><td>" + allAnimals[i].constructor.name + "</td><td>" +allAnimals[i].favoriteFood + "</td></tr>");
        $("#table").append("<tr onclick='deleteAnimal(this.id)' id='" + allAnimals[i].name + "'><td> " + allAnimals[i].name + " </td>" + " <td>" + allAnimals[i].constructor.name + "</td><td>" + allAnimals[i].favoriteFood +"</td></tr>");
    }

    //loop through animals and print each one out to page
    // $("#animalList").append(allAnimals[i].name);
}

function deleteAnimal(name){
    for(var i=0; i<allAnimals.length; i++){
        if(allAnimals[i].name == name){
            $("#actions").append(allAnimals[i].name + " was deleted " + "<br>");
            allAnimals.splice(i,1);

        }

    }
    listAnimals();
}

function feedAnimal(){
    $("#actions").empty();
    var food = $("#food").val();
    for(var i=0; i<allAnimals.length; i++){
        if(food!==0){
            allAnimals[i].eat(food);
        }else{
            $("#actions").append("You need to choose a meal for your animal.");
        }
    }
}


class Animal{
    constructor(name,favoriteFood){
        this.name=name;
        this.favoriteFood= favoriteFood;
        animalPopulation++;
    }
    sleep(){
        $("#actions").append(this.name + " sleeps for 8 hours" + "<br>");
    }
    eat(food){
        $("#actions").append(this.name + " eats " + food + "<br>");
        if(food == this.favoriteFood) {
            $("#actions").append("YUM!!" + this.name + " wants more " + food + "<br>");
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
        $("#actions").append(this.name + " hibernates for 4 months" + "<br>");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
    }
    eat(food){
        $("#actions").append(this.name + " eats " + food + "<br>");
        if(food == this.favoriteFood) {
            $("#actions").append("YUM!!" + this.name + " wants more " + food + "<br>");
            this.sleep();
        }
    }
    sleep(){
        $("#actions").append(this.name + " sleeps in a cloud" + "<br>");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    eat(food){
        if(food!==this.favoriteFood){
            $("#actions").append("YUCK!" + this.name + " will not eat " + food + "<br>");
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
            $("#actions").append("YUCK!" + this.name + " will not eat " + food + "<br>");
            this.sleep();
        }else{
            console.log(this.name + " eats " + food);
            console.log("YUM!!" + this.name +" wants more " + food);
            this.sleep();
        }
    }
    sleep(){
        $("#actions").append(this.name + " never sleeps" + "<br>");
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