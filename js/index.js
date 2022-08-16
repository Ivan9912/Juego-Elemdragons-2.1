function init () {

    let botonFuego = document.getElementById (`boton-fuego`);
    let botonTierra = document.getElementById(`boton-tierra`);
    let botonAgua = document.getElementById(`boton-agua`);
    botonFuego.addEventListener (`click`, elementoFuego);
    botonTierra.addEventListener (`click`, elementoTierra);
    botonAgua.addEventListener (`click`, elementoAgua);

    let botonParaMascotaJugador = document.getElementById (`seleccionar-mascota-jugador`);
    botonParaMascotaJugador.addEventListener (`click`, seleccionarMascotaJugador);  

    let botonParaMascotaJugadorAleatorio = document.getElementById (`seleccionar-mascota-jugador-aleatorio`);
    botonParaMascotaJugadorAleatorio.addEventListener (`click`, seleccionarMascotaJugadorAleatorio); 

    let botonReinicio = document.getElementById (`boton-reiniciar`);
    botonReinicio.addEventListener (`click`, botonDeReinicio);

    relogActualizable ();

    let escuchaOpcionesRadio = document.forms[`seleccionar-mascota`].elements[`mascota`];
    for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
        escuchaOpcionesRadio[i].onclick = function() {
            let spanInputsSelect = document.getElementById (`botones-requisito-seleccion`);
            
            if (seleccion == 0) {
                spanInputsSelect.innerHTML = `
            <button type = "button" id = "seleccionar-mascota-jugador" onclick = seleccionarMascotaJugador() + seleccionarMascotaPc() class = "section-botones-select2">
                Select
            </button> 
            <button type = "button" id = "seleccionar-mascota-jugador-aleatorio" disabled class = "section-botones-aleatorio2">
                Random
            </button>`;
            }
            //let chequeo = escuchaOpcionesRadio[i].checked;
            if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[0]) {
                alert (listaMascotas[0]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[1]) {
                alert (listaMascotas[1]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[2]) {
                alert (listaMascotas[2]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[3]) {
                alert (listaMascotas[3]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[4]) {
                alert (listaMascotas[4]);
            } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[5]) {
                alert (listaMascotas[5]);
            }
            //console.log (chequeo);
            seleccion++;
            
        }
    }
};

function seleccionarMascotaJugador () {
    let input1 = document.getElementById (`mascota-1`);
    let input2 = document.getElementById (`mascota-2`);
    let input3 = document.getElementById (`mascota-3`);
    let input4 = document.getElementById (`mascota-4`);
    let input5 = document.getElementById (`mascota-5`);
    let input6 = document.getElementById (`mascota-6`);
    let spanVidaJugador = document.getElementById (`span-vida-jugador`);
    let hoverBotonSelect = document.getElementById (`seleccionar-mascota-jugador`);
    hoverBotonSelect.addEventListener (`mouseover`, () => hoverBotonSelect.setAttribute (`style`, `background-color: black; color: bisque;`));
    hoverBotonSelect.addEventListener (`mouseout`, () => hoverBotonSelect.setAttribute (`style`, `background-color: transparent; color: black;`));

    if (input1.checked) {
        registroDeElecciones (1);
    } else if (input2.checked){
        registroDeElecciones (2);
    } else if (input3.checked){
        registroDeElecciones (3);
    } else if (input4.checked){
        registroDeElecciones (4);
    } else if (input5.checked){
        registroDeElecciones (5);
    } else if (input6.checked){
        registroDeElecciones (6);
    } 
    
    seleccionarMascotaPc();
    spanVidaJugador.innerHTML = vidaJugador;
    let sectionMain2 = document.getElementById(`section-botones-seleccion-jugador`);
    sectionMain2.style.display=`none`;
};

function seleccionarMascotaJugadorAleatorio () {
    let aleatorioMascotaJugador = random (min, max);
    let spanMenuMascotas = document.getElementById (`botones-requisito-seleccion`);
    spanMenuMascotas.innerHTML = `<p>Seleccionaste el botón <b>"aleatorio"</b> por ende, no podrás volver a seleccionar sin <b>reiniciar</b> el juego.</p>`;
    let spanVidaJugador = document.getElementById (`span-vida-jugador`);
        
    if (aleatorioMascotaJugador == 1) {
        registroDeElecciones (1);  
        
        } else if (aleatorioMascotaJugador == 2) {
            registroDeElecciones (2);
        } else if (aleatorioMascotaJugador == 3) {
            registroDeElecciones (3);
        } else if (aleatorioMascotaJugador == 4) {
            registroDeElecciones (4);
        } else if (aleatorioMascotaJugador == 5) {
            registroDeElecciones (5);
        } else if (aleatorioMascotaJugador == 6) {
            registroDeElecciones (6);
    }
    seleccionarMascotaPc();
    spanVidaJugador.innerHTML = vidaJugador;
};

function registroDeElecciones (mascota) {
    let spanMascotaJugador = document.getElementById (`nombre-mascota-jugador`);
    mascotaElegidaPorJugador.unshift (mascotasEleccion[mascota-1].name);
    spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[0];
    ataqueDelJugadorALaPc = registroDeAtaque[mascota-1];
    vidaJugador = registroDeVida[mascota-1];
    validarBotonesAtaque (mascota);
};

function seleccionarMascotaPc () {
    
    let spanVidaPc = document.getElementById (`span-vida-pc`);
    let aleatorioMascotaPc = random (min, max);
        
    if (aleatorioMascotaPc == 1) {
        registroDeEleccionesPc(1);
        } else if (aleatorioMascotaPc == 2) {
            registroDeEleccionesPc(2);
        } else if (aleatorioMascotaPc == 3) {
            registroDeEleccionesPc(3);
        } else if (aleatorioMascotaPc == 4) {
            registroDeEleccionesPc(4);
        } else if (aleatorioMascotaPc == 5) {
            registroDeEleccionesPc(5);
        } else if (aleatorioMascotaPc == 6) {
            registroDeEleccionesPc(6);
    }
    spanVidaPc.innerHTML = vidaPc;
};

function registroDeEleccionesPc (MascotaPc) {
    let spanMascotaAleatorioPc = document.getElementById (`nombre-mascota-pc`);
    mascotaElegidaPorPc.unshift (mascotasEleccion[MascotaPc-1].name); 
    spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[0];
    ataqueDeLaPcAlJugador = registroDeAtaque[MascotaPc-1];
    vidaPc = registroDeVida[MascotaPc-1];
    eleccionPc = MascotaPc;
};

function validarBotonesAtaque (codigoMascota) {
    let botonFuego = document.getElementById (`boton-fuego`);
    let botonTierra = document.getElementById(`boton-tierra`);
    let botonAgua = document.getElementById(`boton-agua`);

    if (codigoMascota == 1) {
        botonFuego.style.display = `none`;
        botonTierra.style.display = `none`;

        botonAgua.style.display = `flex`;
        escuchaBotonAgua = botonAgua;
    } else if (codigoMascota == 2) {
        botonTierra.style.display = `none`;
        botonAgua.style.display = `none`;

        botonFuego.style.display = `flex`;
        escuchaBotonTierra = botonTierra;
    } else if (codigoMascota == 3) {
        botonAgua.style.display = `none`;
        botonFuego.style.display = `none`;

        botonTierra.style.display = `flex`;
        escuchaBotonDeFuego = botonFuego;
    } else if (codigoMascota == 4) {
        botonTierra.style.display = `none`;

        botonFuego.style.display = `flex`;
        botonAgua.style.display = `flex`;
        escuchaBotonDeFuego = botonFuego;
        escuchaBotonAgua = botonAgua;
    } else if (codigoMascota == 5) {
        botonFuego.style.display = `none`;

        botonAgua.style.display = `flex`;
        botonTierra.style.display = `flex`;
        escuchaBotonTierra = botonTierra;
        escuchaBotonAgua = botonAgua;
    } else if (codigoMascota == 6) {
        botonAgua.style.display = `none`;

        botonFuego.style.display = `flex`;
        botonTierra.style.display = `flex`;
        escuchaBotonDeFuego = botonFuego;
        escuchaBotonTierra = botonTierra;
    }
    let sectionAtaque = document.getElementById (`section-ataque`);
    sectionAtaque.style.display=`block`;
    let sectionMain = document.getElementById(`section-main`);
    sectionMain.style.display=`none`;
};

function elementoFuego () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    ataqueElementoJugador = `Fuego 🔥`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();
};

