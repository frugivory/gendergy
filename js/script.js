/* 
FROM: http://jsfiddle.net/hdufg18q/1/

This is the JavaScript for our simple MadLibs type game.
Step 1 - Create a hook to the button in the UI and add an event listener
which waits for a click event.
Step 2 - Create a function which is called swapWords(), which will insert
the words from our swap list into the story.
Step 3 - Make the updated story display in the UI. */

// Hook JavaScript into the UI button.
var swapButton = document.getElementById("swapButton");
swapButton.addEventListener("click",swapWords);

// Create a story array, which is a list of our story pieces.
var thePirateStory = [
    "Ye can always pretend to be a bloodthirsty ",  //index 0
    "NOUN1",                                        //index 1
    ", threatening everyone by waving yer ",        //index 2
    "ADJECTIVE1",                                   //index 3
    " sword in the air, but until ye learn to ",    // etc.
    "VERB1",
    " like a pirate, ye'll never be ",
    "ADVERB1",
    " accepted as an authentic ",
    "NOUN2",
    ".<br></br>",
    "So here's what ye do: Cleverly work into yer daily conversations ",
    "ADJECTIVE2",
    " pirate phrases such as AHOY THERE, ",
    "PLURALNOUN1",
    ", AVAST, YE ",
    "PLURALNOUN2",
    ", and SHIVER ME ",
    "PLURALNOUN3",
    ". Remember to drop all yer g's when ye say such words as sailin', spittin', and fightin'. This will give ye a/an ",
    "BODYPART1",
    " start to being recognized as a swashbucklin' ",
    "NOUN3",
    ".<br></br>",
    "Once ye have the lingo down pat, it helps to wear a three-cornered ",
    "NOUN4",
    " on yer head, stash a/an ",
    "NOUN5",
    " in yer pants, and keep a/an ",
    "NOUN6",
    " perched atop yer ",
    "BODYPART2",
    ". Aye, now ye be a real pirate!"
];

// Create a function which will swap words into specific places in our story
// Then display the updated story in the UI
function swapWords() {
    
    thePirateStory[1] = "<span class='replacement'>" + document.getElementById("noun1").value + "</span>";
    thePirateStory[3] = "<span class='replacement'>" + document.getElementById("adjective1").value + "</span>";
    thePirateStory[5] = "<span class='replacement'>" + document.getElementById("verb1").value + "</span>";
    thePirateStory[7] = "<span class='replacement'>" + document.getElementById("adverb1").value + "</span>";
    thePirateStory[9] = "<span class='replacement'>" + document.getElementById("noun2").value + "</span>";
    thePirateStory[12] = "<span class='replacement'>" + document.getElementById("adjective2").value + "</span>";
    thePirateStory[14] = "<span class='replacement'>" + document.getElementById("pluralNoun1").value + "</span>";
    thePirateStory[16] = "<span class='replacement'>" + document.getElementById("pluralNoun2").value + "</span>";
    thePirateStory[18] = "<span class='replacement'>" + document.getElementById("pluralNoun3").value + "</span>";
    thePirateStory[20] = "<span class='replacement'>" + document.getElementById("bodyPart1").value + "</span>";
    thePirateStory[22] = "<span class='replacement'>" + document.getElementById("noun3").value + "</span>";
    thePirateStory[25] = "<span class='replacement'>" + document.getElementById("noun4").value + "</span>";
    thePirateStory[27] = "<span class='replacement'>" + document.getElementById("noun5").value + "</span>";
    thePirateStory[29] = "<span class='replacement'>" + document.getElementById("noun6").value + "</span>";
    thePirateStory[31] = "<span class='replacement'>" + document.getElementById("bodyPart2").value + "</span>";
    
    //create a variable to hold the assembled story and initialize it as an empty string.
//    var assembledPirateStory = "";
    var assembledPirateStory = thePirateStory.join("");

/* OR an alternative loop

    //Loop through the array to grab each story piece and add each piece to the end of the string to assemble the story.
    for	(var index = 0; index < thePirateStory.length; index++) {
    assembledPirateStory += thePirateStory[index];
    }
*/  
  
    document.getElementById("story").innerHTML = assembledPirateStory;
        
}
