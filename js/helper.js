function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 256);
}