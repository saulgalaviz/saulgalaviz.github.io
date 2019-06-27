var wordBank = ["a Gym Rat", "a StackOverFlow Monkey", "a Badminton Wildebeest", "a Java Giraffe", "a Humourous Hippo", "a Dining Donkey", "a LeetCode Lion"];
var counter = 1;
var element = document.getElementById("changing-text");
var instantiate = setInterval(changeText, 1500);

function changeText() {
  element.innerHTML = wordBank[counter];
  counter++;
  if (counter >= wordBank.length) {
    counter = 0;
  }
}