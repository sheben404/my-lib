const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2, 3, 4];

// 1.  有个问题，[NaN].indexOf(NaN) === -1
const newArr1 = nums1.filter((item) => nums2.indexOf(item) > -1);
console.log(newArr1);

// 2.
const newArr2 = nums1.filter((item) => nums2.includes(item));
console.log(newArr2);
