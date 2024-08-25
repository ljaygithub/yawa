let live = 5;

while (live > 0) {

    alert(`You have ${live} lives left`);

    let answer = prompt("What is your name?");

    if (answer === "scara" || answer === "Scara") {

        alert("Correct!");

        answer = prompt("Who is your friend in roblox?")

        if (answer === "Lj" || answer === "lj" || answer == "kay" || answer == "Kay") {

            alert("Goodjob!");

            answer = prompt("What is your favorite spoken word");

            if (answer == "yawa" || answer == "Yawa" || answer == "YAWA") {

                alert("Correct Yawa ka HAHAHAHHAHAHA ");
                break;

            } else {
                live--;
                alert("Wrong answer!!! YAWA ka HAHAHAHHAHAHA ");
            }

        } else {
            live--
            alert("Wrong answer!!!");

        }

    } else {

        live--;
        alert(`You have ${live} lives left`);

    }

    if (live === 0) {

        alert("Yawa hindi natama lahat. *nalongCAT");

    }

}

function ButtonFunction() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

}