function elementoAgua () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    ataqueElementoJugador = `Agua 💧`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();    
};

function elementoTierra () {
    let spanElementosJugador = document.getElementById (`span-elementos-jugador`);
    ataqueElementoJugador = `Tierra ☘`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();
};

function ataqueDeLaPc () {
    let ataqueAleatorio = random (min, (max-4));
    let spanElementosDeLaPc = document.getElementById (`span-elementos-enemigo`);
    ataqueDelJugadorALaPc = ataqueAleatoriooo();
    ataqueDeLaPcAlJugador = ataqueAleatoriooo();

    if (eleccionPc == 1) {
        ataqueElementoDeLaPc = `Agua 💧`;
    } else if (eleccionPc == 2) {
        ataqueElementoDeLaPc = `Fuego 🔥`;
    } else if (eleccionPc == 3) {
        ataqueElementoDeLaPc = `Tierra ☘`;
    } else if (eleccionPc == 4) {
        if (ataqueAleatorio == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        }
    } else if (eleccionPc == 5) {
        if (ataqueAleatorio == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        }
    } else if (eleccionPc == 6) {
        if (ataqueAleatorio == 1) {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        }
    }
    spanElementosDeLaPc.innerHTML = `Elemento de ${ataqueElementoDeLaPc}`;
    combateDeElementos();
};

