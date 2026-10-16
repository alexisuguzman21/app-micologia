document.getElementById("search-btn").addEventListener('click',() => {
    const filtrosSeleccionados = {
        forma_pileo: document.getElementById('forma-pileo').value,
        margen_pileo: document.getElementById('margen-pileo').value,
        color: document.getElementById('color').value
    }

    const filtrosActivos = Object.fromEntries(
        Object.entries(filtrosSeleccionados).filter(([key,value]) => value != "")
    );

    const resultados = hongosDB.filter(hongo => {
        for (let caracteristica in filtrosActivos) {
            if (hongo.caracteristicas[caracteristica] !== filtrosActivos[caracteristica]) {
                return false;
            }
        }
        return true;
    });

    const listaResultados = document.getElementById("results-list");
    listaResultados.innerHTML = '';

    if (resultados.length >0) {
        resultados.forEach(hongo => {
            const li = document.createElement('li');
            li.textContent = hongo.nombre;
            listaResultados.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No se encontó ninguna especie que coincida exactamente con las características seleccionadas.";
        li.style.color = "#b60505";
        listaResultados.appendChild(li);
    }
});