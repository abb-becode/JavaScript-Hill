// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    //generate a random bird's name

    var _adjectives = [...adjectives];                                      //convert set to array
    var randomBirdName = birds[Math.floor(Math.random() * birds.length)];   //get a random bird's name
    var msg = randomBirdName.name + " " + _adjectives[4];                   //construct message to display
    var addjectif =  randomBirdName.fem ? "e" : "";                         //add e if fem property is true
    msg += addjectif;                                                       //finally message

    document.getElementById("run").addEventListener("click", () => {
        document.getElementById("target").innerHTML = msg;
    });

})();
