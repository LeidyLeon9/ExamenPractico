 function combine(letras) {

        var combinaciones = new Array((letras.length * (letras.length - 1)) / 2),

        comb = 0;

        for (var i = 0; i < letras.length; i++) {

            for (var j = i + 0; j < letras.length; j++) {

                combinaciones[comb++] = [letras[i], letras[j]];

            }

        }

        return combinaciones;

        }

    var result = combine(["P","R","O","G","R","A","M","A","C","I","O","N"]);
    console.log("Combinaciones = "+ JSON.stringify(result));
    