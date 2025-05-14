const botones = document.querySelectorAll(".boton");
const pantalla = document.getElementById("pantalla")

let i=0;

Calculadora();

function Calculadora(){
    let numeroSeleccionado= [""];
    let rescontador=0, operacion;

    botones.forEach(function(boton){
    boton.addEventListener("click",function(){

        if(!isNaN(boton.textContent)){
            if(!numeroSeleccionado[i]){ //si la posicion actual todavia no existe la inicializo con ""
                numeroSeleccionado[i]="";
            }

            if(rescontador == 1){
                pantalla.textContent = "";
                rescontador = 0;
            }
            numeroSeleccionado[i] += boton.textContent;
            console.log(numeroSeleccionado[i]);
        }
        else{
            if(boton.textContent == "="){
                switch(operacion){
                    case 1: 
                        Suma(numeroSeleccionado,i);
                        Vaciararray(numeroSeleccionado, i);
                        i=0;
                        rescontador = 1;
                        break;
                    case 2:
                        Resta(numeroSeleccionado,i);
                        Vaciararray(numeroSeleccionado, i);
                        i=0;
                        rescontador = 1;
                        break;
                    case 3:
                        Producto(numeroSeleccionado,i);
                        Vaciararray(numeroSeleccionado,i);
                        i=0;
                        rescontador=1;
                        break;
                    case 4: 
                        Division(numeroSeleccionado,i);
                        Vaciararray(numeroSeleccionado,i);
                        i=0;
                        rescontador = 1;
                        break;
                }
                    
            }
            else if(boton.textContent == "borrar"){
                pantalla.textContent = "";
                Vaciararray(numeroSeleccionado,i);
                i=0;
            }
            else{
                operacion = Selecciondeoperacion(boton.textContent);
            }
            
        }

        if(boton.textContent != "=" && boton.textContent != "borrar"){
            pantalla.textContent += boton.textContent;
        }
        
        console.log(numeroSeleccionado);
    })
})
}

//////////////////////////////////////////////////////
//FUNCIONES GENERICAS
/////////////////////////////////////////////////////


function Selecciondeoperacion(contenido){
    let operacion;

    switch(contenido){
            case "+":
                i++;
                operacion = 1;
                break;
            case "-":
                operacion = 2;
                i++;
                break;
            case "X": 
                operacion = 3;
                i++;
                break;
            case "/": 
                operacion = 4;
                i++;
                break;
        }    
    
    return operacion
}
function Vaciararray(vec, cantelementos){
    for(let i = 0 ; i <= cantelementos; i++){
        vec[i] = "";
    }
}

///////////////////////////////////////////////////////
//OPERACIONES MATEMATICAS
//////////////////////////////////////////////////////

function Division(num, cantelementos){
    let a, resultado,j=0;

    resultado = parseInt(num[j]);
    a = parseInt(num[j+1]);

    resultado = resultado / a;

    j++;
    while(j < cantelementos){
        a = parseInt(num[j+1]);

        resultado = resultado / a;
        j++;
    }

    resultado = Math.floor(resultado);
    console.log(a);
    console.log(resultado);
    pantalla.textContent = resultado;
}

function Resta(num, cantelementos){
    let a, resultado,j=0;

    resultado = parseInt(num[j]);
    a = parseInt(num[j+1]);

    resultado = resultado - a;

    j++;
    while(j < cantelementos){
        a = parseInt(num[j+1]);

        resultado = resultado - a;
        j++;
    }

    console.log(a);
    console.log(resultado);
    pantalla.textContent = resultado;
}

function Producto(num,cantelementos){
    let a, j = cantelementos, resultado;

    resultado = parseInt(num[j]);
    a = parseInt(num[j-1]);

    resultado = resultado * a;

    j--
    while(j > 0){
        a = parseInt(num[j-1]);

        resultado = resultado * a;
        j--;
    }

    console.log(a);
    console.log(resultado);
    pantalla.textContent = resultado;
}

function Suma(num,cantelementos){
    let a, j=cantelementos, resultado;

    resultado = parseInt(num[j]);
    a = parseInt (num[j-1]);

    resultado = a+resultado;

    j--;
    while(j>0){
        
        a = parseInt (num[j-1]);

        resultado = a+resultado;
        j--;    
    }

    console.log(a);
    console.log(resultado);
    pantalla.textContent = resultado;
}
