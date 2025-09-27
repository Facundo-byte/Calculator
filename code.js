const botones = document.querySelectorAll(".boton");
const pantalla = document.getElementById("pantalla");

function Calculadora() {
  let expresion = ""; // guarda la expresión completa como string
  let mostrarResultado = false;

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const valor = boton.textContent;

      if (valor === "=") {
        try {
          // evalúa la expresión reemplazando X por *
          let resultado = eval(expresion.replace(/X/g, "*"));
          pantalla.textContent = resultado;
          expresion = resultado.toString(); // permite seguir calculando con el resultado
          mostrarResultado = true;
        } catch (error) {
          pantalla.textContent = "Error";
          expresion = "";
        }
      } else if (valor.toLowerCase() === "borrar") {
        pantalla.textContent = "";
        expresion = "";
      } else {
        if (mostrarResultado) {
          // si el último click fue "=", reinicia la pantalla
          pantalla.textContent = "";
          expresion = "";
          mostrarResultado = false;
        }

        expresion += valor;
        pantalla.textContent += valor;
      }

      console.log("Expresión:", expresion);
    });
  });
}

Calculadora();
