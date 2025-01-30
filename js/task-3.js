const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// console.log(input);
// console.log(output);

input.addEventListener("input", handleInput);

function handleInput() {
    const str = input.value.trim();
    output.textContent = str !== "" ? str : "Anonymous";

}
