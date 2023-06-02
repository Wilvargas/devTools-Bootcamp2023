function next_pal(num) {
    num++; // Incrementa el número en 1
    while (true) {
        if (esPalindromo(num.toString())) { // Verifica si el número es palíndromo
        return num;
        }
    num++;
    }
  }
  
  function esPalindromo(str) {
  // Verifica si una cadena es palíndromo
    const reversar = str.split('').reverse().join('');
    return str === reversar;
  }
  
  // Ejemplo de uso
  const numero = 187;
  const siguientePalindromo = next_pal(numero);
  console.log(siguientePalindromo);
  