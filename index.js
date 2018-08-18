// Add your functions and code here

//Mutators: pop, push, shift, unshift
//Non-Mutators: slice, concat, splice

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  //appends a kitten to the end of the kittens array
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
//prepends a kitten to the beginningof the kittens array
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  //removes the last kitten from the kittens array
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  //removes the First kitten from the kittens array
  kittens.shift(name)
}

