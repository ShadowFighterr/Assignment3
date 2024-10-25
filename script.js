document.getElementById("submit").addEventListener("click", () => {
    const calculate = () => {
        let name = document.getElementById("name").value;
        let price = Number(document.getElementById("startingBid").value);

        if (!name || !price) return alert("Please enter a valid name and starting bid.");

        price *= Number(document.getElementById("education").value);
        price *= Number(document.getElementById("networth").value);
        price += Number(document.getElementById("caste").value);

        const skills = Array.from(document.getElementsByClassName("skills"))
            .filter(skill => skill.checked)
            .reduce((total, skill) => total + Number(skill.value), 0);
        price += skills;

        document.querySelectorAll("input[name='age']").forEach(age => {
            if (age.checked) price *= Number(age.value);
        });

        const reputations = document.querySelectorAll(".reputation");
        for (let i = 0; i < reputations.length; i++) {
            if (reputations[i].checked) {
                if (Number(reputations[i].value) < 1) {
                    price *= Number(reputations[i].value);
                } else {
                    price += Number(reputations[i].value);
                }
            }
        }

        const loveLetter = document.getElementById("loveLetter").value;
        const person = {
            namee: name,
            pricee: price,
            loveLetterr: loveLetter
        };

        document.getElementById("result").innerHTML = `Your price for ${person.namee} is $${person.pricee.toFixed(2)}.<br>Love Letter: ${person.loveLetterr}`;
    };

    calculate();
});
