const display = document.getElementById("num");
const buttons = document.querySelectorAll(".numOper button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            calcular();
        } else {
            display.value += value;
        }
    });
});

function calcular() {
    try {
        if (display.value === "") return;

        display.value = eval(display.value);
    } catch (erro) {
        display.value = "Erro";
    }
}