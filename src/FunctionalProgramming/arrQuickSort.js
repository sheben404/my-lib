// 递归版本
quickSort1 = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  const big = rest.filter((item) => item >= pivot);
  const small = rest.filter((item) => item < pivot);
  return [...quickSort(small), pivot, ...quickSort(big)];
};

// 尾递归版本
quickSort2 = (array, next) => {
  if (array.length <= 1) {
    return next(array);
  }
  const [pivot, ...rest] = array;
  const small = rest.filter((i) => i <= pivot);
  const big = rest.filter((i) => i > pivot);
  qs(small, (sortedSmall) => {
    qs(big, (sortedBig) => {
      next([...sortedSmall, pivot, ...sortedBig]);
    });
  });
};
quickSort2([1,10,5,2,7,3,8,4,9,6], (result)=>{
  console.log(result) 
})
