var button = document.getElementById("enter");
var inputName = document.getElementById("userinputName");
var inputNumber = document.getElementById("userinputNumber");
let wrapperDiv = document.querySelector(".wrapper");

// Events on list
button.addEventListener("click", addContactAfterClick);
function addContactAfterClick() {
  if (inputNameLength() > 0 && inputNumberLength() > 0) {
    createContact();
  }
}
// keypress event listener
inputName.addEventListener("keypress", addContactAfterKeypres);
inputNumber.addEventListener("keypress", addContactAfterKeypres);
function addContactAfterKeypres() {
  if (
    inputNameLength() > 0 &&
    inputNumberLength() > 0 &&
    event.keyCode === 13
  ) {
    createContact();
  }
}
// returns length of the input value(String)
function inputNameLength() {
  return inputName.value.length;
}
function inputNumberLength() {
  return inputNumber.value.length;
}
// functions to create contacts to local storage

// create contact
function createContact() {
  // adding list to local storage
  let contacts;
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  let name = inputName.value;
  let contactNumber = inputNumber.value;
  contacts.push({ name, contactNumber });
  localStorage.setItem("contacts", JSON.stringify(contacts));
  let p = document.createElement("p");
  p.textContent = `✓ contact has been saved successfuly to storage!`;
  wrapperDiv.insertBefore(p, inputName);
  // alert("contact has been saved to localstorage");
  inputName.value = "";
  inputNumber.value = "";
}
let contacts = JSON.parse(localStorage.getItem("contacts"));

console.log(contacts);

// invoking function create list items using local storage
// (() => {
//   contacts.forEach((element, i) => {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(" " + element));
//     li.appendChild(createBtnDelete());
//     ul.appendChild(li);
//     input.value = "";
//   });
// })();

// // create delete button list item
// function createBtnDelete() {
//   var btnDelete = document.createElement("span");
//   btnDelete.appendChild(document.createTextNode("X"));
//   btnDelete.classList.add("btn-delete");
//   return btnDelete;
// }

// // toggle and delte list item

// ul.addEventListener("click", function (ev) {
//   if (ev.target.tagName === "LI") {
//     // toggel when li clicked
//     ev.target.classList.toggle("done");
//   } else if (ev.target.tagName === "SPAN") {
//     // delete li when span clicked
//     // var todos = JSON.parse(localStorage.getItem("todos"));
//     ev.target.parentElement.classList.add("delete");
//     let todoValue = ev.target.parentElement.textContent;
//     let finalTodoValue = todoValue.slice(0, todoValue.length - 1);
//     // to delete todo item from an array
//     const index = todos.findIndex((todo) => todo === finalTodoValue);
//     todos.splice(index, 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
// });
