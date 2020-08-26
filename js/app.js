
    const container = document.querySelector('#contenedor');

    document.querySelector('#boton-menu').addEventListener('click', () =>
    {
        container.classList.toggle('active');
    });

    let comprobarAncho = () => {
        if (window.innerWidth <= 768) {
            container.classList.remove('active');
        } else {
            container.classList.add('active');
        }
    }

    comprobarAncho();
    
    window.addEventListener('resize', () => {
        comprobarAncho()
    })