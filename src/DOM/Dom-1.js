window.dom = {
  //增
  create(string) {
    const container = document.createElement('template')
    container.innerHTML = string.trim()
    return container.content.firstChild
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling)
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node)
  },
  append(parent, node) {
    parent.appendChild(node)
  },
  wrap(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
  },

  //删
  remove(node) {
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {
    const {childNodes} = node
    const array = []
    for (let i = 0; i < childNodes.length;) {
      dom.remove(childNodes[i])
      array.push(childNodes[i])
    }
    return array
  },

  //改
  after(node, name, value) {
    if (arguments.length === 3) {
      ndoe.setAttribute(name, value)
    } else if (arguments.length === 2) {
      return node.getAttribute(name)
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ('innerText' in node) {
        node.innerText = string
      } else {
        node.textContent = string
      }
    } else if (arguments.length === 1) {
      if ('innerText' in node) {
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      //dom.style(div,'color','red')
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === 'object') {
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      } else if (typeof name === 'string') {
        return node.style[name]
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className) {
      node.classList.remove(className)
    },
    has(node, className) {
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) {
    return node.parentNode
  },
  children(node) {
    return node.children
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter(n => n !== node)
  },
  next(node) {
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },
  previous(node) {
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },
  index(node) {
    const list = dom.children(parent(node))
    let i = 0
    for (i; i < list.length; i++) {
      if (list[i] === node) break
    }
    return i + 1
  }
}