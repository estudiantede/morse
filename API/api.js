/*  traductor_desde_texto_a_morse(texto_a_traducir: String) -> String {
 *  requiere: texto_a_traducir debe contener :letras del abecedario ingles o {. , ; - " ' _ : ( )}
 *  asegura: res devolverá la traduccion uno a uno de cada letra con su correspondiente en el código morse
 *           y cada letra se la considerará como mayuscula, o simbolo
 * }
 */

function traductor_desde_texto_a_morse(texto_a_traducir) {
    let res = ""
    texto_a_traducir = texto_a_traducir.toUpperCase(); //Lo convierte a mayusculas
    for(let i = 0; i < texto_a_traducir.length; i++) {
        let letra_a_traducir = texto_a_traducir.charAt(i)
        res += convertir_caracter_a_morse(letra_a_traducir) + " "
    }
    res = eliminar_ultimo_caracter_de_string(res)
    return res
}


/* convertirCaracter_a_Morse(caracter: Char) -> String{
 * requiere: True
 * asegura: res es la conversión a morse del caracter determinado
 *          Si el caracter no esta en la tabla de morse con la que se trabaja, entonces devuelve ""
 * }
 */

const tabla_de_texto_a_morse = {
    "A"   :   '._',
    "B"   :   '_...',
    "C"   :   '_._.',
    "D"   :   '_..',
    "E"   :   '.',
    "F"   :   '.._.',
    "G"   :   '__.',
    "H"   :   '....',
    "I"   :   '..',
    "J"   :   '.___',
    "K"   :   '_._',
    "L"   :   '._..',
    "M"   :   '__',
    "N"   :   '_.',
    "O"   :   '___',
    "P"   :   '.__.',
    "Q"   :   '__._',
    "R"   :   '._.',
    "S"   :   '...',
    "T"   :   '_',
    "U"   :   '.._',
    "V"   :   '..._',
    "W"   :   '.__',
    "X"   :   '_.._',
    "Y"   :   '_.__',
    "Z"   :   '__..',
    "0"   :   '_____',
    "1"   :   '.____',
    "2"   :   '..___',
    "3"   :   '...__',
    "4"   :   '...._',
    "5"   :   '.....',
    "6"   :   '_....',
    "7"   :   '__...',
    "8"   :   '___..',
    "9"   :   '____.',
    ","   :   '__..__',
    "?"   :   '..__..',
    ":"   :   '___...',
    "-"   :   '_...._',
    "\""  :   '._.._.',
    "("   :   '_.__.',
    "="   :   '_..._',
    "."   :   '._._._',
    ";"   :   '_._._.',
    "/"   :   '_.._.',
    "\'"  :   '.____.',
    "_"   :   '..__._',
    ")"   :   '_.__._',
    "+"   :   '._._.',
    "@"   :   '.__._.',
    " "   :   '   '
}

 function convertir_caracter_a_morse(caracter) {
    let res = tabla_de_texto_a_morse[caracter]
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

//----------------------------------------------------------------------------------------\\


/*
 * traductor_desde_morse_a_texto(texto_morse_a_traducir: String) -> String {
 * requiere: true 
 * asegura: cada letra (sea letra entendido desde el principio o un espacio) es su traducción según la tabla deñ código morse
 * }
 */

 function traductor_desde_morse_a_texto(texto_morse_a_traducir) {
    //Creación de variables
    let res = ""
    let lista_de_palabras_separadas = separar_texto_morse_en_palabras_en_morse(texto_morse_a_traducir)

    //Se itera a traves de todas las palabras separadas
    for (let i = 0; i < lista_de_palabras_separadas.length; i++) {
        res += convertir_morse_a_caracter(lista_de_palabras_separadas[i])
    }

    return res
}


/*
 * separar_texto_morse_en_palabras_en_morse(texto_morse_a_separar: String) -> List[String] {
 * requiere: los unicos caracteres que deben haber son: " ", "_" o "."
 * asegura: devuelve: las palabras que estaban entre espacios y los espacios separados, en grupos de 3 si es posible
 *          y el resto, como el resto de la division
 * }
 */
 function separar_texto_morse_en_palabras_en_morse(texto_morse_a_separar) {
    let res = []
    let es_espacio = false
    let cantidad_espacios = 0

    for (let i = 0; i < texto_morse_a_separar.length; i++) {
        let letra_en_posicion_i = texto_morse_a_separar.charAt(i)
        if(letra_en_posicion_i == '\n') {
            continue
        } else {
            if (es_espacio == true && letra_en_posicion_i === " ") {

                //Si ya había 3 espacios, entonces poner el nuevo espacio en otra ubicacion
                if (cantidad_espacios >= 3) {
                    cantidad_espacios = 1
                    res.push(" ")
                }
                else {
                    res[res.length - 1] += " "
                    cantidad_espacios += 1
                }
            } 
            else if (es_espacio == true && letra_en_posicion_i !== " ") {
                es_espacio = false
                cantidad_espacios = 0
                res.push(letra_en_posicion_i)
            }
            else if (es_espacio == false && letra_en_posicion_i === " ") {
                es_espacio = true
                cantidad_espacios = 1
                res.push(" ")
            }
            else if (es_espacio == false && letra_en_posicion_i !== " ") {
                if (res.length == 0) {
                    res.push(letra_en_posicion_i)
                }
                else {
                    res[res.length - 1] += letra_en_posicion_i
                }
                cantidad_espacios = 0
            }
        }
    }
    

    return res

}

/* buscar_espacios_en_texto(texto_morse_a_buscar_espacios: String) -> List[int] {
 *      Requiere: True
 *      Asegura: Devuelve las posiciones donde los espacios se encuentran
 * }
 */
 function buscar_espacios_en_texto(texto_morse_a_buscar_espacios) {
    let res = []

    for(let i = 0; i < texto_morse_a_buscar_espacios.length; i++) {
        if (texto_morse_a_buscar_espacios[i] == ' ') { 
            res.push(i)
        }
    }

    return res
}

/* convertirCaracter_a_Morse(caracter) {
 * requiere: True
 * asegura: res es la conversión a texto de la secuencia de puntos y rayas determinada
 *          Si la secuencia no esta en la tabla de morse con la que se trabaja, entonces devuelve ""
 * }
 */

 const tabla_de_morse_a_texto = {
    "._"    : 'A',
    "_..."  : 'B',
    "_._."  : 'C',
    "_.."   : 'D',
    "."     : 'E',
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
    let res = tabla_de_morse_a_texto[secuencia_en_morse]
    if (res == undefined) return ""
    return res
}

module.exports = {
    traductor_desde_texto_a_morse,
    traductor_desde_morse_a_texto,
 }