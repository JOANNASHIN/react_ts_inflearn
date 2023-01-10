function fetchItems(): string[] {
  let items = ['a', 'b', 'c'];
  return items; 
}

const result = fetchItems();
console.log(result);





// Promise<string[]> Promise의 return값으로 들어올 값의 타입을  <> 안에 지정!
function fetchItemsPromise():Promise<string[]> {
  let items = ['a', 'b', 'c'];

  return new Promise(function (resolve) {
    resolve(items);
  })
}