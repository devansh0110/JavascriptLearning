let a = function () {
    console.log('a', this); //global
    let b = function () {
        console.log('b', this); //global
        let c = {
            hi: function () {
                console.log('c', this); //object c
            }
        }
        c.hi(); //hi is called by c so this inside hi will refer to c
    }
    b();
}
a();

// Example 2
const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW());