// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    
    
    const expedienteInput = document.getElementById('expediente');
    const areaSelect = document.getElementById('area');
    const caratulaInput = document.getElementById('caratula');
    const notaInput = document.getElementById('nota');
    const docDesvincularInput = document.getElementById('docDesvincular');
    const docVincularInput = document.getElementById('docVincular');
    const motivoInput = document.getElementById('motivo');
    const generarBtn = document.getElementById('generarBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultadoDiv = document.getElementById('resultado');
    const copiarBtn = document.getElementById('copiarBtn');
    
    // Función para reiniciar el formulario
    function reiniciarFormulario() {
        document.getElementById('documentoForm').reset();
        resultadoDiv.textContent = '';
        copiarBtn.style.display = 'none';
    }

    // Mostrar/ocultar campo para otra área
    areaSelect.addEventListener('change', function() {
        if (this.value === 'otro') {
            otraAreaInput.style.display = 'block';
            otraAreaInput.setAttribute('required', 'true');
        } else {
            otraAreaInput.style.display = 'none';
            otraAreaInput.removeAttribute('required');
        }
    });

    // Función para obtener el área seleccionada
    function obtenerArea() {
        const areaSeleccionada = areaSelect.value;
        if (areaSeleccionada === 'otro') {
            return otraAreaInput.value.trim();
        }
        return areaSeleccionada;
    }
    
// Función para generar el texto basado en los inputs
function generarTexto() {
    // Obtener los valores de los campos
    const nota = notaInput.value.trim();
    const expediente = expedienteInput.value.trim();
    const area = obtenerArea();
    const caratula = caratulaInput.value.trim();
    const docDesvincular = docDesvincularInput.value.trim();
    const docVincular = docVincularInput.value.trim();
    const motivo = motivoInput.value.trim();
    
    // Validar que todos los campos estén completos
    if (!area || !nota || !expediente || !caratula || !docDesvincular || !docVincular || !motivo) {
        alert('Por favor, complete todos los campos.');
        return;
    }
        
    // Generar el texto con la estructura proporcionada
    const textoGenerado = `VISTO: <strong>${expediente}</strong>.
    Descripcion de Caratula: <strong>${caratula}</strong>.
    <strong>Y CONSIDERANDO:</strong>
    Que, mediante el documento: <strong>${nota}</strong>.
    Se solicita la desvinculación del documento: <strong>${docDesvincular}</strong>.
    Debido a: <strong>${motivo}</strong>.
    Que, a través del documento <strong>${nota}</strong>.- 
    la <strong>${area}</strong> solicita el remplazo del documento subsanado por el siguiente: <strong>${docVincular}</strong>.
    Que, es oportuno realizar la subsanación en el momento que se detecta un error material
    subsanable, en los términos de la Ley 7253, y la Ley 7267 y su Decreto Reglamentario
    75/21, en el sistema GDE. Que, mediante Resolución RESOL-2020-447-E-GDESDE-MJDH, el Ministerio
    de Justicia y Derechos Humanos, organismo de aplicación del GDE conforme artículo 4 del
    Decreto 2020-958-EGDESDEGSDE, reglamenta el presente procedimiento como alternativo para
    subsanar EE "en caso de Detectarse un error material de carga en relación a números de
    documentos, nombres, apellidos, fechas, títulos y palabras o solicitud etc. Siempre y
    cuando no alteren el sentido, la eficacia y ejecutoriedad del acto administrativo" será realizada
    por el mismo agente que cometió el error, con la firma conjunta del Jefe de Despacho o Director
    según correspondiere. Que la mencionada Resolución establece que para aquellas
    subsanaciones "que excedan lo dispuesto en el párrafo precedente o deban salir la órbita
    de la Jurisdicción", deberán ser Subsanados con la firma conjunta del Ministro o Secretario".
                                <strong>POR ELLO
    EL SR. PRESIDENTE DE LA ADMINISTRACION PROVINCIAL DE RECURSOS HIDRICOS
                                RESUELVE:</strong>.-
    ARTICULO 1.- SUBSANAR el error material, desvinculando y corrigiendo el documento:
    <strong>${docDesvincular}</strong> en el sistema GDE, del expediente <strong>${expediente}</strong> y remplazándolo por el documento <strong>${docVincular}</strong> en merito a los considerandos de la presente.
    ARTICULO 2.- De forma.-`;
        
        // Mostrar el texto generado
        resultadoDiv.innerHTML = textoGenerado;
        
        // Mostrar el botón de copiar
        copiarBtn.style.display = 'block';
    }
    
    // Función para copiar el texto al portapapeles
    async function copiarTexto() {
    const resultadoDiv = document.getElementById('resultado'); // Ajusta este ID
    
    try {
        // Preservar el formato exacto del texto
        const textoFormateado = resultadoDiv.innerText || resultadoDiv.textContent;
        
        await navigator.clipboard.writeText(textoFormateado);
        alert('Texto copiado al portapapeles correctamente');
    } catch (err) {
        // Fallback para navegadores antiguos
        const elementoTexto = document.createElement('textarea');
        elementoTexto.value = resultadoDiv.innerText || resultadoDiv.textContent;
        elementoTexto.style.whiteSpace = 'pre';
        document.body.appendChild(elementoTexto);
        elementoTexto.select();
        document.execCommand('copy');
        document.body.removeChild(elementoTexto);
        alert('Texto copiado al portapapeles');
        }
    }
    
    // Asignar event listeners a los botones
    generarBtn.addEventListener('click', generarTexto);
    resetBtn.addEventListener('click', reiniciarFormulario);
    copiarBtn.addEventListener('click', copiarTexto);
});