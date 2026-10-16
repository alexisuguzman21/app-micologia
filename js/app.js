document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-filters-container');

    for (const [caracteristica, opciones] of Object.entries(opcionesBase)) {
        const fieldId = caracteristica.toLowerCase().replace(/[^a-z0-9]/g, '-');

        const divField = document.createElement('div');
        divField.className = 'field';

        const label = document.createElement('label');
        label.setAttribute('for', fieldId);
        label.textContent = `${caracteristica}:`;

        const select = document.createElement('select');
        select.id = fieldId;
        select.dataset.caracteristicaName = caracteristica;

        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "-- Cualquiera --";
        select.appendChild(defaultOption);

        opciones.forEach(opcion => {
            const opt = document.createElement('option');
            opt.value = opcion.toLowerCase();
            opt.textContent = opcion.charAt(0).toUpperCase() + opcion.slice(1);
            select.appendChild(opt);
        });

        divField.appendChild(label);
        divField.appendChild(select);
        container.appendChild(divField);
    }

    document.getElementById('search-btn').addEventListener('click', () => {
        const selects = container.querySelectorAll('select');
        const filtrosActivos = {};

        selects.forEach(select => {
            const valor = select.value;
            if (valor) {
                const nombreCaracteristica = select.dataset.caracteristicaName;
                filtrosActivos[nombreCaracteristica] = valor;
            }
        });

        const resultados = hongosDB.filter(hongo => {
            for (const [caracteristica, valorElegido] of Object.entries(filtrosActivos)) {
                const valoresPermitidos = hongo.caracteristicas[caracteristica];

                if (!valoresPermitidos || !valoresPermitidos.includes(valorElegido)) {
                    return false;
                }
            }
            return true;
        });

        const listaResultados = document.getElementById("results-list");
        listaResultados.innerHTML = '';

        if (resultados.length > 0) {
            resultados.forEach(hongo => {
                const li = document.createElement('li');
                li.textContent = hongo.nombre;
                listaResultados.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = "No se encontró ninguna especie que coincida con las características seleccionadas.";
            li.style.color = "#c0392b";
            listaResultados.appendChild(li);
        }
    });
});