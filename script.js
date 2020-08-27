// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");

function makeSomeMagic() {
  var likesSports = confirm("Do you like to do sports?");
  var likesPuzzles = confirm("Do you like to make puzzles?");
  var likesPets = confirm("Do you like pets?");
  var likesPizza = confirm("Do you like piza?");

  if (likesPuzzles && !likesSports && !likesPets && likesPizza) {
    return "You will make a great developer my friend. Just keep on coding!";
  } else {
    return "Your future is doomed. But hey you can always try again :)";
  }
}

function displayMagicPhrase() {
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);
