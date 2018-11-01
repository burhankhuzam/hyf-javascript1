let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.shift(0);
favoriteAnimals.unshift('blowfish', 'meerkat');
console.log('The new value of the array will be exaclty as requested ;p')
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
console.log('The item you are looking for is at index: '+favoriteAnimals.indexOf('meerkat') );
favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1 );
console.log(favoriteAnimals);