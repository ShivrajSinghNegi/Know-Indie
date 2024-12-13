const data = [ 
            { "Chord": "Major", "Scale": "C", "value": "C, D, E, F, G, A, B" },
            { "Chord": "Minor", "Scale": "C", "value": "C, D, D#, F, G, G#, A#" },
            { "Chord": "Major", "Scale": "D", "value": "C#, D, E, F#, G, A, B" },
            { "Chord": "Minor", "Scale": "D", "value": "C, D, E, F, G, A, A#" },
            { "Chord": "Major", "Scale": "E", "value": "C#, D#, E, F#, G#, A, B" },
            { "Chord": "Minor", "Scale": "E", "value": "C, D, E, F#, G, A, B" },
            { "Chord": "Major", "Scale": "F", "value": "C, D, E, F, G, A, A#" },
            { "Chord": "Minor", "Scale": "F", "value": "C,C#, D#, F, G, G#, A#" },
            { "Chord": "Major", "Scale": "G", "value": "C, D, E, F#, G, A, B" },
            { "Chord": "Minor", "Scale": "G", "value": "C, D, D#, F, G, A, A#" },
            { "Chord": "Major", "Scale": "A", "value": "C#, D, E, F#, G#, A, B" },
            { "Chord": "Minor", "Scale": "A", "value": "C, D, E, F, G, A, B" },
            { "Chord": "Major", "Scale": "B", "value": "C#, D#, E, F#, G#, A#, B" },
            { "Chord": "Minor", "Scale": "B", "value": "C#, D, E,S F#, G, A, B" },
            { "Chord": "Major", "Scale": "C#", "value": "C, C#, D#, F, F#, G#, A#" },
            { "Chord": "Minor", "Scale": "C#", "value": "C#, D#, E, F#, G#, A, B" },
            { "Chord": "Major", "Scale": "D#", "value": "C, D, D#, F, G, G#, A#" },
            { "Chord": "Minor", "Scale": "D#", "value": "C#, D#, F, F#, G#, A#, B" },
            { "Chord": "Major", "Scale": "F#", "value": "C#, D#, F, F#, G#, A#, B" },
            { "Chord": "Minor", "Scale": "F#", "value": "C#, D, E, F#, G#, A, B" },
            { "Chord": "Major", "Scale": "G#", "value": "C, C#, D#, F, G, G#, A#" },
            { "Chord": "Minor", "Scale": "G#", "value": "C#, D#, E, F#, G#, A#, B#" },
            { "Chord": "Major", "Scale": "A#", "value": "C, D, D#, F, G, A, A#" },
            { "Chord": "Minor", "Scale": "A#", "value": "C, C#, D#, F, F#, G#, A#" },        
        ];

// Event listener for the Show Chords button
document.getElementById("showChords").addEventListener("click", function () {
    const firstOption = document.getElementById("one").value;
    const secondOption = document.getElementById("two").value;

    // Initially hide the result section
    const resultSection = document.getElementById("result");
    resultSection.style.display = "block";  // Show result section

    // Check if both options are selected
    if (firstOption && secondOption) {
        // Filter data based on the selected options
        const filteredData = data.filter(item => 
            item.Chord === firstOption && item.Scale === secondOption
        );

        // Display the filtered results
        if (filteredData.length > 0) {
            // Show matching results in a formatted way
            resultSection.innerHTML = filteredData.map(item => `${item.value}`).join("<br>");
        } else {
            // No results found
            resultSection.innerText = "No matching results found.";
        }
    } else {
        // Show error if both options are not selected
        resultSection.innerText = "Please select both options before showing the result!";
    }
});

// JavaScript for handling the navigation
document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector("a[href='#contact-us']");
    contactLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        document.querySelector("#contact-us").scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the "Contact Us" section
        });
    });
});

const chord = [
  {
    "Chord": "C",
    "Major": "C, E, G",
    "Minor": "C, Eb, G"
  },
  {
    "Chord": "C#",
    "Major": "Db, F, Ab",
    "Minor": "Db, Eb, Ab"
  },
  {
    "Chord": "D",
    "Major": "D, F#, A",
    "Minor": "D, F, A"
  },
  {
    "Chord": "D#",
    "Major": "Eb, G, Bb",
    "Minor": "Eb, Gb, Bb"
  },
  {
    "Chord": "E",
    "Major": "E, G#, B",
    "Minor": "E, G, B"
  },
  {
    "Chord": "F",
    "Major": "F, A, C",
    "Minor": "F, Ab, C"
  },
  {
    "Chord": "F#",
    "Major": "Gb, Bb, Db",
    "Minor": "Gb, A, Db"
  },
  {
    "Chord": "G",
    "Major": "G, B, D",
    "Minor": "G, Bb, D"
  },
  {
    "Chord": "G#",
    "Major": "Ab, C, Eb",
    "Minor": "Ab, B, Eb"
  },
  {
    "Chord": "A",
    "Major": "A, C#, E",
    "Minor": "A, C, E"
  },
  {
    "Chord": "A#",
    "Major": "Bb, D, F",
    "Minor": "Bb, Db, F"
  },
  {
    "Chord": "B",
    "Major": "B, D#, F#",
    "Minor": "B, D, F#"
  }
];

// Event listener for the Show Chords button
document.getElementById("showNotes").addEventListener("click", function () {
    const firstOption = document.getElementById("four").value; // Selected chord
    const secondOption = document.getElementById("three").value; // Selected type (Major/Minor)

    // Access the result section
    const resultSection = document.getElementById("results");

    // Check if both options are selected
    if (firstOption && secondOption) {
        // Filter data based on the selected chord
        const filteredData = chord.filter(item => item.Chord === firstOption);

        // Display the filtered results
        if (filteredData.length > 0) {
            // Check if the property exists in the filtered data and show it
            const selectedChord = filteredData[0];
            if (selectedChord[secondOption]) {
                resultSection.innerHTML = `${selectedChord[secondOption]}`;
            } else {
                resultSection.innerText = "Invalid selection!";
            }
        } else {
            resultSection.innerText = "No matching results found.";
        }
    } else {
        // Show error if both options are not selected
        resultSection.innerText = "Please select both options before showing the result!";
    }

    // Make sure the result section is visible
    resultSection.style.display = "block";
});
