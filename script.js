console.log("connecté");

// click sur burger = ouverture navbar
const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navlist_mobile");

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  icon.classList.toggle("icon-visible");
  console.log(list);
});

//scroll animation opacity//
const ratio = 0.1; //variable de ratio 10%
const options = {
  root: null, //pas de racine, on souhaite voir à l'écran//
  rootMargin: "0px", // si on souhaite dépasser les marges pour que l'élémnet soit visible//
  threshold: 0.1, // % du contenu decouvert pour que le contenu apparaisse - 10%//
};

const visibleInvisible = function (entries, observer) {
  //constante observer possedant fonction avec 2 parametres, 1 lorsque élément visible l'autre les options
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible"); //ajout de la class reveal-visible//
      observer.unobserve(entry.target);
    }
  }); //forEach pour défiler un tableau ou objet. Pas de Else car seul le ratio visible nous interesse//
};

const observer = new IntersectionObserver(visibleInvisible, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
}); //methode observe qui permet d'observer l'élément reveal//
