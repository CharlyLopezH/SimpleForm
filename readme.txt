Simple form es un ejemplo de como se realizan los formularios genéricos
ilustrando como se puede economizar código, utilizando una función que
toma el valor y el nombre en cada elemento de la forma para ir construyendo y controlando
el estado general del formulario y evitar así código repetido como sería hacerlo 
elemento (input) por elenemto.

formState es una estructura tipo objeto que va a representar un objeto definido en el formulario;
...formState, es una copia del formState que mantendremos actualizada cada que cambie el par valor/nombre.

Para ejecturar se usa el comando>yarn dev
