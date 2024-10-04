function Dog(name, age, breed) {
    this.name = "Shery";
    this.age = 10;
    this.breed = "German Shepherd";
}
var dog1 = new Dog();
Dog.prototype.gender = "male";
console.log(Dog.prototype);
