# Propiedades Flexbox


#### Samuel Alberto Solis Baldenegro
#### 19100257

<div style="text-align: justify">
La propiedad de display flex, ayuda a colocar las cajas como si fueran celdas de tablas, con un comportamiento predecible y adaptable. Mozilla a estas cajas flexibles las llama el Diseño del Santo Grial, flex soluciona problemas de control del diseño y se adpata facilmente a los diferentes dispositivos.

Para los diseñadores es la mejor solución, la caja padre contiene cajas que se pueden colocar en cualquier direccción y tienen dimensiones flexibles, se adpatan al espacio visible, con flex nos olvidamos de float y clear.
El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.
![](https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/31458/images/ynBifd7QM64krev4brgO_flex_terms.png)

- Contenedor: Es el elemento padre que tendrá en su interior cada uno de los ítems flexibles. Observa que al contrario que muchas otras estructuras CSS, por norma general, en Flex establecemos las propiedades al elemento padre.
- Eje principal: Los contenedores flexibles tendrán una orientación principal específica. Por defecto, es en horizontal (en fila).
- Eje secundario: De la misma forma, los contenedores flexibles tendrán una orientación secundaria, perpendicular a la principal. Si la principal es en horizontal, la secundaria será en vertical, y viceversa.
- Ítem: Cada uno de los hijos flexibles que tendrá el contenedor en su interior.
#### Dirección de los ejes ##
Existen dos propiedades principales para manipular la dirección y comportamiento de los ítems a lo largo del eje principal del contenedor. Son las siguientes:
|   Propiedades	| |  | ||
|---|---|---|---|---|
| flex-direction|**row:** Los item se ordenan en horizontal   | **row-reverse:** Los item se ordenan en horizontal pero los se invierte el punto de inicio y final y el orden de los item| **column:** Los elementos se ordenan en el eje vertical | **column-reverse:** Se ordenan en el eje vertical pero invertidos  |
| flex-wrap | **nowrap:** Establece los ítems en una sola línea (no permite que se desborde el contenedor).  | **wrap:** Establece los ítems en modo multilínea (permite que se desborde el contenedor).   | **wrap-reverse:** Establece los ítems en modo multilínea, pero en dirección inversa. |   |   |

La dirección establece el eje derecha izquierda o arriba a abajo.
Por otro lado, existe otra propiedad llamada flex-wrap con la que podemos especificar el comportamiento del contenedor respecto a evitar que se desborde (nowrap, valor por defecto) o permitir que lo haga, en cuyo caso, estaríamos hablando de un contenedor flexbox multilinea.



### Propiedades de alineación ###
|   Propiedades	|Valor | Eje |
|---|---|---|
| justify-content 	| flex-start , flex-end , center , space-between , space-around , space-evenly 	| 1 	| 
|  align-content	| flex-start , flex-end , center , space-between , space-around , space-evenly , stretch 	|2 | 
| align-items 	| flex-start , flex-end ,center , stretch , baseline 	| 2 	|  
|  align-self	|  auto , flex-start , flex-end , center , stretch , baseline	| 2 	|  	


![](https://desarrolloweb.com/archivoimg/general/4191.png)

Propiedades mas importantes:
- **justify-content:**  Se utiliza para alinear los ítems del eje principal (por defecto, el horizontal).

|Valor|	Descripción|
|-----|------------|
|flex-start|	Agrupa los ítems al principio del eje principal.|
|flex-end|	Agrupa los ítems al final del eje principal.|
|center|	Agrupa los ítems al centro del eje principal.|
|space-between|	Distribuye los ítems dejando el máximo espacio para separarlos.|
|space-around|	Distribuye los ítems dejando el mismo espacio alrededor de ellos (izq/dcha).|
|space-evenly|	Distribuye los ítems dejando el mismo espacio (solapado) a izquierda y derecha.|

Con cada uno de estos valores, modificaremos la disposición de los ítems del contenedor donde se aplica.

- **align-items:** Usada para alinear los ítems del eje secundario (por defecto, el vertical).
  
  
|Valor|	Descripción|
|-----|------------|
|flex-start|Agrupa los ítems al principio del eje principal.|
|flex-end|	Agrupa los ítems al final del eje principal.|
|center|	Agrupa los ítems al centro del eje principal.|
|space-between|	Distribuye los ítems desde el inicio hasta el final.|
|space-around|	Distribuye los ítems dejando el mismo espacio a los lados de cada uno.|
|stretch|	Estira los ítems para ocupar de forma equitativa todo el espacio.|

Con estos valores, vemos como cambiamos la disposición en vertical (porque partimos de un ejemplo en el que estamos utilizando flex-direction: row, y el eje principal es horizontal) de los ítems que están dentro de un contenedor multilinea.

### Propiedades de hijos ###
Las siguientes propiedades, sin embargo, se aplican sobre los ítems hijos:
|  Propiedades	| Valor |  Descripción	|  
|---	|---	|---	|
|ORDEN  	| ``` order: <valor >```	|  Para modificar el orden natural de las cajas HTML.	|  	
| GROW 	|  	``` flex-grow: <number>;  /* default 0 */ ``` |  Permite definir el crecimiento de las cajas si es necesario.| 
| SHRINK	| ```flex-shrink: <number>; /* default 1 */ ```	|  Define la posibilidad de encoger de una caja si es necesario	|  	
| BASIS	| ``` flex-basis: <length>  ```	| Distribución del espacio sobrante 	|
| FLEX 	| ```flex: none  [ <'flex-grow'> <'flex-shrink'>? <'flex-basis'> ]```| Para escribir todos los valores anteriores en una sola propiedad: 	|  	
|  ALIGN-SELF	|```align-self: auto , flex-start , flex-end , center , baseline , stretch;```| Alineación independiente de cada ítem. 	|