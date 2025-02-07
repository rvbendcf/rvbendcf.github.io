const choiceArray = document.querySelectorAll(".choice");

choiceArray.forEach((card) => {
    const icon = card.querySelector(".icon"); // Selecciona el icono SVG dentro de la tarjeta

    card.addEventListener("click", (event) => {
        // Verifica si el clic se realizó en el icono o en cualquier elemento dentro del icono
        if (event.target === icon || icon.contains(event.target)) {
            if (card.classList.contains("expand")) {
                // Si la tarjeta ya está expandida, la cerramos
                card.classList.remove("expand");
                card.classList.add("unset");
            } else {
                // Cerramos todas las tarjetas
                choiceArray.forEach((element) => {
                    element.classList.remove("expand");
                    element.classList.add("unset");
                });
                // Expandimos la tarjeta clickeada
                card.classList.remove("unset");
                card.classList.add("expand");
            }
        }
    });
});