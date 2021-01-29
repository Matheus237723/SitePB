//const =  variável constante não pode ser alterada ou retribuída.
//addEventListener = maneira de registrar uma espera de evento.
//classList = troca e manipulação de classes nos elementos HTML.
//classList.toggle = se a classe existir naquele elemento, ele a remove, se não existir ele a adiciona.
//forEach = pula elementos vazios, também conhecidos como "buracos", no array.
//link.style.animation = configura regras de animação.

// **** ALERTA: FUNÇÃO JAVASCRIPT COM BUGS; NECESSITA ANÁLISE **** //
const navSlide = function () {
    const burger = document.querySelector('.menu-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toogle da Nav
    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        //Animação dos Links
        navLinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 6 + 0.3 }s`;
            }
        });

        //Menu-burger -> Animação
        burger.classList.toggle('toggle');
    });
}
navSlide();