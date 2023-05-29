function next_pal(num) {
    num++; // Incrementar el número en 1
    while (true) {
        if (esPalindromo(num.toString())) { // Verificar si el número es palíndromo
        return num;
        }
    num++;
    }
  }
  
  function esPalindromo(str) {
  // Verificar si una cadena es palíndromo
    const reversar = str.split('').reverse().join('');
    return str === reversar;
  }
  
  // Ejemplo de uso
  const numero = 189;
  const siguientePalindromo = next_pal(numero);
  console.log(siguientePalindromo);
  