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
    res = eliminar_ultimo_caracter_de_string(res)
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
    ' ': "   "
}

function convertir_caracter_a_morse(caracter) {
    let res = tabla_texto_morse[caracter]
    if (res == undefined) {
        return ""
    }
    else {
        return res
    }
}

function eliminar_ultimo_caracter_de_string(string) {
    return string.substring(0, string.length - 1)
}


/*
 * traductor_desde_morse_a_texto(texto_morse_a_traducir) {
 * requiere: true 
 * asegura: cada letra (sea letra entendido desde el principio o un espacio) es su traducción según la tabla deñ código morse
 * }
 */

function traductor_desde_morse_a_texto(texto_morse_a_traducir) {
    //Creación de variables
    let res = ""
    let cache = ""
    for(let i = 0; i < texto_morse_a_traducir.length; i++) {
        if (texto_morse_a_traducir[i] == ' ') {
            res += convertir_caracter_a_morse(cache)
            cache = ""
        } else {
            cache
        }
        

    }
}

/* convertirCaracter_a_Morse(caracter) {
 * requiere: True
 * asegura: res es la conversión a texto de la secuencia de puntos y rayas determinada
 *          Si la secuencia no esta en la tabla de morse con la que se trabaja, entonces devuelve ""
 * }
 */

var tabla_texto_morse = {
    "._"    : 'A',
    "_..."  : 'B',
    "_._."  : 'C',
    "_.."   : 'D',
    "_."    : 'E',
    ".._."  : 'F',
    "__."   : 'G',
    "...."  : 'H',
    ".."    : 'I',
    ".___"  : 'J',
    "_._"   : 'K',
    "._.."  : 'L',
    "__"    : 'M',
    "_."    : 'N',
    "___"   : 'O',
    ".__."  : 'P',
    "__._"  : 'Q',
    "._."   : 'R',
    "..."   : 'S',
    "_"     : 'T',
    ".._"   : 'U',
    "..._"  : 'V',
    ".__"   : 'W',
    "_.._"  : 'X',
    "_.__"  : 'Y',
    "__.."  : 'Z',
    "_____" : '0',
    ".____" : '1',
    "..___" : '2',
    "...__" : '3',
    "...._" : '4',
    "....." : '5',
    "_...." : '6',
    "__..." : '7',
    "___.." : '8',
    "____." : '9',
    "__..__": ',',
    "..__..": '?',
    "___...": ':',
    "_...._": '-',
    "._.._.": '"',
    "_.__." : '(',
    "_..._" : '=',
    "._._._": '.',
    "_._._.": ';',
    "_.._." : '/',
    ".____.": '\'',
    "..__._": '_',
    "_.__._": ')',
    "._._." : '+',
    ".__._.": '@',
    "   "   : ' '
}

function convertir_morse_a_caracter(secuencia_en_morse) {
    let res = tabla_texto_morse[secuencia_en_morse]
    if (res == undefined) return ""
    return res
}