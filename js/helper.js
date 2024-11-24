function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function rng255() {
  return Math.floor(Math.random() * 256);
}