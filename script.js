var button = document.getElementById("enter");
let btnSearch = document.getElementById("search");
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

  localStorage.setItem("contacts", JSON.stringify(contacts));
  // which index of existing element in array
  const index = contacts.findIndex((contact) => contact.name === name);
  if (indexFinder(name, contacts) === -1) {
    contacts.push({ name, contactNumber });
    let p = document.createElement("p");
    p.textContent = `✓ contact has been saved successfuly to storage!`;
    wrapperDiv.insertBefore(p, inputName);
  } else {
    let p = document.createElement("p");
    p.textContent = `${name} is already exist in contacts!`;
    p.style.color = "red";
    wrapperDiv.insertBefore(p, inputNumber);
  }
  inputName.value = "";
  inputNumber.value = "";
}
// code for button search
let contacts = JSON.parse(localStorage.getItem("contacts"));
btnSearch.addEventListener("click", searchContactAfterClick);
function searchContactAfterClick() {
  if (indexFinder(inputName.value, contacts) !== -1) {
    // it show contact number in number input field
    inputNumber.value =
      contacts[indexFinder(inputName.value, contacts)].contactNumber;
  } else {
    let p = document.createElement("p");
    p.textContent = `${inputName.value} contact does not exist in contactlist`;
    wrapperDiv.insertBefore(p, inputName);
  }
}

// function which returns index of array element
function indexFinder(nme, contacts) {
  const index = contacts.findIndex((ele) => ele.name === nme);
  return index;
}

