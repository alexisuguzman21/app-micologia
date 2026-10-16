const opcionesBase = {
    "Posición del estípite": [
        "central",
        "excéntrico",
        "lateral",
        "ausente/no aplicable"
    ],
    "Inserción de láminas": [
        "libres",
        "adnexas",
        "adnatas",
        "sinuadas",
        "decurrentes",
        "sin láminas/no aplicable"
    ],
    "Margen de láminas": [
        "entero",
        "aserrado",
        "ondulado",
        "erosionado",
        "festoneado/escalopado",
        "concoloro",
        "discoloro"
    ],
    "Espaciado de láminas": [
        "juntas",
        "separadas",
        "con lamélulas cortas",
        "sin láminas/no aplicable"
    ],
    "Margen del píleo": [
        "liso",
        "estriado",
        "apendiculado",
        "incurvado",
        "enrollado",
        "ondulado",
        "con restos de velo"
    ],
    "Forma del píleo": [
        "convexo",
        "plano",
        "deprimido",
        "umbonado",
        "campanulado",
        "cónico",
        "embudado",
        "infundibuliforme",
        "dimidiado/abanicado",
        "sin píleo típico/no aplicable"
    ],
    "Superficie del píleo": [
        "lisa",
        "fibrilosa",
        "escamosa",
        "agrietada/areolada",
        "viscosa",
        "granulosa",
        "rugosa",
        "reticulada",
        "espinosa/esculturada",
        "pubescente/afelpada"
    ],
    "Anillo/velo parcial": [
        "ausente",
        "simple",
        "doble",
        "membranoso",
        "colgante",
        "ascendente/reflejo",
        "cortina",
        "no aplicable"
    ],
    "Superficie del estípite": [
        "lisa",
        "reticulada",
        "fibrilosa",
        "escamosa",
        "estriada",
        "granulosa/punteada",
        "pruinosa",
        "viscosa",
        "no aplicable"
    ],
    "Forma del estípite": [
        "igual",
        "atenuado",
        "ensanchado hacia la base",
        "bulboso",
        "claviforme",
        "comprimido",
        "excéntrico/lateral",
        "ausente/no aplicable"
    ],
    "Contexto del estípite": [
        "sólido",
        "relleno",
        "hueco",
        "cavernoso",
        "no aplicable"
    ],
    "Base del estípite": [
        "simple",
        "bulbosa",
        "con rizomorfos",
        "con micelio basal",
        "con pseudorr raíces/cordones",
        "con almohadilla micelial",
        "ausente/no aplicable"
    ],
    "Volva": [
        "ausente",
        "saciforme",
        "envolvente",
        "circuncisa",
        "con margen lobulado",
        "no aplicable"
    ],
    "Color y medidas": [
        "color del píleo",
        "color del estípite",
        "diámetro del píleo (mm)",
        "ancho del estípite (mm)",
        "longitud del estípite (mm)",
        "color de la superficie del píleo",
        "color de la superficie del estípite"
    ]
};

