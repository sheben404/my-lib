// 使用循环
function commonParentNode(oNode1, oNode2) {
  while (true) {
    oNode1 = oNode1.parentNode;
    if (oNode1.contains(oNode2)) {
      return oNode1;
    }
  }
}

// 使用递归
function commonParentNode(oNode1, oNode2) {
  if (oNode1.contains(oNode2)) {
    return oNode1;
  } else {
    return commonParentNode(oNode1.parentNode, oNode2);
  }
}
