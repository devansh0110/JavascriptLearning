const arrayOfObj = [
  {
    name: 'apple',
    color: 'red'
  },
  {
    name: 'mango',
    color: 'yellow'
  },
  {
    name: 'banana',
    color: 'yellow'
  },
  {
    name: 'grapes',
    color: 'green'
  },
  {
    name: 'pomegrenade',
    color: 'red'
  }
]

function sortInOrder(array, sortOrderKey, sortOrder) {
  let objOrder = {};
  sortOrder.forEach((val, index) => {
    objOrder[val] = index + 1;
  });
  return array.sort((a, b) => objOrder[a[sortOrderKey]] - objOrder[b[sortOrderKey]]);
}

let sortOrder = ['red', 'green', 'yellow'];
console.log(sortInOrder(arrayOfObj, 'color', sortOrder));