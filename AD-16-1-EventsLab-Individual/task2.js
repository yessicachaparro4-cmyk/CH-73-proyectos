function getFormvalue() {
    const nombre = document.querySelector('input[name="fname"]').value;
    const apellido = document.querySelector('input[name="lname"]').value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
}