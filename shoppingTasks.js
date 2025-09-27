// ADDING ITEMS TO LIST

// ELEMENT FOR ADDITION BUTTON
const add = document.getElementById("add");

// ELEMENT FOR NEW ITEM INPUT VALUE
const newItem = document.getElementById("new-item");

// ELEMENT FOR UNORDERED LIST TAG
const shoppingList = document.getElementById("my-list");

// ELEMENT FOR LIST ITEM TAG
// const li = document.getElementById("list-item");

// ELEMENT FOR EDIT BUTTON
const edit = document.getElementById("edit");

// ELEMENT FOR REMOVE BUTTON
const remove = document.getElementById("remove");

// HANDLES INPUT FOR SUBMISSION WITH CLICK
function addItemClick(event) {
    const li = document.createElement('li');
    if (newItem.value !== '') {
        li.textContent = newItem.value;
        shoppingList.appendChild(li);
        li.style.visibility = "visible";
        newItem.value = '';
        console.log(newItem.value);
    }
};
// HANDLES INPUT FOR SUBMISSION WITH ENTER KEY
function addItemEnter(event) {
    const li = document.createElement('li');
    if(event.key === "Enter"){
        addItemClick();
    };
};

// ADDS EVENT LISTENER FOR CLICK
add.addEventListener("click", addItemClick);

// ADDS EVENT LISTENER FOR ENTER
newItem.addEventListener("keydown", addItemEnter);