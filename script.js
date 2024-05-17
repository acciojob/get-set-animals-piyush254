class Animal {
  constructor(species){
    this._species = species;
  }
  
  makeSound(){
    console.log(`The ${this.species} makes a sound`);
  }
  
  get species(){
    return this._species;
  }
}

class Dog extends Animal {
  bark(){
    console.log(`woof`);
  }
}

class Cat extends Animal {
  purr(){
    console.log(`purr`);
  }
}



const Cat1 = new Cat("cat");
Cat1.makeSound()



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;