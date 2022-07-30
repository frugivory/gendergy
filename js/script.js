/* 
FROM: http://jsfiddle.net/hdufg18q/1/

This is the JavaScript for our simple MadLibs type game.
Step 1 - Create a hook to the button in the UI and add an event listener
which waits for a click event.
Step 2 - Create a function which is called swapWords(), which will insert
the words from our swap list into the story.
Step 3 - Make the updated story display in the UI. */

// Hook JavaScript into the UI button.
// var swapButton = document.getElementById("swapButton");
// swapButton.addEventListener("click",swapWords);


window.onload = function () {
    var name = document.querySelector("#name");
    var subjective = document.querySelector("#subjective");
    var ProfessionOrSkill = document.querySelector("#ProfessionOrSkill")
    // var possessivePronoun = document.querySelector("#possessivePronoun");
    var PossessiveDeterminer = document.querySelector("#PossessiveDeterminer");
// 
    var story = document.querySelector("#story")
    var launch = document.querySelector("#launchButton");
    launch.addEventListener("click", writeStory, false);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    function writeStory(){
        var launchedStory = "";
        // header / title of letter 
        launchedStory += "<h2>Letter of recommendation for " + capitalizeFirstLetter(name.value) + " </h2>";

        launchedStory += "<p>It is my pleasure to reccomend "+ capitalizeFirstLetter(name.value) + " for this position. " 
        + capitalizeFirstLetter(name.value) + " and I have gotten to know eachother well over the years. " 
        + capitalizeFirstLetter(subjective.value) + " is honest, dependable, hardworking and kind. Beyond that, " 
        + subjective.value + " is a uniquely talented " + ProfessionOrSkill.value 
        + ".</p>"

        + "<p>"
        + capitalizeFirstLetter(name.value) + "'s rare knowledge and expertise as a " 
        + ProfessionOrSkill.value + " follows "  + PossessiveDeterminer.value +" equally rare commitment to constant improvement." 
        + "</p>"

        + "<p>"
        + "Along with " +  PossessiveDeterminer.value + " undeniable talent, "  
        + capitalizeFirstLetter(name.value) + " has always been a joy to be around."
        + "</p>"

        + "<p>"
        + "It is without hesitation that I recommend " + capitalizeFirstLetter(name.value) 
        + " for this position as a" + ProfessionOrSkill.value
        + ".</p>"

        + "<p>"
        + "Kind regards,"
        + "</p>"
        + "<p>"
        + "Another human"
        + "</p>"




        // launchedStory += "Only silly people choose " + color.value + " as their favorite color.</p>";
        // launchedStory += "<p>Is " + place.value + " your current place or your birth place.</p>";
        

       story.innerHTML = launchedStory;
    }
}
