# Practica_js_navegador

Web para el control de gastos en la que se pueden añadir ingresos y gastos.
He intentado aplicar el localStorage pero hay ciertos aspectos que no sé bien como se hacen. 
Primero el local Storage se sobreescribía con cada input, así que asignándolo a una variable he conseguido mantenerlos todos. 
Pero al refrescar la página y añadir nuevos inputs, el localStorage se "resetea" y empieza a guardar los nuevos inputs en lugar de añadirlos a los anteriores.
Tampoco ha sabido gestionar bien la eliminación de un input que he recuperado de localStorage.
