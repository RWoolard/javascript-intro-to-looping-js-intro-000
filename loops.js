function forLoop(array) {
  for (i = 0; i < 25; i++) {
  if (i === 1) {
    var index = "I am 1 strange loop.";
    array.push(index);
  } else {
    var index = `I am ${i} strange loop.`;
    array.push(index);
  }
}
  return array;
}
