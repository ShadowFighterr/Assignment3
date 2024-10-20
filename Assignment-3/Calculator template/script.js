document.getElementById("submit").addEventListener("click", calculatePrice);

function calculatePrice() {
    let basePrice = 100;
    let price = basePrice;

    // Education level
    const education = document.getElementById("education").value;
    if (education === "bachelor") price *= 1.5;
    else if (education === "college") price *= 1.2;
    else if (education === "high_school") price *= 1.05;
    else if (education === "middle_school") price *= 0.9;

    // Family net worth
    const networth = document.getElementById("networth").value;
    if (networth === "upper_class") price *= 2;
    else if (networth === "middle_class") price *= 1.5;
    else if (networth === "lower_class") price *= 1.2;

    // Caste
    const caste = document.querySelector('input[name="caste"]:checked');
    if (caste) {
        const casteValue = caste.value;
        if (casteValue === "brahmin") price += 100;
        else if (casteValue === "kshatriya") price += 50;
        else if (casteValue === "vaishya") price += 20;
        else if (casteValue === "shudra") price += 10;
        else if (casteValue === "untouchable") price -= 50;
    }

    // Skills
    if (document.getElementById("music_skill").checked) price += 10;
    if (document.getElementById("cooking_skill").checked) price += 20;
    if (document.getElementById("easygoing_skill").checked) price += 15;
    if (document.getElementById("singing_skill").checked) price += 10;

    // Age
    const age = document.querySelector('input[name="age"]:checked').value;
    if (age === "18-23") price *= 1.5;
    else if (age === "24-27") price *= 1.2;
    else if (age === "28+") price *= 0.95;

    // Reputation
    if (document.getElementById("parent_gossip").checked) price *= 0.85;
    if (document.getElementById("character_gossip").checked) price *= 0.9;
    if (document.getElementById("general_gossip").checked) price -= 20;

    // Display the result
    const resultContainer = document.getElementById("result");
    if (!resultContainer) {
        const resultElement = document.createElement("h2");
        resultElement.id = "result";
        resultElement.innerText = "The calculated price is: $" + price.toFixed(2);
        document.querySelector(".container").appendChild(resultElement);
    } else {
        resultContainer.innerText = "The calculated price is: $" + price.toFixed(2);
    }

    // Apply CSS to the result for visual effect
    resultContainer.style.color = "green";
}
