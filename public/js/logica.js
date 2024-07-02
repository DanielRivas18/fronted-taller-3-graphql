document.addEventListener('DOMContentLoaded', function() {
  const filtroInput = document.getElementById('filtro-input');
  const filtrarBtn = document.getElementById('filtrar-text');
  const mostrarVencidosBtn = document.getElementById('mostrar-vencidos'); 

  filtrarBtn.addEventListener('click', function() {
      const filtroValor = filtroInput.value.toLowerCase();
      const filas = document.querySelectorAll('.table tbody tr');

      filas.forEach(function(fila) {
          const celdas = fila.querySelectorAll('td');
          let mostrarFila = false;

          celdas.forEach(function(celda) {
              const texto = celda.textContent.toLowerCase();
              if (texto.includes(filtroValor)) {
                  mostrarFila = true;
              }
          });

          if (mostrarFila) {
              fila.style.display = '';
          } else {
              fila.style.display = 'none';
          }
      });
  });

  mostrarVencidosBtn.addEventListener('click', function() {
      const filas = document.querySelectorAll('.table tbody tr');

      filas.forEach(function(fila) {
          const estadoActual = fila.querySelector('td:nth-child(6)').textContent.toLowerCase();

          if (estadoActual.includes('vencido')) {
              fila.style.display = '';
          } else {
              fila.style.display = 'none';
          }
      });
  });
});
