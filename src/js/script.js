const form = document.querySelector("#formc");
const email = document.querySelector("#emailf");
const submit = document.querySelector("#sub");

submit.addEventListener('click', (e) => {
    e.preventDefault();


    const emailV = email.value;

    if (emailV === "" || emailV === false) {
        form.classList.add("erro");

        setTimeout(() => {
            form.classList.remove("erro")
        }, 4000);
        return;
    };

    email.value = ''
});

