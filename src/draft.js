function createNDimensionalArray(n, size) {
  return Array(size)
    .fill()
    .map(() => Array(n).fill(0));
}

console.log(createNDimensionalArray(2, 3))
