
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("contactForm");
    const alertaMensaje = document.getElementById("alertaMensaje");

    if (formulario && alertaMensaje) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            alertaMensaje.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show"
                     role="alert">

                    <strong>¡Mensaje enviado!</strong>
                    Gracias por contactarnos.
                    Tu mensaje de prueba se registró
                    en el formulario.

                    <button type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Cerrar">
                    </button>

                </div>
            `;

            formulario.reset();

        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("contactForm");
    const alertaMensaje = document.getElementById("alertaMensaje");

    if (formulario && alertaMensaje) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            alertaMensaje.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show"
                     role="alert">

                    <strong>¡Mensaje enviado!</strong>

                    Gracias por utilizar el formulario
                    de demostración de TechBlog.

                    <button type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Cerrar">
                    </button>

                </div>
            `;

            formulario.reset();

        });
    }
});
