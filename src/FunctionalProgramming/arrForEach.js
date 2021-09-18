const arr = ["a", "b", "c", "d"];
function forEach(arr, fn) {
  if (arr.length === 0) {
    return;
  }
  fn(arr[0]);
  forEach(arr.slice(1), fn);
}
forEach(arr, (item) => {
  console.log(item);
});
