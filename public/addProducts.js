document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Recoge los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const inventario = document.getElementById('inventario').value;
    const tipo_producto = document.getElementById('tipo_producto').value;
    const fecha_vencimiento = document.getElementById('fecha_vencimiento').value || null;
    const precio = document.getElementById('precio').value;

    const query = `
        mutation {
            createProduct(
                nombre: "${nombre}",
                inventario: ${inventario},
                tipo_producto: "${tipo_producto}",
                fecha_vencimiento: "${fecha_vencimiento}",
                precio: ${precio}
            ) {
                id
                nombre
                inventario
                tipo_producto
                fecha_vencimiento
                precio
            }
        }
    `;

    // Realiza la solicitud POST
    fetch('https://taller-3-graphql.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(response => response.json())
    .then(data => {
        if (data.errors) {
            console.error('Error:', data.errors);
            alert('Error al enviar el producto');
        } else {
            console.log('Éxito:', data.data.createProduct);
            alert('Producto enviado con éxito');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al enviar el producto');
    });
});
