export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Came to me in a dream.
export function powerOf(num, value) {
  var final_value = value;

  for (let i = 1; i < num; i++) {
    final_value = final_value * value;
  }
  
  return final_value;
}
