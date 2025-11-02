export function enableValidation(){
    const form = document.getElementById("formCadastro");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault;
        let valid = true;
        const inputs = form.querySelectorAll("input, select");

        inputs.forEach(input => {
            if (!input.ariaValueMax.trim()) {
                valid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!valid) {
            alert("Preencha todos os campos obrigatorios");
        } else {
            alert("Cadastro enviado com sucesso.");
            form.reset();
        }
    });
}