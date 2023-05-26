// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

function deactiveLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.remove("hovered");
}

list.forEach((item) => item.addEventListener("mouseleave", deactiveLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// notif box
var box = document.getElementById("box");
var down = false;

function toggleNotifi() {
  if (down) {
    box.style.height = "0px";
    box.style.opacity = 0;
    box.style.zIndex = "-999";
    down = false;
  } else {
    box.style.height = "max-content";
    box.style.zIndex = "99";
    box.style.opacity = 1;
    down = true;
  }
}

//progress done
var done = document.querySelectorAll(".wrap-item .progress .done");
var total = document.querySelectorAll(".wrap-item .progress .total");
var progress = document.querySelectorAll(".wrap-item .progress .progress-done");
var progressText = document.querySelectorAll(
  ".wrap-item .progress .progress-text"
);

for (var i = 0; i < done.length; i++) {
  let doneAmount = parseInt(done[i].innerHTML);
  let totalAmount = parseInt(total[i].innerHTML);
  progress[i].style.width = `${(doneAmount / totalAmount) * 100}%`;
  progressText[i].innerText = `${Math.ceil((doneAmount / totalAmount) * 100)}%`;
}

//search functionality
var searchField = document.querySelector(".search");
var ids = document.querySelectorAll(".wrap-item .id span");
var wrapItems = document.querySelectorAll(".wrap-item");
// var orderDetails = document.querySelectorAll(".orderDetails");

searchField.addEventListener("keyup", function () {
  var searchValue = searchField.value;
  for (var i = 0; i<ids.length; i++) {
    if (!ids[i].innerHTML.includes(searchValue)) {
      console.log(wrapItems[i].innerHTML);
      wrapItems[i].classList.add("hidden");
    } else {
      wrapItems[i].classList.remove("hidden");
    }
  }
});