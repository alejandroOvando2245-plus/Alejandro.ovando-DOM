
document.addEventListener("DOMContentLoaded", function () {

    // BOTÓN PARA MOSTRAR INFORMACIÓN DEL PERFIL
    const btnDescripcion = document.getElementById("btnDescripcion");
    const extra = document.getElementById("extra");

    if (btnDescripcion && extra) {
        btnDescripcion.addEventListener("click", function () {

            const visible = extra.classList.toggle("mostrar");

            btnDescripcion.innerHTML = visible
                ? "Mostrar menos información −"
                : "Mostrar más información ＋";

            btnDescripcion.setAttribute("aria-expanded", String(visible));

        });
    }


    // BOTÓN PARA AGREGAR UN PROYECTO
    const btnProyecto = document.getElementById("btnProyecto");
    const contenedorProyectos = document.getElementById("contenedorProyectos");

    if (btnProyecto && contenedorProyectos) {
        btnProyecto.addEventListener("click", function () {

            const columna = document.createElement("div");
            columna.className = "col-lg-6";

            columna.innerHTML = `
                <article class="project-card new-card">
                    <div class="new-art">
                        <b>✳</b>
                        <small>NUEVA IDEA · EN DESARROLLO</small>
                    </div>
                    <div class="card-body">
                        <small>NUEVO PROYECTO</small>
                        <h3>Proyecto de ejemplo</h3>
                        <p>Reemplaza este texto por la descripción de tu nuevo trabajo académico o personal.</p>
                    </div>
                </article>
            `;

            contenedorProyectos.appendChild(columna);

            btnProyecto.textContent = "Proyecto agregado";
            btnProyecto.disabled = true;

        });
    }


    // VALIDACIÓN DEL FORMULARIO
    const form = document.getElementById("contactForm");
    const notice = document.getElementById("formNotice");

    if (form && notice) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.checkValidity()) {

                form.classList.add("was-validated");

                notice.textContent = "Revisa los campos obligatorios.";
                notice.className = "form-notice error";

                return;
            }

            notice.textContent =
                "Los campos se validaron correctamente. Este formulario es demostrativo y no envía datos.";

            notice.className = "form-notice success";

        });
    }


    // BOTÓN PARA MOSTRAR MENSAJE CON ONCLICK
    const boton = document.getElementById("btnMensaje");

    if (boton) {
        boton.onclick = function() {

            alert("Gracias por visitar mi portafolio profesional. En esta sección puedes conocer más sobre mis conocimientos y experiencia.");

            boton.textContent = "Mensaje mostrado correctamente";

        };
    }


    // BOTÓN PARA DETECTAR EVENTOS CON ADD EVENT LISTENER
    const botonEvento = document.getElementById("btnEvento");

    if (botonEvento) {

        botonEvento.addEventListener("click", function() {

            console.log("Evento detectado correctamente.");

            botonEvento.textContent = "Evento ejecutado";

            alert("Has utilizado addEventListener para detectar un evento de clic en JavaScript.");

        });

    }

});
