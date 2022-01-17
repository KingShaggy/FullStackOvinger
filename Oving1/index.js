let num = 0;

function addOne() {
    num++;
    document.getElementById("add").value = num;
}

function displayOrHide() {
    let status = document.getElementById("hide");
    if (status.style.visibility === "hidden") {
        status.style.visibility = "visible";
    } else {
        status.style.visibility = "hidden";
    }
}

let list = ["Word1", "Word2", "Word3", "Word4", "Word5", "Word6", "Word7", "Word8", "Word9"];


for (i = 0; i < list.length; i++) {
    listItem = document.createElement("li");
    listItem.className = "newList";
    listItem.innerHTML = list[i];
    document.getElementById("list").appendChild(listItem);
}