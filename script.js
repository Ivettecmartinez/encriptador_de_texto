document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos
    const botonEncriptar = document.getElementById('botonEncriptar');
    const botonDesencriptar = document.getElementById('botonDesencriptar');
    const imagen = document.getElementById('presentacionmuneco');
    const textoAlternativo = document.getElementById('presentacionmuneco-text');
    const textoRectangulo = document.getElementById('textorectangulo');
    const botonCopiar = document.getElementById('botonCopiar');
    const inputTexto = document.getElementById('presentacionContenidoTitulo');
    const primerTexto = document.querySelector('.primertexto');
    const segundoTexto = document.querySelector('.segundotexto');

    // Reglas de encriptación
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Función para encriptar texto
    function encriptar(texto) {
        return texto.replace(/[eioua]/g, match => reglas[match]);
    }

    // Función para desencriptar texto
    function desencriptar(texto) {
        return texto.replace(/enter|imes|ai|ober|ufat/g, match => {
            return Object.keys(reglas).find(key => reglas[key] === match);
        });
    }

    // Función para manejar la encriptación y mostrar el resultado
    function manejarEncriptar() {
        const texto = inputTexto.value.toLowerCase(); // Extrae el texto y lo convierte a minúsculas
        const textoEncriptado = encriptar(texto);
        primerTexto.textContent = ''; // Limpia el primer texto
        segundoTexto.textContent = textoEncriptado; // Muestra el texto encriptado
        mostrarTextoAlternativo();
    }

    // Función para manejar la desencriptación y mostrar el resultado
    function manejarDesencriptar() {
        const texto = inputTexto.value.toLowerCase(); // Extrae el texto y lo convierte a minúsculas
        const textoDesencriptado = desencriptar(texto);
        primerTexto.textContent = ''; // Limpia el primer texto
        segundoTexto.textContent = textoDesencriptado; // Muestra el texto desencriptado
        mostrarTextoAlternativo();
    }

    // Función para mostrar el texto alternativo y ocultar la imagen y el texto del rectángulo
    function mostrarTextoAlternativo() {
        imagen.classList.add('hidden');
        textoRectangulo.classList.remove('hidden'); // Asegúrate de mostrar el texto en el rectángulo
        botonCopiar.style.display = 'flex'; // Mostrar el botón Copiar
    }

    // Función para ocultar el texto alternativo y mostrar la imagen y el texto del rectángulo
    function mostrarImagenYTexto() {
        imagen.classList.remove('hidden');
        textoRectangulo.classList.add('hidden'); // Ocultar el texto en el rectángulo
        botonCopiar.style.display = 'none'; // Ocultar el botón Copiar
    }

    // Agregar event listeners a los botones
    botonEncriptar.addEventListener('click', manejarEncriptar);
    botonDesencriptar.addEventListener('click', manejarDesencriptar);

    // Función para copiar el texto al portapapeles
    botonCopiar.addEventListener('click', () => {
        const textoParaCopiar = segundoTexto.textContent;
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            alert('Texto copiado al portapapeles!');
        });
    });
});
