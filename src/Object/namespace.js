function namespace(oNamespace, sPackage) {
  const packageArr = sPackage.split(".");
  let next = oNamespace;
  while (packageArr.length) {
    if (next[packageArr[0]]) {
      packageArr.shift();
    }
    next = next[packageArr[0]];
    if (!next[packageArr[0]]) {
      next[packageArr[0]] = {};
      packageArr.shift();
    }
  }
  return oNamespace;
}

console.log(namespace({ a: { test: 1, b: 2 } }, "a.b.c.d"));
