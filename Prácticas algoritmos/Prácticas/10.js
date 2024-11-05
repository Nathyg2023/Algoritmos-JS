//Agrupar objetos por propiedad:
//Planteamiento:
//Crear una función que agrupe objetos de un array basándose en el valor de una propiedad específica.
entrada: 

const inputArray = [
  { id: 1, group: 'A' },
  { id: 2, group: 'B' },
  { id: 3, group: 'A' },
  { id: 4, group: 'C' },
  { id: 5, group: 'B' },
];

const groupByProperty= (Array, prop) =>{
    return Array.reduce((grouped, item) => {
      const result = item[prop];
      if (!grouped[result]) {
        grouped[result] = [];
      }
      grouped[result].push(item);  
      return grouped;
    }, {});
  }

console.log(groupByProperty(imputArray))


//salida:
/* {
  'A': [
    { id: 1, group: 'A' },
    { id: 3, group: 'A' },
  ],
  'B': [
    { id: 2, group: 'B' },
    { id: 5, group: 'B' },
  ],
  'C': [
    { id: 4, group: 'C' },
  ],
}; */