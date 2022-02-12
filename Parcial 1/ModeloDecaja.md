## Samuel Alberto Solis Baldenegro 19100257
# Modelo de Caja
 Todo en CSS tiene una caja alrededor, y comprender estas cajas es clave para poder crear diseños con CSS o para alinear elementos con otros elementos. En este artículo, echaremos un vistazo más de cerca al modelo de cajas en CSS con el que vas a poder crear diseños de compaginación más complejos con una comprensión de cómo funciona y la terminología relacionada.
### Cajas en bloque y en línea
 En CSS, en general, hay dos tipos de cajas: cajas en bloque y cajas en línea. Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página: Si una caja se define como un bloque, se comportará de las maneras siguientes: 
 - La caja fuerza un salto de línea al llegar al final de la línea.
 - La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor.
 - En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.
  - Se respetan las propiedades width y height.
 - El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.
  
 A menos que decidamos cambiar el tipo de visualización a en línea, elementos como los encabezados (por ejemplo, (h1- Etiqueta)) y todos los elementos (p Etiqueta) usan por defecto block como tipo de visualización externa.
### Si una caja tiene una visualización externa de tipo inline, entonces:
- La caja no fuerza ningún salto de línea al  llegar al final de la línea.
- Las propiedades width y height no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.
  
 El elemento (a etiqueta), que se utiliza para los enlaces,
  y los elementos (span etiqueta), (em etiqueta) y (strong etiqueta) son ejemplos de elementos que se muestran en línea por defecto.

El tipo de caja que se aplica a un elemento está definido por los valores de propiedad display, como block y inline, y se relaciona con el valor externo (outer) de visualización (display).
## Tipos de visualización interna y externa
En este punto, será mejor que también expliquemos los tipos de visualización interna y externa. Como se mencionó anteriormente, las cajas en CSS tienen un tipo de visualización externa, que define si se trata de una caja en bloque o en línea.

Sin embargo, las cajas también tienen un tipo de visualización interna, que determina cómo se disponen los elementos dentro de esa caja. De forma predeterminada, los elementos dentro de una caja se presentan en flujo normal, lo que significa que se comportan como otros elementos de tipo en bloque o en línea (como se explicó anteriormente).

Sin embargo, podemos cambiar el tipo de visualización interna utilizando valores de display, como flex. Si en un elemento establecemos display: flex;, el tipo de visualización externa es de tipo bloque (block), pero el tipo de visualización interna cambia a flexible (flex). Cualquier elemento que sea hijo directo de esta caja pasará a comportarse como un elemento de tipo flex, de acuerdo con las reglas que se establecen en la especificación de Flexbox, tema que veremos más adelante.
## Ejemplos de diferentes tipos de visualización
Sigamos adelante y veamos algunos ejemplos. A continuación tenemos tres elementos HTML diferentes, todos con visualización externa de tipo block. El primero es un párrafo, que tiene un borde añadido con CSS. El navegador representa esto como una caja en bloque, por lo que el párrafo comienza en una línea nueva y se expande por todo el ancho disponible.

El segundo es una lista, que se presenta usando display: flex. Esto establece una disposición flexible para los elementos que están dentro del contenedor; sin embargo, la lista en sí misma es una caja que se comporta en bloque y, como el párrafo, se expande por todo el ancho del contenedor y fuerza un salto de línea al llegar al final de línea.

Debajo hay un párrafo a nivel de bloque, dentro del cual hay dos elementos <span>. Estos elementos normalmente serían de tipo inline; sin embargo, uno de los elementos tiene una clase de bloque, y lo hemos establecido como display: block.
## ¿Qué es el modelo de cajas CSS?
El modelo de cajas CSS completo se aplica a cajas que presentan comportamiento en bloque; las cajas con comportamiento en línea solo usan una parte del comportamiento definido en el modelo de cajas. El modelo define cómo funcionan juntas las diferentes partes de una caja (margen, borde, relleno y contenido) para crear una caja que puedas ver en tu página. Para complicarlo un poco más, hay un modelo de cajas estándar y un modelo de cajas alternativo.

## Partes de una caja
Al hacer una caja de tipo bloque en CSS tenemos los elementos siguientes:

