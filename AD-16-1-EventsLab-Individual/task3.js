function getLinksInfo() {
    const enlaces = document.querySelectorAll("a");

    const numeroEnlaces = enlaces.length;
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[enlaces.length - 1].href;

    alert(
        "Número de enlaces: " + numeroEnlaces +
        "\nPrimer enlace: " + primerEnlace +
        "\nÚltimo enlace: " + ultimoEnlace
    );
}