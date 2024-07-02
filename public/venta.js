document.getElementById('ventaFormulario').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;

    const mutation = `
        mutation {
            sellProduct(nombre: "${nombre}", cantidad: ${cantidad}) {
                id
                nombre
                inventario
                precio
                estado_actual
            }
        }
    `;

    try {
        const response = await fetch('https://taller-3-graphql.onrender.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query: mutation })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Producto vendido exitosamente.');
        } else {
            alert('Error: ' + result.errors[0].message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
