const data = [
            { "Chord": "Major", "Scale": "C", "value": "" },
            { "Chord": "Minor", "Scale": "C", "value": "Example B" },
            { "Chord": "Major", "Scale": "D", "value": "Example A" },
            { "Chord": "Minor", "Scale": "D", "value": "Example B" },
            { "Chord": "Major", "Scale": "E", "value": "Example A" },
            { "Chord": "Minor", "Scale": "E", "value": "Example B" },
            { "Chord": "Major", "Scale": "F", "value": "Example A" },
            { "Chord": "Minor", "Scale": "F", "value": "Example B" },
            { "Chord": "Major", "Scale": "G", "value": "Example A" },
            { "Chord": "Minor", "Scale": "G", "value": "Example B" },
            { "Chord": "Major", "Scale": "A", "value": "Example A" },
            { "Chord": "Minor", "Scale": "A", "value": "Example B" },
            { "Chord": "Major", "Scale": "B", "value": "Example A" },
            { "Chord": "Minor", "Scale": "B", "value": "Example B" },
            { "Chord": "Major", "Scale": "C#", "value": "Example A" },
            { "Chord": "Minor", "Scale": "C#", "value": "Example B" },
            { "Chord": "Major", "Scale": "D#", "value": "Example A" },
            { "Chord": "Minor", "Scale": "D#", "value": "Example B" },
            { "Chord": "Major", "Scale": "F#", "value": "Example A" },
            { "Chord": "Minor", "Scale": "F#", "value": "Example B" },
            { "Chord": "Major", "Scale": "G#", "value": "Example A" },
            { "Chord": "Minor", "Scale": "G#", "value": "Example B" },
            { "Chord": "Major", "Scale": "A#", "value": "Example A" },
            { "Chord": "Minor", "Scale": "A#", "value": "Example B" },        
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

