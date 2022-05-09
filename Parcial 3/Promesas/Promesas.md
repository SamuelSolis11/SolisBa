## Samuel Alberto Solis  Baldenegro
### Promesas de Javascript
Las promesas de JavaScript se incorporaron en la versión 6 y aunque antes había librerías de terceros que las implementaban, no fue hasta esta versión que se hizo de forma nativa. Una promesa es un objeto que representa un valor que puede que esté disponible «ahora», en un «futuro» o que «nunca» lo esté. Como no se sabe cuándo va a estar disponible, todas las operaciones dependientes de ese valor, tendrán que posponerse en el tiempo.


JavaScript es «single threaded» (un solo hilo), lo que significa que solo puede ejecutar una acción al mismo tiempo, por lo que utilizar promesas facilita, en buena medida, el control de flujos de datos asíncronos en una aplicación.

#### Creando una promesa
Con el constructor promise y pasándole una función con dos parámetros, podremos crear una promesa. Los parámetros son resolve y reject, que nos deja decirle si ha sido resuelta o rechazada.

const promise = new Promise((resolve, reject) => {
                const number = Math.floor(Math.random() * 12);
                setTimeout(
                               () => number > 4
                                               ? resolve(number)
                                               : reject(new Error('Menor a 4')),
                               2000
                );
});

promise
                .then(number => console.log(number))
                .catch(error => console.error(error));


En el ejemplo hemos creado una promesa que se completará en 2 segundos. Si el número aleatorio que hemos generado es mayor a 4 se resolverá, en caso contrario se rechaza y se muestra un error.

#### Estados que pueden tener las promesas
Existen tres estados posibles para una promesa y estos son:

- Pendiente. De base todas las promesas están pendientes.
- Resuelta. Estará resuelta en el momento que llamemos a resolve y a continuación se ejecuta la función que pasamos al método .then. Debemos de tener en cuenta que una vez resuelta no podremos modificar el valor de la promesa, aunque si podríamos correr la misma instrucción para obtener un valor distinto y hacerlo las veces que deseemos.
- Rechazada. Pasará a estar rechazada cuando llamemos a reject y obtengamos un error que nos indicará ese rechazo, pasando a continuación a ejecutar la función que pasamos a .catch.

#### Promesas en cadena (Chaining)
En ocasiones necesitamos ejecutar varias operaciones asíncronas una tras otra, o lo que es lo mismo, después de una operación ejecutada con éxito, comienza la siguiente. Esto tiene fácil resolución utilizando una secuencia de promesas en cadena. El archivo, que vamos a llamar texto.txt, devuelve una cadena con la ubicación de otro archivo y seguido de esto queremos leer ese segundo archivo. Utilizando promesas, quedaría así:

readFile('./texto.txt')
                .then(readFile)
                .then(data => console.log(data))
                .catch(error => console.error(error));
Lo que hacemos es leer texto.txt. Si ocurre un error, la promesa se rechaza y mostramos el error con console.error. Si lo lee, ejecutamos su lectura en el primer .then y corremos un nuevo readFile.

Este segundo readFile devuelve una nueva promesa. Si hay un error ejecuta el .catch y si no, se ejecuta el segundo .then, que recibe el contenido del segundo archivo y lo muestra en consola. Podremos encadenar tantos .then como necesitemos y ejecutar funciones que devuelvan promesas. Por ejemplo:

import { resolve } from 'path';
readFile('./texto.txt.')
                .then(resolve)
                .then(readFile)
                .then(data => console.log(data))
                .catch(error => console.error(error));

Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) y que sabremos si se llevaron a cabo con éxito o no.