function botonDeReinicio () {
    location.reload(); 
};

function random (minimo, maximo) {
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo);
};

function ataqueAleatoriooo () {
    let aletoidad = random (60, 100); //REVISAR ACA PARA SELECCIONAR VARIOS ATAQUES.
    return aletoidad
};

//----------------------------
function seleccionarMascotaPcTrampa () {
    for (i = 0; i< 2; i++) {
        seleccionarMascotaPc()
        
    }
    let spanMascotaAleatorioPc = document.getElementById (`nombre-mascota-pc`);
    let aleatorioMascotaPc = random (min, mascotaElegidaPorPc.length-1);
    spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[aleatorioMascotaPc];
    //console.table (mascotaElegidaPorPc); //MIRAR ACA se itera en mascotaAlea objetos y se seleccionan aleatoriamente...
   
    alert (`
    Este botón se desarrolló para probar las posibles variables de 
    ataques. 
    
    Éste es tú valor que se cambiará:  "${mascotaElegidaPorPc[aleatorioMascotaPc]}"`);
};

function trampa () {
    //console.log (i);
    if (i % 2 || i == 1) {
        let trampa = document.getElementById (`trampa`);
        trampa.innerHTML = `
        <div> 
            <button id = "boton-pc" class = "boton-trampa">
                Elegir por la pc.
            </button>
        </div>`;
        let botonDeTrampa2 = document.getElementById (`boton-pc`);
        botonDeTrampa2.addEventListener (`click`, seleccionarMascotaPcTrampa)
    } else {
        let trampa = document.getElementById (`trampa`);
        trampa.innerHTML = ``;
    }
    i++;
    return i
};

