document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-filters-container');

    for (const [caracteristica, opciones] of Object.entries(opcionesBase)) {
        
        const divField = document.createElement('div');
        divField.className = 'field';

        const label = document.createElement('label');
        label.textContent = `${caracteristica}:`;
        divField.appendChild(label);

        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'multiselect-dropdown';

        const selectBox = document.createElement('div');
        selectBox.className = 'select-box';
        selectBox.textContent = '-- Cualquiera --';
        dropdownContainer.appendChild(selectBox);

        const listContainer = document.createElement('div');
        listContainer.className = 'dropdown-list';
        listContainer.style.display = 'none';

        opciones.forEach(opcion => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'dropdown-option';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = opcion.toLowerCase();
            checkbox.dataset.caracteristicaName = caracteristica;

            optionLabel.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            checkbox.addEventListener('change', () => {
                updateSelectBoxText();
            });

            const span = document.createElement('span');
            span.textContent = opcion.charAt(0).toUpperCase() + opcion.slice(1);

            optionLabel.appendChild(checkbox);
            optionLabel.appendChild(span);
            listContainer.appendChild(optionLabel);
        });

        dropdownContainer.appendChild(listContainer);

        selectBox.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = listContainer.style.display === 'block';
            
            document.querySelectorAll('.dropdown-list').forEach(list => {
                list.style.display = 'none';
            });

            listContainer.style.display = isOpen ? 'none' : 'block';
        });

        divField.appendChild(dropdownContainer);
        container.appendChild(divField);

        function updateSelectBoxText() {
            const checked = listContainer.querySelectorAll('input[type="checkbox"]:checked');
            if (checked.length === 0) {
                selectBox.textContent = '-- Cualquiera --';
                selectBox.classList.remove('active');
            } else if (checked.length === 1) {
                selectBox.textContent = checked[0].nextElementSibling.textContent;
                selectBox.classList.add('active');
            } else {
                selectBox.textContent = `${checked.length} seleccionados`;
                selectBox.classList.add('active');
            }
        }
    }

    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-list').forEach(list => {
            list.style.display = 'none';
        });
    });

    document.getElementById('search-btn').addEventListener('click', () => {
        const filtrosActivos = {};

        container.querySelectorAll('.field').forEach(field => {
            const checkboxes = field.querySelectorAll('input[type="checkbox"]:checked');
            if (checkboxes.length > 0) {
                const nombreCaracteristica = checkboxes[0].dataset.caracteristicaName;
                filtrosActivos[nombreCaracteristica] = Array.from(checkboxes).map(cb => cb.value);
            }
        });

        const resultados = hongosDB.filter(hongo => {
            for (const [caracteristica, valoresElegidos] of Object.entries(filtrosActivos)) {
                const valoresPermitidos = hongo.caracteristicas[caracteristica];

                if (!valoresPermitidos) return false;

                const cumpleAlgunaOpcion = valoresElegidos.some(valorElegido => 
                    valoresPermitidos.includes(valorElegido)
                );

                if (!cumpleAlgunaOpcion) {
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
                li.className = 'fungus-card';

                let attributesHTML = '';
                for (const [categoria, valores] of Object.entries(hongo.caracteristicas)) {
                    const valorStr = Array.isArray(valores) ? valores.join(', ') : valores;
                    attributesHTML += `<li><strong>${categoria}:</strong> ${valorStr}</li>`;
                }

                li.innerHTML = `
                    <img src="${hongo.imagen}" alt="${hongo.nombre}" class="fungus-img" onerror="this.src='https://via.placeholder.com/400x200?text=Imagen+No+Disponible'">
                    <div class="fungus-header">
                        <h3>${hongo.nombre}</h3>
                        <span class="badge-tipo">${hongo.tipo}</span>
                    </div>
                    
                    <details class="fungus-desc-details">
                        <summary>Ver descripción y notas</summary>
                        <p class="fungus-desc">${hongo.descripcion}</p>
                    </details>

                    <div class="fungus-attributes">
                        <h4>Atributos detallados:</h4>
                        <ul class="attributes-list">
                            ${attributesHTML}
                        </ul>
                    </div>
                `;

                listaResultados.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = "No se encontró ninguna especie que coincida con las características seleccionadas.";
            li.style.color = "#a90505";
            li.style.fontWeight = "bold";
            listaResultados.appendChild(li);
        }
    });
});