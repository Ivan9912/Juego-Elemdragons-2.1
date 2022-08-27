//import {mascotasEleccion} from './dragons.js';







botonFuego.addEventListener (`click`, elementoFuego);
botonTierra.addEventListener (`click`, elementoTierra);
botonAgua.addEventListener (`click`, elementoAgua);
botonParaMascotaPlayer.addEventListener (`click`, seleccionarMascotaPlayer);  
botonParaMascotaPlayerrandom.addEventListener (`click`, seleccionarMascotaPlayerrandom); 
botonReinicio.addEventListener (`click`, botonDeReinicio);


function init () {
    for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
        escuchaOpcionesRadio[i].onclick = function() {
        let spanInputsSelect = document.querySelector (`#btn-requisito-seleccion`); 
        if (seleccion == 0) {
                spanInputsSelect.innerHTML = `
                <button type = "button" id = "seleccionar-mascota-player" onclick = seleccionarMascotaPlayer() + seleccionarMascotaPc() class = "section-btn-select2">
                    Select
                </button> 
                <button type = "button" id = "seleccionar-mascota-player-random" disabled class = "section-btn-random2">
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
}

function seleccionarMascotaPlayer () {
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
    spanVidaPlayer.innerHTML = vidaPlayer;
    sectionMain2.style.display=`none`;
};

function seleccionarMascotaPlayerrandom () {
    let randomMascotaPlayer = random (min, max);
    spanMenuMascotas.innerHTML = `<p class = "conteiner-random-mensaje">Seleccionaste el botón <b>"random"</b> por ende, no podrás volver a seleccionar sin <b>reiniciar</b> el juego.</p>`;
    if (randomMascotaPlayer == 1) {
        registroDeElecciones (1);  
        
        } else if (randomMascotaPlayer == 2) {
            registroDeElecciones (2);
        } else if (randomMascotaPlayer == 3) {
            registroDeElecciones (3);
        } else if (randomMascotaPlayer == 4) {
            registroDeElecciones (4);
        } else if (randomMascotaPlayer == 5) {
            registroDeElecciones (5);
        } else if (randomMascotaPlayer == 6) {
            registroDeElecciones (6);
    }
    seleccionarMascotaPc();
    spanVidaPlayer.innerHTML = vidaPlayer;
};

function seleccionarMascotaPc () {
    let randomMascotaPc = random (min, max);
        
    if (randomMascotaPc == 1) {
        registroDeEleccionesPc(1);
        } else if (randomMascotaPc == 2) {
            registroDeEleccionesPc(2);
        } else if (randomMascotaPc == 3) {
            registroDeEleccionesPc(3);
        } else if (randomMascotaPc == 4) {
            registroDeEleccionesPc(4);
        } else if (randomMascotaPc == 5) {
            registroDeEleccionesPc(5);
        } else if (randomMascotaPc == 6) {
            registroDeEleccionesPc(6);
    }
    spanVidaPc.innerHTML = vidaPc;
};

function registroDeElecciones (mascota) {
    mascotaElegidaPorPlayer.unshift (mascotasEleccion[mascota-1].name);
    spanMascotaPlayer.innerHTML = mascotaElegidaPorPlayer[0];
    ataqueDelPlayerALaPc = registroDeAtaque[mascota-1];
    vidaPlayer = registroDeVida[mascota-1];
    validarBtnAtaque (mascota);
    ataqueElegidoPorPlayerMascota = registroDeAtaque[mascota-1];
    defElegidoPorPlayer = registroDeDefensa[mascota-1];

    debDeFuegoMascotaElegidaPlayer = registroDeDebFuego[mascota-1];
    debDeAguaMascotaElegidaPlayer = registroDeDebAgua[mascota-1];
    debDeTierraMascotaElegidaPlayer = registroDeDebTierra[mascota-1];

    //alert ("Player: "+debDeTierraMascotaElegidaPlayer+"  "+debDeAguaMascotaElegidaPlayer+"  "+debDeTierraMascotaElegidaPlayer)
};

function registroDeEleccionesPc (MascotaPc) {
    mascotaElegidaPorPc.unshift (mascotasEleccion[MascotaPc-1].name); 
    spanMascotarandomPc.innerHTML = mascotaElegidaPorPc[0];
    ataqueDeLaPcAlPlayer = registroDeAtaque[MascotaPc-1];
    vidaPc = registroDeVida[MascotaPc-1];
    eleccionPc = MascotaPc;
    ataqueElegidoPorPcMascota = registroDeAtaque[MascotaPc-1];
    defElegidoPorPc = registroDeDefensa[MascotaPc-1];

    debDeFuegoMascotaElegidaPC = registroDeDebFuego[MascotaPc-1];
    debDeAguaMascotaElegidaPC = registroDeDebAgua[MascotaPc-1];
    debDeTierraMascotaElegidaPC = registroDeDebTierra[MascotaPc-1];

    //alert ("Pc: "+debDeAguaMascotaElegidaPC +"  "+debDeFuegoMascotaElegidaPC+"  "+ debDeTierraMascotaElegidaPC)
    //console.log ("Pc 2: "+ registroDeDebFuego[MascotaPc-1] + "  "+ registroDeDebAgua[MascotaPc-1] + "  " + registroDeDebTierra[MascotaPc-1])
};

function validarBtnAtaque (codigoMascota) {
    
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
    sectionAtaque.style.display=`flex`;
    sectionMain.style.display=`none`;
};

function elementoFuego () {
    ataqueElementoPlayer = `Fuego 🔥`;
    spanElementosPlayer.innerHTML = `Elemento de ${ataqueElementoPlayer}`;
    ataqueDeLaPc ();
};

function elementoAgua () {
    ataqueElementoPlayer = `Agua 💧`;
    spanElementosPlayer.innerHTML = `Elemento de ${ataqueElementoPlayer}`;
    ataqueDeLaPc ();    
};

function elementoTierra () {
    ataqueElementoPlayer = `Tierra ☘`;
    spanElementosPlayer.innerHTML = `Elemento de ${ataqueElementoPlayer}`;
    ataqueDeLaPc ();
};

function ataqueDeLaPc () {
    let ataquerandom = random (min, (max-4));
    ataqueDelPlayerALaPc = ataquerandomoo(ataqueElegidoPorPlayerMascota);
    ataqueDeLaPcAlPlayer = ataquerandomoo(ataqueElegidoPorPcMascota);

    if (eleccionPc == 1) {
        ataqueElementoDeLaPc = `Agua 💧`;
    } else if (eleccionPc == 2) {
        ataqueElementoDeLaPc = `Fuego 🔥`;
    } else if (eleccionPc == 3) {
        ataqueElementoDeLaPc = `Tierra ☘`;
    } else if (eleccionPc == 4) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        }
    } else if (eleccionPc == 5) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        }
    } else if (eleccionPc == 6) {
        if (ataquerandom == 1) {
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

function ataquerandomoo (ataque) {
    let aletoidad = random (ataque, (ataque * 1.65)); //REVISAR ACA PARA SELECCIONAR VARIOS ATAQUES.
    return aletoidad
};

//----------------------------
function seleccionarMascotaPcTrampa () {
    seleccionarMascotaPc()
    //console.table (mascotaElegidaPorPc); //MIRAR ACA se itera en mascotaAlea objetos y se seleccionan aleatoriamente...
    alert (`
    Este botón se desarrolló para probar las posibles variables de 
    ataques. 
    
    Éste es tú valor que se cambiará:  ${mascotaElegidaPorPc[0]}`);
};

function trampa () {
    //console.log (i);
    if (i % 2 || i == 1) {
        let trampa = document.querySelector (`#trampa`);
        trampa.innerHTML = `
        <div> 
            <button id = "boton-pc" class = "boton-trampa">
                Elegir por la pc.
            </button>
        </div>`;
        let botonDeTrampa2 = document.querySelector (`#boton-pc`);
        botonDeTrampa2.addEventListener (`click`, seleccionarMascotaPcTrampa)
    } else {
        let trampa = document.querySelector (`#trampa`);
        trampa.innerHTML = ``;
    }
    i++;
    return i
};

function music () {
    let spanMusic = document.querySelector (`#music`);
    spanMusic.innerHTML = `<iframe  width="300" height="300" src="https://www.youtube.com/embed/c3aN6Tv4WLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
}
//----------------------------

// se podria eleiminar la variable ResultadoDeAtaques y colocarlo como parametro de crearMensajeResultado con el valor de cada condicional (ganar, perder o empatar).

//COMBATE------------------------- MODIFICAR CON FUNCIONES PARA ACORTAR LINEAS DE COD.

function combateDeElementos () {

    if (ataqueElementoDeLaPc == ataqueElementoPlayer) {
        //intervaloCombateCometarios();
        intervaloCombatePc (0);
        intervaloCombatePlayer (0);
        progresoDeAtaquesEmpate = `Los elementos se igualaron!! 😯😮😲😯😳`;
        crearMensajeResultado(1);
    }

    if (ataqueElementoDeLaPc == `Fuego 🔥` && ataqueElementoPlayer == `Tierra ☘`) {//ACA SE MODIFICA LA VIDA DEL PC
        intervaloCombatePc (debDeTierraMascotaElegidaPC);
    } else if (ataqueElementoDeLaPc == `Tierra ☘` && ataqueElementoPlayer == `Agua 💧`) {
        intervaloCombatePc (debDeAguaMascotaElegidaPC);
    } else if (ataqueElementoDeLaPc == `Agua 💧` && ataqueElementoPlayer == `Fuego 🔥`) {
        intervaloCombatePc (debDeFuegoMascotaElegidaPC);
    }

    if (ataqueElementoDeLaPc == `Tierra ☘` && ataqueElementoPlayer == `Fuego 🔥`) {//ACA SE MODIFICA LA VIDA DEL Player
        intervaloCombatePlayer (debDeTierraMascotaElegidaPlayer);
    } else if (ataqueElementoDeLaPc == `Agua 💧` && ataqueElementoPlayer == `Tierra ☘`) {
        intervaloCombatePlayer (debDeAguaMascotaElegidaPlayer);
    } else if (ataqueElementoDeLaPc == `Fuego 🔥` && ataqueElementoPlayer == `Agua 💧`) {
    }
};

function intervaloCombatePc (debilidadElementalPc) {
    
    progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelPlayerALaPc - defElegidoPorPc + debilidadElementalPc}`;
    vidaPc = vidaPc - ataqueDelPlayerALaPc - defElegidoPorPc + debilidadElementalPc;
    //alert (ataqueDelPlayerALaPc + "  " + defElegidoPorPc + "  " + debilidadElementalPc)
    if (vidaPc <= 0) {
        spanVidaPc.innerHTML = 0;
        crearMensajeResultado(2);
        revisarVidas ();
    } else {
        spanVidaPc.innerHTML = vidaPc;
        crearMensajeResultado(2);
    }
}

function intervaloCombatePlayer (debilidadElementalPlayer) {
    progresoDeVidaPlayer = `vida de tú dragón pierde ${ataqueDeLaPcAlPlayer - defElegidoPorPlayer + debilidadElementalPlayer}`;
    vidaPlayer = vidaPlayer - ataqueDeLaPcAlPlayer - defElegidoPorPlayer + debilidadElementalPlayer;
    //alert (ataqueDeLaPcAlPlayer + "  " + defElegidoPorPlayer + "  " + debilidadElementalPlayer)
    if (vidaPlayer <= 0) {
        spanVidaPlayer.innerHTML = 0;
        crearMensajeResultado(3);
        revisarVidas ();  
    } else {
        spanVidaPlayer.innerHTML = vidaPlayer;
        crearMensajeResultado(3);
    }
}
// 

function revisarVidas () {
    if (vidaPc <= 0) {
        crearMensajeFinal (`GANASTE 

        Dejaste al dragón de la PC en 0 de vida. 
        Felicitaciones! Tú dragón es el vencedor. 
        🎉🎉🎈🥳🎉`);
        vidaPc = 0;
    } else if (vidaPlayer <= 0) {
        crearMensajeFinal (`PERDISTE 

        El dragón del Pc dejó en 0 la vida de tú dragón. 
        Vuelve a jugar...  😣😣😣😣😣`);
        vidaPlayer = 0;
    } else if (vidaPc <= 0 && vidaPlayer <= 0) {
        crearMensajeFinal (`Hubo un rotundo empate. 
        
        Ambos perdieron`);
    }
};

function crearMensajeResultado (mensajito) {
    
    if (mensajito == 1) {
        let parrafo1 = document.createElement (`p`);
        parrafo1.innerHTML = progresoDeAtaquesEmpate;
        ataqueEmpate.appendChild(parrafo1);
    } else if (mensajito == 2) {
        let parrafo2 = document.createElement (`p`);
        parrafo2.innerHTML = progresoDeVidaPc;
        ataquePlayer.appendChild(parrafo2);
    } else if (mensajito == 3) {
        let parrafo3 = document.createElement (`p`);
        parrafo3.innerHTML = progresoDeVidaPlayer;
        ataquePc.appendChild(parrafo3);
    } 
};

function crearMensajeFinal (resultadoFinal) {
    let parrafo = document.createElement (`p`);
    parrafo.innerText = resultadoFinal;
    divMensajeFinal.appendChild(parrafo);  //aca se aplica lo interesante de las funciones junto con la funcion de revisarVidas...
    desactivarBtn ();
};

function desactivarBtn () {
    botonFuego.disabled = true;
    botonTierra.disabled = true;
    botonAgua.disabled = true;
    sectionReiniciar.style.visibility = `visible`;
    sectionReiniciar.style.display = `flex`;
};

function relogActualizable () {
    const currentTime = () => {
        const date = new Date ();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds(); 

        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;

        let time = `${hh}:${mm}:${ss}`
        const idTime = document.querySelector (`#fecha-de-hoy`);
        idTime.innerText = (`Fecha de hoy: ${date.toDateString()} ${time} Hs.`);
    }
    currentTime ();
    setInterval(currentTime, 1000);
};


const botonFuego = document.querySelector (`#boton-fuego`);
const botonTierra = document.querySelector(`#boton-tierra`);
const botonAgua = document.querySelector(`#boton-agua`);
const botonParaMascotaPlayer = document.querySelector (`#seleccionar-mascota-player`);
const botonParaMascotaPlayerrandom = document.querySelector (`#seleccionar-mascota-player-random`);
const botonReinicio = document.querySelector (`#boton-reiniciar`);
const escuchaOpcionesRadio = document.forms[`seleccionar-mascota`].elements[`mascota`];
const input1 = document.querySelector (`#mascota-1`);
const input2 = document.querySelector (`#mascota-2`);
const input3 = document.querySelector (`#mascota-3`);
const input4 = document.querySelector (`#mascota-4`);
const input5 = document.querySelector (`#mascota-5`);
const input6 = document.querySelector (`#mascota-6`);
const hoverBotonSelect = document.querySelector (`#seleccionar-mascota-player`);
const sectionMain2 = document.querySelector (`#section-btn-seleccion-player`);
const spanMenuMascotas = document.querySelector (`#btn-requisito-seleccion`);
const spanVidaPlayer = document.getElementById (`span-vida-player`);
const spanVidaPc = document.querySelector (`#span-vida-pc`);
const spanMascotaPlayer = document.querySelector (`#nombre-mascota-player`);
const spanMascotarandomPc = document.querySelector (`#nombre-mascota-pc`);
const sectionAtaque = document.querySelector (`#section-ataque`);
const sectionMain = document.querySelector(`#section-main`);
const spanElementosPlayer = document.querySelector (`#span-elementos-player`);
const spanElementosDeLaPc = document.querySelector (`#span-elementos-enemigo`);
const ataqueEmpate = document.getElementById (`mensajes`);
const ataquePlayer = document.getElementById (`ataque-player`);
const ataquePc = document.getElementById (`ataque-pc`);
const divMensajeFinal = document.querySelector (`#mensaje-final`);
const sectionReiniciar = document.querySelector (`#reiniciará`);


relogActualizable ();
window.addEventListener (`load`, init);
let progresoDeAtaquesEmpate = ``;
let progresoDeVidaPlayer = ``;
let progresoDeVidaPc = ``;
//let ResultadoDeAtaques;
let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;

const listaMascotas = [];

const mascotasEleccion = [];

const mascotaElegidaPorPc = [];
const mascotaElegidaPorPlayer = [];
const mascotaAtaque = [];

const registroDeAtaque = []; //aca es el ataque de los 6 dragones
let ataqueElegidoPorPlayerMascota; // aca se pushean los datos de los ataques elegidos por dragon
let ataqueElegidoPorPcMascota;

const registroDeVida = [];

const registroDeDefensa = [];
let defElegidoPorPlayer;
let defElegidoPorPc;


const registroDeDebFuego = [];
let debDeFuegoMascotaElegidaPlayer;
let debDeFuegoMascotaElegidaPC;

const registroDeDebAgua = [];
let debDeAguaMascotaElegidaPlayer;
let debDeAguaMascotaElegidaPC;

const registroDeDebTierra = [];
let debDeTierraMascotaElegidaPlayer;
let debDeTierraMascotaElegidaPC;

let ataqueDelPlayerALaPc;
let ataqueDeLaPcAlPlayer;
let ataqueElementoPlayer;
let ataqueElementoDeLaPc;
let progresoDeAtaques;

let eleccionPc;
let vidaPlayer;
let vidaPc;

let seleccion = 0;

let index = 0;
let i = 0;
let min = 1;
let max = 6;

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

mascotasEleccion.push(new Mascotas(`Dragón N°1`,`Agua`, 1010, 65,16,35,`No tiene`,``));
mascotasEleccion.push(new Mascotas(`Dragón N°2`,`Fuego`, 1020, 70,15,`No tiene`,``,35));
mascotasEleccion.push(new Mascotas(`Dragón N°3`,`Tierra`, 1030, 75,14,``,35,`No tiene`));
mascotasEleccion.push(new Mascotas(`Dragón N°4`,`Agua y Fuego`, 1040, 80,13,35,`No tiene`,35));
mascotasEleccion.push(new Mascotas(`Dragón N°5`,`Agua y Tierra`, 1050, 85,12,35,35,`No tiene`));
mascotasEleccion.push(new Mascotas(`Dragón N°6`,`Tierra y Fuego`, 1060, 90,11,`No tiene`,35,35));

mascotasEleccion.forEach ((mascota) => {
    let ataqueMaximo = parseInt (mascota.atk * 1.65);
    listaMascotas.push (`
    ${mascota.name} 
    Su elemento es de ${mascota.element} 
    Su vida es de ${mascota.health}
    Su ataque es de: ${mascota.atk} - ${ataqueMaximo}
    Su defensa es de: ${mascota.def}
    Su debilidad por Elemento de Fuego: ${mascota.debFuego}
    Su debilidad por Elemento de Agua: ${mascota.debAgua}
    Su debilidad por Elemento de Tierra: ${mascota.debTierra}`);
    registroDeAtaque.push (mascota.atk);
    registroDeVida.push (mascota.health); 
    registroDeDefensa.push (mascota.def);
    registroDeDebFuego.push (mascota.debFuego);  
    registroDeDebAgua.push (mascota.debAgua); 
    registroDeDebTierra.push (mascota.debTierra);  
    //console.table (registroDeDebAgua)
    //console.table (registroDeDebFuego)
    //console.table (registroDeDebTierra)
    }
);