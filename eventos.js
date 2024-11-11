// Manejador de eventos para el contenedor (div)
document.getElementById("contenedor").addEventListener("click", function() {
    alert("Hola! Soy el div");
  });
  
  // Manejador de eventos para el botón, evitando la propagación al contenedor
  document.getElementById("saludarBtn").addEventListener("click", function(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert("Hola!");
  });
  