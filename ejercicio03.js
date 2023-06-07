function countNameRepetitions(names){
  const nameCounts = {}; //En este objeto almacenaré los nombres y el conteo de asteríscos
 
  for (const name of names) { //cuenta los nombres uno por uno
    const lowerCaseName = name.toLowerCase();
    if (nameCounts[lowerCaseName]){
      nameCounts[lowerCaseName]++;
    } else {
      nameCounts[lowerCaseName]= 1;
    }
    }
 
  let nameAsterisk = {};//Contendrá la estructura de datos. Nombres y recuento.
 
    for (const name in nameCounts){ //Recorrer cada name en la lista nameCounts
      const count = nameCounts[name];
      const asterisks = "*".repeat(count);
      nameAsterisk[name] = asterisks;
    }
 
    return nameAsterisk;
  }
 
 const names = ["Juan", "Carlos", "MARÍA", "JUAN", "maría", "María", "CARLOS", "juan", "CarLOS", "MAría, andres"];
 
 const result = countNameRepetitions(names);
 console.log(result);