const hongosDB = [
    {
        "nombre": "Amanita arocheae",
        "caracteristicas": {
            "Forma del píleo": [
                "cónico",
                "convexo",
                "umbonado"
            ],
            "Superficie del píleo": [
                "fibrilosa"
            ],
            "Margen del píleo": [
                "liso"
            ],
            "Inserción de láminas": [
                "libres"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Anillo/velo parcial": [
                "simple"
            ],
            "Volva": [
                "saciforme"
            ]
        }
    },
    {
        "nombre": "Amanita muscaria",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo",
                "plano"
            ],
            "Superficie del píleo": [
                "viscosa"
            ],
            "Margen del píleo": [
                "estriado"
            ],
            "Inserción de láminas": [
                "libres"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Anillo/velo parcial": [
                "simple"
            ],
            "Volva": [
                "saciforme"
            ]
        }
    },
    {
        "nombre": "Chlorophyllum molybdites",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo",
                "plano"
            ],
            "Superficie del píleo": [
                "escamosa",
                "fibrilosa"
            ],
            "Margen del píleo": [
                "estriado"
            ],
            "Inserción de láminas": [
                "libres"
            ],
            "Espaciado de láminas": [
                "juntas",
                "con lamélulas cortas"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Anillo/velo parcial": [
                "simple"
            ],
            "Volva": [
                "ausente"
            ]
        }
    },
    {
        "nombre": "Macrolepiota procera",
        "caracteristicas": {
            "Forma del píleo": [
                "umbonado",
                "convexo",
                "plano"
            ],
            "Superficie del píleo": [
                "escamosa",
                "fibrilosa"
            ],
            "Inserción de láminas": [
                "libres"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Anillo/velo parcial": [
                "doble"
            ]
        }
    },
    {
        "nombre": "Armillaria mellea",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo",
                "plano",
                "umbonado"
            ],
            "Superficie del píleo": [
                "viscosa",
                "escamosa"
            ],
            "Inserción de láminas": [
                "adnatas",
                "decurrentes"
            ],
            "Margen de láminas": [
                "entero"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Forma del estípite": [
                "ensanchado hacia la base"
            ],
            "Anillo/velo parcial": [
                "membranoso"
            ],
            "Superficie del estípite": [
                "fibrilosa"
            ]
        }
    },
    {
        "nombre": "Laccaria vinaceobrunnea",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo",
                "plano",
                "deprimido"
            ],
            "Superficie del píleo": [
                "escamosa"
            ],
            "Margen del píleo": [
                "estriado"
            ],
            "Inserción de láminas": [
                "adnatas",
                "decurrentes"
            ],
            "Espaciado de láminas": [
                "separadas"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Superficie del estípite": [
                "fibrilosa"
            ],
            "Base del estípite": [
                "con micelio basal"
            ]
        }
    },
    {
        "nombre": "Lactarius mexicanus",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo",
                "deprimido"
            ],
            "Margen del píleo": [
                "enrollado"
            ],
            "Posición del estípite": [
                "central",
                "excéntrico"
            ],
            "Forma del estípite": [
                "atenuado",
                "claviforme"
            ],
            "Superficie del estípite": [
                "estriada"
            ],
            "Base del estípite": [
                "con rizomorfos"
            ]
        }
    },
    {
        "nombre": "Boletus edulis complex",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo"
            ],
            "Superficie del píleo": [
                "lisa",
                "viscosa",
                "agrietada/areolada"
            ],
            "Forma del estípite": [
                "claviforme"
            ],
            "Superficie del estípite": [
                "reticulada"
            ]
        }
    },
    {
        "nombre": "Calvatia cyathiformis",
        "caracteristicas": {
            "Forma del píleo": [
                "sin píleo típico/no aplicable"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ],
            "Superficie del píleo": [
                "lisa",
                "agrietada/areolada"
            ],
            "Posición del estípite": [
                "ausente/no aplicable"
            ],
            "Forma del estípite": [
                "ausente/no aplicable"
            ],
            "Contexto del estípite": [
                "no aplicable"
            ],
            "Volva": [
                "no aplicable"
            ]
        }
    },
    {
        "nombre": "Morchella esculenta species complex",
        "caracteristicas": {
            "Forma del píleo": [
                "cónico",
                "convexo"
            ],
            "Superficie del píleo": [
                "reticulada",
                "rugosa"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Forma del estípite": [
                "ensanchado hacia la base"
            ],
            "Contexto del estípite": [
                "hueco"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ]
        }
    },
    {
        "nombre": "Verpa bohemica",
        "caracteristicas": {
            "Forma del píleo": [
                "cónico",
                "campanulado"
            ],
            "Superficie del píleo": [
                "rugosa"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Contexto del estípite": [
                "hueco"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ]
        }
    },
    {
        "nombre": "Helvella lacunosa sensu lato (complejo)",
        "caracteristicas": {
            "Forma del píleo": [
                "sin píleo típico/no aplicable"
            ],
            "Superficie del píleo": [
                "rugosa"
            ],
            "Margen del píleo": [
                "enrollado"
            ],
            "Posición del estípite": [
                "central"
            ],
            "Superficie del estípite": [
                "estriada"
            ],
            "Forma del estípite": [
                "comprimido"
            ],
            "Contexto del estípite": [
                "hueco"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ]
        }
    },
    {
        "nombre": "Hydnum repandum",
        "caracteristicas": {
            "Forma del píleo": [
                "convexo",
                "plano",
                "deprimido"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ]
        }
    },
    {
        "nombre": "Craterellus cornucopioides",
        "caracteristicas": {
            "Forma del píleo": [
                "embudado",
                "infundibuliforme"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ],
            "Posición del estípite": [
                "central"
            ]
        }
    },
    {
        "nombre": "Auricularia cornea",
        "caracteristicas": {
            "Forma del píleo": [
                "sin píleo típico/no aplicable"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ],
            "Posición del estípite": [
                "ausente/no aplicable"
            ],
            "Forma del estípite": [
                "ausente/no aplicable"
            ]
        }
    },
    {
        "nombre": "Ramaria formosa",
        "caracteristicas": {
            "Forma del píleo": [
                "sin píleo típico/no aplicable"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ],
            "Posición del estípite": [
                "ausente/no aplicable"
            ],
            "Forma del estípite": [
                "ausente/no aplicable"
            ]
        }
    },
    {
        "nombre": "Geastrum chamelense",
        "caracteristicas": {
            "Forma del píleo": [
                "sin píleo típico/no aplicable"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ],
            "Posición del estípite": [
                "ausente/no aplicable"
            ],
            "Forma del estípite": [
                "ausente/no aplicable"
            ]
        }
    },
    {
        "nombre": "Cordyceps mexicana",
        "caracteristicas": {
            "Forma del píleo": [
                "sin píleo típico/no aplicable"
            ],
            "Inserción de láminas": [
                "sin láminas/no aplicable"
            ],
            "Espaciado de láminas": [
                "sin láminas/no aplicable"
            ],
            "Posición del estípite": [
                "ausente/no aplicable"
            ]
        }
    }
];