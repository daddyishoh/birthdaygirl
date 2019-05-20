var text = [ "I wanted to tell you how much you mean to me....", "how thankful I am....", "that you have stuck by me and...", 
    "believed in me....", "when I didn't even believe in myself...", "but.....", "I can't find the words....", "none seem to fit quite right...",
    "so I'll have to leave it at....", "HAPPY BIRTHDAY!!! I LOVE YOU!"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2750);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
