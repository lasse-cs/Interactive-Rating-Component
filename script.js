const ratingComponent = document.querySelector(".rating-component");
const button = document.querySelector("button");
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener("click", event => {
        let isActive = number.classList.contains("active");

        numbers.forEach(number2 => number2.classList.remove("active"));

        if (!isActive)
            number.classList.add("active");
    });
});

button.addEventListener("click", submitPressed);

function submitPressed(event) {
    const activeNumber = document.querySelector(".active");
    
    if (!activeNumber)
        return;

    const img = document.createElement("img");
    img.src = "./images/illustration-thank-you.svg";
    img.alt = "Thank You";

    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.textContent = `You selected ${activeNumber.textContent} out of 5`;

    const heading = document.createElement("h1");
    heading.textContent = "Thank you!";

    const p = document.createElement("p");
    p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    const textContainer = document.createElement("div");
    textContainer.classList.add("flex-col", "small-gap");
    textContainer.appendChild(heading);
    textContainer.appendChild(p);

    ratingComponent.classList.add("thank-state");
    ratingComponent.replaceChildren(img, tag, textContainer);
}