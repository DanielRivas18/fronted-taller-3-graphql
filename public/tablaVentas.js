async function loadData() {
    try {
        const response = await fetch("https://taller-3-graphql.onrender.com/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query: "{ getProducts{ nombre inventario precio }}" })
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

                const colNombre = document.createElement('td');
                colNombre.appendChild(document.createTextNode(product.nombre));
                row.appendChild(colNombre);

                const colInventario = document.createElement('td');
                colInventario.appendChild(document.createTextNode(product.inventario));
                row.appendChild(colInventario);

                const colPrecio = document.createElement('td');
                colPrecio.appendChild(document.createTextNode(product.precio));
                row.appendChild(colPrecio);

                tBody.appendChild(row);
            });
        }
    })
    .catch(err => console.error(err));
