// initialize count as 0
let count = 0;
// assign h2 element to variable
let countEl = document.getElementById('count-el');
// function is called when the increment button is clicked [see h2 tag in html]
function increment() {
  //increase count by 1 on every click
  count = count + 1;
  //call innerText method for counEl variable to change to the new count
  countEl.innerText = count;
}
// called when save button is clicked
function save() {
  console.log(count);
}
