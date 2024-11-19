const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
console.log(responses[0]); // c ( rappel, l'index commence à 0 !) 

const form = document.querySelector(".quiz-form"); // cible l'élément html de classe quiz-form
form.addEventListener("submit", handleSubmit); // ajoute l'eventlistener pour réagir au "submit" et appeller la fct handleSubmit

function handleSubmit(e) {
  e.preventDefault();  // évite le comportement de rechargement par défaut du navigateur - lorsque form "submit"

  const results = [];

  // cible la valeur des cases (radio buttons) sélectionné
  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  radioButtons.forEach((radioButton, index) => {  // boucle sur chaque élément dans radioButtons                        responses[0]   responses[1] ... 
    if (radioButton.value === responses[index]) {   // compare la valeur de la réponse (a, b, c, d) et les réponses (  [   "c"     ,      "a"       , "b", "a", "c"]; )
      results.push(true);
    } else {
      results.push(false);
    }
  });
  
  // A ce state, results ressemble donc à un objet comme ceci : 
  // [true, true, true, true, false]

  showResults(results);
  addColors(results)
}
