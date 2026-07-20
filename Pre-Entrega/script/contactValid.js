
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formContacto');
    const nombrec = document.getElementById('nombrec');
    const correoc = document.getElementById('correoc');
    const asuntoc = document.getElementById('asuntoc');
    const mensajec = document.getElementById('mensajec');

});


const msjCampo = (input, esValido, mensaje = '') => {
    const parent = input.parentNode;
    const txtErr = parent.querySelector('.txt-error');
    if (esValido) {
        parent.classList.remove('error');
        txtErr.innerText = '';
    } else {
        parent.classList.add('error');
        txtErr.innerText = mensaje;
    }
};

const controlCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formValido = true;

    if (nombrec.value.trim() === '') {
        msjCampo(nombrec, false, 'Por favor, ingresá tu nombre.');
        formValido = false;
    } else {
        msjCampo(nombrec, true);
    }

    if (correoc.value.trim() === '') {
        msjCampo(correoc, false, 'El correo electrónico es obligatorio.');
        formValido = false;
    } else if (!controlCorreo(correoc.value.trim())) {
        msjCampo(correoc, false, 'Ingresá un correo electrónico válido.');
        formValido = false;
    } else {
        msjCampo(correoc, true);
    }

    if (asuntoc.value.trim() === '') {
        msjCampo(asuntoc, false, 'Por favor, ingresá un asunto.');
        formValido = false;
    } else {
        msjCampo(asuntoc, true);
    }

    if (mensajec.value.trim() === '') {
        msjCampo(mensajec, false, 'Por favor, ingresá tu mensaje.');
        formValido = false;
    } else {
        msjCampo(mensajec, true);
    }

    if (formValido) {
        form.submit();
    }
});