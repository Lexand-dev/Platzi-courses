function gretting() {
  let userName = "Alexander";

  function displayUserName() {
    return `Hello ${userName}`;
  }
  return displayUserName;
}

const g = gretting();

console.log(g);
console.log(g());
