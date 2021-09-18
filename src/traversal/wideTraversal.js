// 递归写法
function wideTraversal (node) {
  const nodes = []
  i = 0
  if (node != null) {
    nodes.push(node)
    wideTraversal(node.nextElementSibling)
    node = nodes[i++]
  }
}
