let temaConfig = localStorage.getItem('tema')
let btnTemaOscuro = document.getElementById('btnTemaOscuro')
let btnTemaClaro = document.getElementById('btnTemaClaro')

btnTemaOscuro.addEventListener('click', ()=> cambiarTema('dark'))
btnTemaClaro.addEventListener('click', ()=> cambiarTema('light'))

function cambiarTema(color){
    document.querySelector('html').setAttribute('data-bs-theme', color);
    localStorage.setItem('tema', JSON.stringify(color))
    const icono = document.querySelector('.bi-moon-stars-fill')
    if (color === 'dark') {
        icono.classList.remove('bi-sun-fill')
        icono.classList.add('bi-moon-stars-fill')
    } else {
        icono.classList.remove('bi-moon-stars-fill')
        icono.classList.add('bi-sun-fill')
    } 
}
