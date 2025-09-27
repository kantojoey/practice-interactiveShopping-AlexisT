// ADDING ITEMS TO LIST

// VARIABLE FOR ADDITION BUTTON
const add = document.getElementById("add");

// VARIABLE FOR NEW ITEM INPUT VALUE
const newItem = document.getElementById("new-item");

// VARIABLE FOR UNORDERED LIST TAG
const shoppingList = document.getElementById("my-list");

// HANDLES INPUT FOR SUBMISSION WITH CLICK
function addItemClick(event) {
    if (newItem.value.trim() !== '') {
        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = newItem.value.trim();
        li.appendChild(textSpan);
        shoppingList.appendChild(li);
        createButtons(li);
        console.log(newItem.value);
        newItem.value = '';
    };
};

// HANDLES INPUT FOR SUBMISSION WITH ENTER KEY
function addItemEnter(event) {
    if (event.key === "Enter") {
        addItemClick();
    };
};

// CREATES AND APPENDS EDIT/REMOVE BUTTONS FOR NEW LIST ITEMS
function createButtons(item) {
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.className = "edit";

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.className = "remove";

    item.appendChild(edit);
    item.appendChild(remove);

};

// ADDS EVENT LISTENER FOR CLICK
add.addEventListener("click", addItemClick);

// ADDS EVENT LISTENER FOR ENTER
newItem.addEventListener("keydown", addItemEnter);

// EDITING + REMOVING ITEMS

shoppingList.addEventListener("click", (event) => {
    
    if(event.target.classList.contains('edit')) {
        const li = event.target.parentElement;
            if(event.target.textContent === 'Edit'){
                const span = li.querySelector('span');
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = span.textContent;
                li.insertBefore(inputField, span);
                li.removeChild(span);
                event.target.textContent = 'Save';
            } else if(event.target.textContent === 'Save'){
                const inputField = li.querySelector('input');
                const newSpan = document.createElement('span');
                if(inputField.value.trim() === ''){
                    li.remove();
                }
                else{
                    newSpan.textContent = inputField.value.trim();
                    li.insertBefore(newSpan, inputField);
                    li.removeChild(inputField);
                    event.target.textContent = 'Edit';
                }
            };
    };
    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    };
});