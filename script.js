var factlist = [
  "The Sumatran tiger is classified as \"Critically Endangered,\" with fewer than 400 individuals remaining in the wild due to habitat loss and poaching", 
  "The World Wildlife Fund (WWF) highlights the vaquita—a small porpoise native to Mexico's Gulf of California—as the most endangered marine mammal, with fewer than 10 individuals left",
  "The African black rhino population, once critically threatened, has shown a slight recovery due to intensive conservation efforts, with numbers rising from 2,500 in 1995 to over 5,600 by 2022",
  "The Hawksbill turtle is critically endangered due to illegal trade in its \"tortoiseshell\" and habitat destruction; fewer than 25,000 females are believed to nest each year globally",
  "India is home to an estimated 30 million free-roaming dogs, as well as cows, cats, donkeys, and other animals living on streets. Nonprofit organizations like TOLFA and Animal Aid Unlimited provide medical care, shelter, and rescue services to these animals, with thousands rescued each year",
  "The Great Indian Bustard is one of India's most critically endangered birds, with fewer than 150 individuals remaining in the wild, primarily due to habitat loss, agricultural expansion, and collisions with power lines",
  "Red Pandas are listed as endangered in India, with populations declining by approximately 50% over the last three generations. Major threats include loss of nesting trees and bamboo due to deforestation. In India, they are found in Sikkim, western Arunachal Pradesh, Darjeeling (West Bengal), and parts of Meghalaya"
];

var count = 0;
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");

if (myButton) {
  myButton.addEventListener("click", displayfact);
}

function displayfact() {
  if (fact) {
    fact.innerHTML = factlist[count];
    count++;
    if (count == factlist.length) {
      count = 0;
    }
  }
}