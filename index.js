var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal='cat'
  return animal
}

function add2(n) {


  // Feel free to move things around!
  const two = 2
    return n + two
}

var funkyFunction = function(){
    return function(){
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
//funkyFunction.function;
<<<<<<< HEAD

var theFunk = funkyFunction()();
=======
console.log(theFunk);
theFunk=function;
var theFunk = funkyFunction();
>>>>>>> e30a4ac2fa3bdd11e7a1d72fd1b292a0fe9b2922
