window.onload = function () {

/*
Get info from forms 
*/
    var name = document.querySelector("#name");
    var subjective = document.querySelector("#subjective");
    var ProfessionOrSkill = document.querySelector("#ProfessionOrSkill")
    // var possessivePronoun = document.querySelector("#possessivePronoun");
    var PossessiveDeterminer = document.querySelector("#PossessiveDeterminer");
    var PluralityCheck = document.querySelector("#PluralityCheck");
    // var PluralityCheck = document.getElementById('checkbox');


/*
listen to HTML
*/
    var story = document.querySelector("#story")
    var launch = document.querySelector("#launchButton");
    launch.addEventListener("click", writeStory, false);
/*
GRAMMAR
*/
// if profession starts with a vowel, use "an" otherwise use "a"
    function articles(string) {
        let article;
        if (string.match('^[aieouAIEOU].*')) {
            article = 'an';
        } else {
            article = 'a';
        }
        return article;
    }

// if pronouns are plural add "s" to the end of stuff
function plurality(string) {
    let plurals;
    if (string == true) {
        plurals = 'are';
    } else {
        // nothing if singular
        plurals = 'is';
    }
    return plurals;
}


// capitalize first letter (e.g. for name and start of sentence)
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }




    function writeStory(){
        var launchedStory = "";
        // header / title of letter 
        launchedStory += "<h2>Letter of recommendation for " + capitalizeFirstLetter(name.value) + " </h2>";
        
        launchedStory += "<p>It is my pleasure to reccomend "+ capitalizeFirstLetter(name.value) + " for this position. " 
        + capitalizeFirstLetter(name.value) + " and I have gotten to know eachother well over the years. " 
        + capitalizeFirstLetter(subjective.value) + " " + plurality(PluralityCheck.checked)
        + " honest, dependable, hardworking and kind. Beyond that, " 
        + subjective.value + " " + plurality(PluralityCheck.checked) + " a uniquely talented " + ProfessionOrSkill.value 
        + ".</p>"

        + "<p>"
        + capitalizeFirstLetter(name.value) + "'s rare knowledge and expertise as " + articles(ProfessionOrSkill.value) + " "
        + ProfessionOrSkill.value + " follows "  + PossessiveDeterminer.value +" equally uncommon commitment to constant improvement." 
        + "</p>"

        + "<p>"
        + "Along with " +  PossessiveDeterminer.value + " undeniable talent, "  
        + capitalizeFirstLetter(name.value) + " has always been a joy to be around."
        + "</p>"

        + "<p>"
        + "It is without hesitation that I recommend " + capitalizeFirstLetter(name.value) 
        + " for this position as " 
        + articles(ProfessionOrSkill.value) + " " + ProfessionOrSkill.value
        + ".</p>"

        + "<p>"
        + "Kind regards,"
        + "</p>"
        + "<p>"
        + "Another human"
        + "</p>"

       story.innerHTML = launchedStory;
    }
}
