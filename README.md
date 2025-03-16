1️⃣ Declarar una variable para almacenar los nombres

Se debe iniciar declarando un array para almacenar los nombres de los amigos ingresados.

let amigos = [];

2️⃣ Implementar una función para agregar amigos

Capturar el valor del campo de entrada utilizando document.getElementById() o document.querySelector().

Validar que el campo no esté vacío, mostrando un alert si lo está.

Agregar el nombre ingresado al array usando .push().

Limpiar el campo de entrada después de añadir un nombre.

3️⃣ Mostrar la lista de amigos

Seleccionar el elemento <ul> donde se mostrarán los nombres.

Limpiar la lista antes de actualizarla (innerHTML = "").

Iterar sobre el array amigos y agregar cada nombre como un <li>.

4️⃣ Realizar el sorteo

Validar que la lista de amigos no esté vacía.

Generar un índice aleatorio con Math.random() y Math.floor().

Obtener y mostrar el nombre sorteado en la interfaz.
