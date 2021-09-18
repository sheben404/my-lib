function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  const last = str[str.length - 1];
  const head = string.substr(0, string.length - 1);
  return last + reverse(head);
}
