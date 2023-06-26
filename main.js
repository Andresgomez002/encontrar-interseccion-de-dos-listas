// Encontrar la intersección de dos listas: Dadas dos listas de números, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista que contenga los elementos comunes a ambas listas.
let interseccionListas = (lista1, lista2)=>{
    let listaNueva = [];
    for(let i = 0; i < lista1.length; i++){
       for(let j = 0; j < lista2.length; j++){
       if(lista1[i] == lista2[j]){
        let repetidos = lista1[i];
         listaNueva.push(repetidos);
       }
       }
    }
    return listaNueva;
    }
    
    console.log(interseccionListas([1,2,3,4],[2,4,5,6]));
    console.log(interseccionListas([1,2,6,4],[2,4,6,1]));
    console.log(interseccionListas([5,2,8,10],[1,10,5,8]));