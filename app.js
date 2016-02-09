// JS file for Feb 8 class demo

var userName = prompt('What is your name?');
console.log('This user\'s name is ' + userName + ' .');

alert('Wow! ' + userName + ' is my best friend\'s name too.');


var userFriends = prompt(userName + ' How many close friends do you have?');
console.log(userName + ' has ' + userFriends + ' friends');

alert('Poor ' + userName + ', It must be so hard to keep tabs on all ' + userFriends + ' of your best friends.');


var userAnimal = confirm(userName  + ', do you like animals?');
console.log(userName + ' likes animals: ' + userAnimal);

alert('Hey, ' + userName + ' you like animals then right? ' + userAnimal);


var userPet = prompt(userName + ', how many pets do you have?');
console.log(userName + ' has ' + userPet + ' pets.');

alert('So, ' + userName + ' you have ' + userPet + ' pets? ' + ' How interesting!');


var userKittyPuppy = prompt(userName + ', earlier you said you like animals? ' + userAnimal + '.....' + ' It doesn\'t even matter anymore. ' + ' Unless you are a terribly evil person, you can\'t possibly resist a cuddly puppy or kitten. ' + 'What kind of rotten tricks do you have up your sleeve?');
console.log(userName + ' still thinks animals are the best ever! ' + userAnimal + '. If ever they had to resist the power of adorbs, they would just ' + userKittyPuppy);

alert('No wonder you only have ' + userFriends + ' friends ' + userName + '! You can\'t control yourself and resort to ' + userKittyPuppy + '! Those poor, sweet, and lovable little fur-babies!!');


var kittyLasers = prompt(userName + ' your evil ways seem to have unleashed the wrath of Laser Kitty! ' + ' Where can you possibly go where you will remain unscathed?');
console.log(userName + ' thinks they can run off to ' + kittyLasers + ' to escape the lasers.');

alert(userName + ', You truly thought ' + kittyLasers + ' would be safe? ' + ' Ha! Ha! Ha! ' + ' Oh, wait.... I mean pew! pew! ' + ' Feel the burn!');
