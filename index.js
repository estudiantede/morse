/*  traductor_desde_texto_a_morse(texto_a_traducir) {
 *  requiere: texto_a_traducir debe contener :letras del abecedario ingles o {. , ; - " ' _ : ( )}
 *  asegura: res devolverá la traduccion uno a uno de cada letra con su correspondiente en el código morse
 *           y cada letra se la considerará como mayuscula, o simbolo
 * }
 */

function traductor_desde_texto_a_morse(texto_a_traducir) {
    let res = ""
    texto_a_traducir = texto_a_traducir.toUpperCase(); //Lo convierte a mayusculas
    for(let i = 0; i < texto_a_traducir.length; i++) {
        res += convertir_caracter_a_morse(texto_a_traducir[i]) + " "
    }
    return res
}


/* convertirCaracter_a_Morse(caracter) {
 * requiere: True
 * asegura: res es la conversión a morse del caracter determinado
 *          Si el caracter no esta en la tabla de morse con la que se trabaja, entonces devuelve ""
 * }
 */

var tabla_texto_morse = {
    'A': "._",
    'B': "_...",
    'C': "_._.",
    'D': "_..",
    'E': "_.",
    'F': ".._.",
    'G': "__.",
    'H': "....",
    'I': "..",
    'J': ".___",
    'K': "_._",
    'L': "._..",
    'M': "__",
    'N': "_.",
    'O': "___",
    'P': ".__.",
    'Q': "__._",
    'R': "._.",
    'S': "...",
    'T': "_",
    'U': ".._",
    'V': "..._",
    'W': ".__",
    'X': "_.._",
    'Y': "_.__",
    'Z': "__..",
    '0': "_____",
    '1': ".____",
    '2': "..___",
    '3': "...__",
    '4': "...._",
    '5': ".....",
    '6': "_....",
    '7': "__...",
    '8': "___..",
    '9': "____.",
    ',': "__..__",
    '?': "..__..",
    ':': "___...",
    '-': "_...._",
    '"': "._.._.",
    '(': "_.__.",
    '=': "_..._",
    '.': "._._._",
    ';': "_._._.",
    '/': "_.._.",
    '\'': ".____.",
    '_': "..__._",
    ')': "_.__._",
    '+': "._._.",
    '@': ".__._.",
}
function convertir_caracter_a_morse(caracter) {
    return res
}

console.log(traductor_desde_texto_a_morse("Hola"))