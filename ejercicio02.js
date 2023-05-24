function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      return "El array debe contener exactamente 10 números.";
    }
  
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');
  
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  // Ejemplo de uso:
  const numbers = [3, 1, 6, 8, 1, 0, 8, 0, 7, 9];
  const phoneNumber = createPhoneNumber(numbers);
  console.log(phoneNumber);
  