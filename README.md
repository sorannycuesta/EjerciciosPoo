### PREGUNTAS ANALÍTICAS

**1. Moldes vs. Objetos Literales**

La principal ventaja es que no tenemos que repetir el mismo código muchas veces. Con un molde podemos definir una estructura y después crear varios computadores a partir de ella. Si hacemos cada uno por separado, tendríamos que escribir prácticamente lo mismo varias veces y también sería más fácil cometer algún error.

**2. Uso de `this`**

`this` sirve para hacer referencia al objeto que estamos utilizando en ese momento. Por ejemplo, si tenemos varias cursos, permite que cada una use sus propios datos y no los de otra. Así podemos trabajar con la información de cada objeto de manera correcta.

**3. Cohesión de Software**

Hace que las funciones relacionadas con el objeto estén dentro del mismo lugar. Por ejemplo, si el objeto se encarga de calcular su propia nota, no tenemos que hacer ese cálculo en otra parte del programa. Además, si después cambia la forma de calcular la nota, podemos modificarlo directamente ahí.

**4. Controles de Estado Interno**

Podrían generarse problemas con la información del sistema. Por ejemplo, si un libro ya está prestado pero el sistema permite volver a prestarlo, el inventario quedaría mal y dos personas podrían aparecer como si tuvieran el mismo libro.

**5. Entrada de Datos Interactiva**

Hace que el programa sea más dinámico porque podemos ingresar los datos de diferentes vehículos sin tener que modificar el código cada vez. Así, cuando llega un vehículo nuevo, simplemente ingresamos sus datos y el programa puede procesarlos.
