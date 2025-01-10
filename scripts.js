// Taula de pilots
const pilots = [
    {
        "id": 0,
        "nom": "Max Verstappen",
        "equip": "Red Bull Racing",
        "dataNaixement": "30 de setembre de 1997",
        "pais": "Països Baixos",
        "victories": 63,
        "campionats": 4,
        "biografia": "Max Verstappen és un pilot neerlandès de Fórmula 1 que competeix per a Red Bull Racing. Va debutar a la F1 el 2015 i va aconseguir la seva primera victòria en 2016. És considerat un dels millors pilots de la seva generació, amb diversos títols mundials a la seva trajectòria.",
        "estadistiques": [
            { 
                "temporada": 2024, 
                "equip": "Red Bull Racing", 
                "curses": 24, 
                "victories": 8, 
                "podis": 14, 
                "punts": 437 
            }
        ],
        "foto": "verstappen.avif"
    },
    {
        "id": 1,
        "nom": "Sergio Pérez",
        "equip": "Red Bull Racing",
        "dataNaixement": "26 de gener de 1990",
        "pais": "Mèxic",
        "victories": 6,
        "campionats": 0,
        "biografia": "Sergio 'Checo' Pérez és un pilot mexicà de Fórmula 1 que competeix amb Red Bull Racing. Va debutar en 2011 i va aconseguir la seva primera victòria en 2020 amb Racing Point. Ha estat una peça clau en els èxits de Red Bull Racing i continua lluitant per podiums i victòries.",
        "estadistiques": [
            { 
                "temporada": 2024, 
                "equip": "Red Bull Racing", 
                "curses": 24, 
                "victories": 0, 
                "podis": 4, 
                "punts": 152 
            }
        ],
        "foto": "perez.avif"
    },
    {
        "id": 2,
        "nom": "Lando Norris",
        "equip": "McLaren",
        "dataNaixement": "13 de novembre de 1999",
        "pais": "Regne Unit",
        "victories": 4,
        "campionats": 0,
        "biografia": "Lando Norris és un pilot britànic de Fórmula 1 que competeix amb McLaren. Va debutar a la F1 el 2019 i va aconseguir la seva primera victòria en 2021 al Gran Premi d'Itàlia. Reconegut per la seva rapidesa i habilitat en condicions difícils, Norris és una de les promeses més brillants de la F1 actual.",
        "estadistiques": [
            { 
                "temporada": 2024, 
                "equip": "McLaren", 
                "curses": 24, 
                "victories": 4, 
                "podis": 13, 
                "punts": 374 
            }
        ],
        "foto": "norris.avif"
    }

];

// Funció per obtenir el paràmetre de la URL (ID del pilot seleccionat)
function obtenirIDPilot() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 0;  // Retorna el primer pilot per defecte si no es troba l'ID
}

// Funció per mostrar la informació del pilot seleccionat
function mostrarInfoPilot(idPilotSelec) {
    const pilot = pilots.find(p => p.id === idPilotSelec);

    if (pilot) {
        // Actualitzar la foto
        document.getElementById('pilotFoto').src = pilot.foto;

        // Actualitzar la informació del pilot
        document.getElementById('pilotNom').textContent = pilot.nom;
        document.getElementById('pilotEquip').textContent = "Equip: " + pilot.equip;
        document.getElementById('pilotDataNaixement').textContent = "Data de naixement: " + pilot.dataNaixement;
        document.getElementById('pilotBiografia').textContent = "Biografia: " + pilot.biografia;

        // Mostrar les estadístiques
        let estadistiquesHTML = "<h4>Estadístiques:</h4><table><tr><th>Temporada</th><th>Equip</th><th>Curses</th><th>Victòries</th><th>Podis</th><th>Punts</th></tr>";
        pilot.estadistiques.forEach(stats => {
            estadistiquesHTML += "<tr><td>" + stats.temporada + "</td><td>" + stats.equip + "</td><td>" + stats.curses + "</td><td>" + stats.victories + "</td><td>" + stats.podis + "</td><td>" + stats.punts + "</td></tr>";
        });
        estadistiquesHTML += "</table>";
        document.getElementById('pilotEstadistiques').innerHTML = estadistiquesHTML;
    }
}

// Quan la pàgina es carrega, mostrar la informació del pilot seleccionat
window.onload = function() {
    const idPilot = obtenirIDPilot();
    mostrarInfoPilot(idPilot);
};