El contenido de la caja (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height.
El relleno de la caja (o padding box): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.
El borde de la caja (o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
El margen de la caja (o margin box): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.


## Propiedades
Propiedades que controlan el flujo del contenido en una caja.
 
 - box-decoration-break 

La propiedad CSS box-decoration-break especifica cómo se deben representar los fragmentos de un elemento cuando se dividen en varias líneas, columnas o páginas.
- box-sizing

La propiedad CSS box-sizing como el user agent  debe calcular el ancho y alto total de un elemento.
- overflow

La propiedad CSS overflow especifica: si recortar contenido, dibujar barras de desplazamiento o mostrar el contenido excedente en un elemento a nivel de bloque.

Usando la propiedad overflow con un valor distinto a visible, valor por defecto, creará un nuevo contexto de formatos de bloques. Esto es técnicamente necesario debido a que si un elemento flotante interceptara con otros forzaría a reajustar el contenido alrededor de los elementos que se interceden. El reajuste sucedería luego de cada desplazamiento, y llevaría a un desplazamiento demasiado lento.

Nótese que, cambiando programáticamente el valor de scrollTop al elemento HTML relevante, incluso cuando overflow tenga el valor oculto, un elemento podría necesitar ser desplazado.

- overflow-x 

La propiedad overflow-x CSS establece lo que se muestra cuando el contenido desborda los bordes izquierdo y derecho de un elemento a nivel de bloque. Esto puede ser nada, una barra de desplazamiento o el contenido de desbordamiento.

- overflow-y

La propiedad CSS overflow-y define qué se debe mostrar cuando el contenido se desborda de los extremos superior e inferior de un elemento en bloque.

## Propiedades que controlan el tamaño de una caja.

- height

La propiedad CSS height especifica la altura del area de contenido de un elemento. El área de contenido está dentro del padding, borde, y margen del elemento.

Las propiedades min-height y max-height sobreescriben el valor de height.

- width

La propiedad CSS width especifica la anchura del area de contenido de un elemento. El área de contenido está dentro del padding, borde, y margen del elemento. Las propiedades min-width y max-width (en-US) sobreescriben el valor de width.

- max height

La propiedad max-height se utiliza para definir la altura máxima de un elemento dado. Impide que el valor de la altura pueda llegar a ser más grande que la de max-height.

valor inicial: ninguno
Se aplica a : elementos de bloque o remplazados
valor heredado: no
Porcentajes: se refiere a la altura del bloque contenedor.

- max-width

The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.

- min-height

La propiedad min-height se utiliza para definir la altura mínima de un elemento dado. Impide que el valor de la propiedad height llegue a ser más pequeña que la especificada en la altura mínima (min-height).

- min-width

La propiedad min-width se usa para determinar la anchura mínima de un elemento. Previene que la propiedad width pueda ser inferior que min-width.

Valor inicial: 0
Aplicable a: elementos de tipo bloque.
Heredable: no
Porcentajes: se refieren a la anchura del bloque contenedor.
Media: visual


## Propiedades que controlan los rellenos de una caja

- padding

La propiedad CSS padding establece el espacio de relleno requerido por todos los lados de un elemento. El área de padding es el espacio entre el contenido del elemento y su borde (border). No se permiten valores negativos.

La propiedad padding es un atajo para evitar la asignación de cada lado por separado (padding-top, padding-right, padding-bottom, padding-left).

- padding-bottom

La propiedad padding-bottom CSS establece el espacio de relleno requerido en la parte inferior del elemento. El área de padding es el espacio entre el contenido del elemento y su borde. Contrariamente de la propiedad margin-bottom, valores negativos no son válidos.

-  padding-left 

La propiedad CSS padding-left establece el ancho del área de relleno a la izquierda de un elemento.


- padding-right

La propiedad CSS padding-right establece el ancho del área de relleno a la derecha de un elemento

- padding-top

La propiedad padding-top CSS establece el espacio de relleno requerido en la parte superior del elemento. El área de padding es el espacio entre el contenido del elemento y su borde. Contrariamente de la 
propiedad margin-top, valores negativos no son válidos.


## Otras propiedades
- box-shadow
- visibility