function music () {
    let spanMusic = document.getElementById (`music`);
    spanMusic.innerHTML = `<iframe  width="300" height="300" src="https://www.youtube.com/embed/c3aN6Tv4WLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
}
//----------------------------

function crearMensajeResultado () {
    let esperaResultadoAleatorio = random ((min * 1000), (max * 1000))
    for (wait = 0; wait <= esperaResultadoAleatorio; wait++) {
        if (wait == esperaResultadoAleatorio) {
            let seccionMensajes = document.getElementById (`mensajes`);
            let parrafo = document.createElement (`p`);
            parrafo.innerHTML = `${ataqueElementoJugador}  ${ataqueElementoDeLaPc}  ${progresoDeAtaques}`;
            seccionMensajes.appendChild(parrafo);
        }
        //console.log (wait);
    }
};

// se podria eleiminar la variable ResultadoDeAtaques y colocarlo como parametro de crearMensajeResultado con el valor de cada condicional (ganar, perder o empatar).

//COMBATE-------------------------
function combateDeElementos () {
    let spanVidaJugador = document.getElementById (`span-vida-jugador`);
    let spanVidaPc = document.getElementById (`span-vida-pc`);

    if (ataqueElementoDeLaPc == ataqueElementoJugador) {
        progresoDeAtaques = `MISS 😮😮😮😮`;
        crearMensajeResultado();
    } else if ((ataqueElementoDeLaPc == `Fuego 🔥` && ataqueElementoJugador == `Tierra ☘`) || (ataqueElementoDeLaPc == `Tierra ☘` && ataqueElementoJugador == `Agua 💧`) || (ataqueElementoDeLaPc == `Agua 💧` && ataqueElementoJugador == `Fuego 🔥`)) {
        progresoDeAtaques = `vida del dragón de la Pc pierde ${ataqueDelJugadorALaPc}`;
        vidaPc = vidaPc - ataqueDelJugadorALaPc; //ACA SE MODIFICA LA VIDA DEL PC
        if (vidaPc <= 0) {
            spanVidaPc.innerHTML = 0;
            crearMensajeResultado();
            revisarVidas ();
        } else {
            spanVidaPc.innerHTML = vidaPc;
            crearMensajeResultado();
        }
    } else {
        progresoDeAtaques = `vida de tú dragón pierde ${ataqueDeLaPcAlJugador}`;
        vidaJugador = vidaJugador - ataqueDeLaPcAlJugador; //ACA SE MODIFICA LA VIDA DEL JUGADOR
        if (vidaJugador <= 0) {
            spanVidaJugador.innerHTML = 0;
            crearMensajeResultado();
            revisarVidas ();
        } else {
            spanVidaJugador.innerHTML = vidaJugador;
            crearMensajeResultado();
        }
    }
};
// Gano cuando uso fuego contra tierra o uso tierra contra agua o si uso agua contra fuego.

function revisarVidas () {
    if (vidaPc <= 0) {
        crearMensajeFinal (`GANASTE el combate dejando al dragón de la PC en 0. Felicitaciones! Tú dragón es el vencedor 🎉🎉🎈🥳🎉`);
        vidaPc = 0;
    } else if (vidaJugador <= 0) {
        crearMensajeFinal (`PERDISTE el combate, el dragón de la PC dejó en 0 la vida de tú dragón. Vuelve a jugar...  😣😣😣😣😣`);
        vidaJugador = 0;
    }
};

function crearMensajeFinal (resultadoFinal) {
    let seccionMensajes = document.getElementById (`mensajes`);
    
    let parrafo = document.createElement (`p`);
    parrafo.innerHTML = resultadoFinal;
    seccionMensajes.appendChild(parrafo);  //aca se aplica lo interesante de las funciones junto con la funcion de revisarVidas...
    desactivarBotones ();
    
    let sectionReiniciar = document.getElementById (`reiniciará`);
    sectionReiniciar.style.visibility = `visible`;
};

function desactivarBotones () {
    let botonFuego = document.getElementById (`boton-fuego`);
    let botonTierra = document.getElementById(`boton-tierra`);
    let botonAgua = document.getElementById(`boton-agua`);
    botonFuego.disabled = true;
    botonTierra.disabled = true;
    botonAgua.disabled = true;
};

function relogActualizable () {
    const currentTime = () => {
        const idTime = document.getElementById (`fecha-de-hoy`);
        const date = new Date ();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds(); 

        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;

        let time = `${hh}:${mm}:${ss}`

        idTime.innerText = (`Fecha de hoy: ${date.toDateString()} ${time} Hs.`);
    }
    currentTime ();
    setInterval(currentTime, 1000);
};



//let ResultadoDeAtaques;
let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;

const listaMascotas = [];
const mascotasEleccion = [];
const mascotaElegidaPorPc = [];
const mascotaElegidaPorJugador = [];
const mascotaAtaque = [];
const registroDeAtaque = [];
const registroDeVida = [];
const registroDeDefensa = [];
const registroDeDebFuego = [];
const registroDeDebAgua = [];
const registroDeDebTierra = [];

let ataqueDelJugadorALaPc;
let ataqueDeLaPcAlJugador;
let ataqueElementoJugador;
let ataqueElementoDeLaPc;
let progresoDeAtaques;

let eleccionPc;
let vidaJugador;
let vidaPc;

let seleccion = 0;

let index = 0;
let i = 0;
let min = 1;
let max = 6;
window.addEventListener (`load`, init);

//.join es metodo para unir arrays!!.
//-----------------------parte de objetos mascotas------------------------

class Mascotas{
    constructor(name, element, health, atk, def, debFuego, debAgua, debTierra) {
        this.name = name
        this.element = element
        this.health = health
        this.atk = atk
        this.def = def
        this.debFuego = debFuego
        this.debAgua = debAgua
        this.debTierra = debTierra
    }   
};

mascotasEleccion.push(new Mascotas(`Dragón N°1`,`Agua`, 1010, 60,16,05,06,098));
mascotasEleccion.push(new Mascotas(`Dragón N°2`,`Fuego`, 1020, 60,15,05,06,097));
mascotasEleccion.push(new Mascotas(`Dragón N°3`,`Tierra`, 1030, 60,14,05,06,096));
mascotasEleccion.push(new Mascotas(`Dragón N°4`,`Agua y Fuego`, 1040, 60,13,05,06,095));
mascotasEleccion.push(new Mascotas(`Dragón N°5`,`Agua y Tierra`, 1050, 60,12,05,06,094));
mascotasEleccion.push(new Mascotas(`Dragón N°6`,`Tierra y Fuego`, 1060, 60,11,05,06,093));

mascotasEleccion.forEach ((mascota) => {
    listaMascotas.push (`
    Su elección fué ${mascota.name} 
    Su elemento es de ${mascota.element} 
    Su vida es de ${mascota.health}
    Su ataque es de: ${mascota.atk} - 100
    Su defensa es de: ${mascota.def}
    Su debilidad por Elemento de Tierra: ${mascota.debFuego}
    Su debilidad por Elemento de Agua: ${mascota.debAgua}
    Su debilidad por Elemento de Fuego: ${mascota.debTierra}`);
    registroDeAtaque.push (mascota.atk);
    registroDeVida.push (mascota.health); 
    registroDeDefensa.push (mascota.def);
    registroDeDebFuego.push (mascota.debFuego);  
    registroDeDebAgua.push (mascota.debAgua); 
    registroDeDebTierra.push (mascota.debTierra);  
    }
);