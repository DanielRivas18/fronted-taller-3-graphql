async function loadData() {
    try {
        const response = await fetch("https://taller-3-graphql.onrender.com", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query: "{ getProducts{ precio nombre inventario id tipo_producto estado_actual fecha_vencimiento }}" })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.error(err);
        return null;
    }
}

loadData()
    .then(data => {
        if (data) {
            const products = data.data.getProducts;
            const tBody = document.querySelector("#tBodi");
            products.forEach(product => {
                const row = document.createElement('tr');

                const colId = document.createElement('td');
                colId.appendChild(document.createTextNode(product.id));
                row.appendChild(colId);

                const colNombre = document.createElement('td');
                colNombre.appendChild(document.createTextNode(product.nombre));
                row.appendChild(colNombre);

                const colInventario = document.createElement('td');
                colInventario.appendChild(document.createTextNode(product.inventario));
                row.appendChild(colInventario);

                const colPrecio = document.createElement('td');
                colPrecio.appendChild(document.createTextNode(product.precio));
                row.appendChild(colPrecio);

                const colTipo = document.createElement('td');
                colTipo.appendChild(document.createTextNode(product.tipo_producto));
                row.appendChild(colTipo);

                const colEstado = document.createElement('td');
                colEstado.appendChild(document.createTextNode(product.estado_actual));
                if (product.estado_actual === 'Vencido') {
                    colEstado.classList.add('text-danger');
                } else {
                    colEstado.classList.add('text-success');
                }
                row.appendChild(colEstado);

                const colIngreso = document.createElement('td');
                colIngreso.appendChild(document.createTextNode(product.fecha_vencimiento));
                row.appendChild(colIngreso);

                tBody.appendChild(row);
            });
        }
    })
    .catch(err => console.error(err));
