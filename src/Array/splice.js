Array.prototype.mySplice = function (startIndex, deleteNum, ...addElements) {
  let argumentsLen = arguments.length
  let array = Object(this)
  let len = array.length
  let deleteArr = new Array(deleteNum)

  if (Object.isSealed(array) && deleteNum !== addElements.length) {
    throw new TypeError('the object is a sealed object!')
  } else if (Object.isFrozen(array) && (deleteNum > 0 || addElements.length > 0)) {
    throw new TypeError('the object is a frozen object!')
  }

  startIndex = computeStartIndex(startIndex)
  deleteNum = computeDeleteNum(deleteNum)

  sliceDeleteElements(array, startIndex, deleteNum, deleteArr)
  movePostElements(array, startIndex, len, deleteNum, addElements)

  for (let i = 0; i < addElements.length; i++) {
    array[startIndex + i] = addElements[i]
  }
  array.length = len - deleteNum + argumentsLen

  return deleteArr
}

const sliceDeleteElements = (array, startIndex, deleteNum, deleteArr) => {
  for (let i = 0; i < deleteNum; i++) {
    let index = startIndex + i
    if (index in array) {
      deleteArr[i] = array[index]
    }
  }
}

const computeStartIndex = (startIndex, len) => {
  if (startIndex < 0) {
    return startIndex + len > 0 ? startIndex + len : 0;
  }
  return startIndex >= len ? len : startIndex
}

const computeDeleteNum = (startIndex, len, deleteNum, argumentsLen) => {
  if (argumentsLen === 1) {
    return len - startIndex
  }
  if (deleteNum < 0) {
    return 0
  }
  if (deleteNum > len - startIndex) {
    return len - startIndex
  }
  return deleteNum
}

const movePostElements = (array, startIndex, len, deleteNum, addElements) => {
  if (deleteNum === addElements.length) return
  if (deleteNum > addElements.length) {
    for (let i = startIndex + deleteNum; i < len; i++) {
      let fromIndex = i
      let toIndex = i - (deleteNum - addElements.length)
      if (fromIndex in array) {
        array[toIndex] = array[fromIndex]
      } else {
        delete array[toIndex]
      }
    }
    for (let i = len - 1; i >= len + addElements.length - deleteNum; i--) {
      delete array[i]
    }
  }
  if (deleteNum < addElements.length) {
    for (let i = len - 1; i >= startIndex + deleteNum; i--) {
      let fromIndex = i
      let toIndex = i + (addElements.length - deleteNum)
      if (fromIndex in array) {
        array[toIndex] = array[fromIndex]
      } else {
        delete array[toIndex]
      }
    }
  }
}
