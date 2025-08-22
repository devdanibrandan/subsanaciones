// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const notaInput = document.getElementById('nota');
    const expedienteInput = document.getElementById('expediente');
    const caratulaInput = document.getElementById('caratula');
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
    
    // Función para generar el texto basado en los inputs
    function generarTexto() {
        // Obtener los valores de los campos
        const nota = notaInput.value.trim();
        const expediente = expedienteInput.value.trim();
        const caratula = caratulaInput.value.trim();
        const docDesvincular = docDesvincularInput.value.trim();
        const docVincular = docVincularInput.value.trim();
        const motivo = motivoInput.value.trim();
        
        // Validar que todos los campos estén completos
        if (!nota || !expediente || !caratula || !docDesvincular || !docVincular || !motivo) {
            alert('Por favor, complete todos los campos.');
            return;
        }
        
// Generar el texto con la estructura proporcionada
const textoGenerado = `VISTO:
${expediente}.-
CARATULA:${caratula}.-
Y CONSIDERANDO:
Que, mediante el documento ${nota}.-
Se solicita la desvinculación del documento ${docDesvincular}.-
Debido a que ${motivo}.
Que, a través del documento ${nota}.- la Jefatura
de Conservacion y Mantenimiento solicita el remplazo del documento subsanado por el siguiente:
${docVincular}.-
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
                              POR ELLO
EL SR. PRESIDENTE DE LA ADMINISTRACION PROVINCIAL DE RECURSOS HIDRICOS
                              RESUELVE:
ARTICULO 1.- SUBSANAR el error material, desvinculando y corrigiendo el documento:
${docDesvincular} en el sistema GDE, del expediente ${expediente} y remplazándolo por el documento 
${docVincular} en merito a los considerandos de la presente.
ARTICULO 2.- De forma.-`;
        
        // Mostrar el texto generado
        resultadoDiv.textContent = textoGenerado;
        
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