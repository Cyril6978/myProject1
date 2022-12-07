console.log("connecté");

// click sur burger = ouverture navbar
const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navlist_mobile");

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
  console.log(list);
});
