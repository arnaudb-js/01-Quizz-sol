const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
console.log(responses[0]); // c ( rappel, l'index commence à 0 !) 

const form = document.querySelector(".quiz-form"); // cible l'élément html de classe quiz-form
form.addEventListener("submit", handleSubmit); // ajoute un eventlistener pour réagir au "submit" et appeller la fct handleSubmit
                                                // Rappel: l'évènement submit est déclenché au clic sur un bouton type="submit"

function handleSubmit(event) {
  event.preventDefault();  // évite le comportement de rechargement par défaut du navigateur - lorsque form "submit". 

  const results = [];

  // cible la valeur des cases (radio buttons) sélectionnées
  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  radioButtons.forEach((radioButton, index) => {  // boucle sur chaque élément dans radioButtons                        responses[0]   responses[1] ... 
    if (radioButton.value === responses[index]) {   // compare la valeur de la case sélectionnée/réponse (a, b, c, d) et les réponses (  [   "c"     ,      "a"       , "b", "a", "c"]; )
      results.push(true);
    } else {
      results.push(false);
    }
  });
  
  // A ce stade, results ressemble donc à un tableau comme ceci : 
  // [true, true, true, true, false]

  showResults(results);
  addColors(results)
}

const titleResult = document.querySelector(".results h2");  // cible le h2 qui contient la directive en bas de page (sous le boutton)
const markResult = document.querySelector(".mark");  // cible 2 paragraphes vides en fin de page 
const helpResult = document.querySelector(".help");

function showResults(results) {
  
  const errorsNumber = results.filter(el => el === false).length; // La méthode .filter() crée un nouveau tableau contenant les éléments de results qui satisfont la condition
  
  console.log("contenu de results: "+results);
   console.log("Resultats de results.filter(el => el === false): "+ resultatsErrones);
 // console.log("Resultats de .length : "+ errorsNumber);

  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>5 / 5</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 5</span>";
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 5</span>";
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 5</span>";
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 5</span>";
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 5</span>";
      break;

    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }
}


const questions = document.querySelectorAll(".question-block");

function addColors(results) {
  results.forEach((response, index) => {
    if(results[index]) {  // test si la valeur est vrai ou faux
      questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
    } else {
      questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
    }
  })
}

const radioInputs = document.querySelectorAll("input[type='radio']")

radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor))

function resetColor(e) {

  const index = e.target.getAttribute("name").slice(1)  - 1;  //  méthode .slice() extrait une sous-chaîne d'une chaîne de caractères. Nos radioButtons ont pour nom q1, q2, q3. slice(1) renvoye son chiffre, auquel on soustrait 1 (pour obtenir l'index)
  const parentQuestionBlock = questions[index];
 
  parentQuestionBlock.style.backgroundColor = "#f1f1f1";
  parentQuestionBlock.style.backgroundImage = "none";    

}
