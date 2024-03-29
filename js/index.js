//import {dragonsElection} from './dragons.js';
function init () {
    
    dragonsElection.forEach ((dragon) => {
        let maxAttack = parseInt (dragon.atk * 1.65);
        dragonsList.push (`
        ${dragon.name} 
        Su elemento es de ${dragon.element} 
        Su vida es de ${dragon.health}
        Su ataque es de: ${dragon.atk} - ${maxAttack}
        Su defensa es de: ${dragon.def}
        Su debilidad por Elemento de Fuego: ${dragon.debFire}
        Su debilidad por Elemento de Agua: ${dragon.debWater}
        Su debilidad por Elemento de Tierra: ${dragon.debEarth}`);
    
        registroDeAtaque.push (dragon.atk);
        registroDeVida.push (dragon.health); 
        registroDeDefensa.push (dragon.def);
        registroDeDebFire.push (dragon.debFire);  
        registroDeDebWater.push (dragon.debWater); 
        registroDeDebEarth.push (dragon.debEarth);  

        max++;
        optionsDragons = `<input type = "radio" style ="display: none" name = "mascota" id = "${dragon.id}" />
        <label for = "${dragon.id}">
            <img src="${dragon.image}" alt="${dragon.name}" title = "${dragon.name} ${dragon.element}">
        </label>`;
        spanContenedorDeDragones.innerHTML += optionsDragons;

        input1 = document.querySelector (`#mascota-1`);
        input2 = document.querySelector (`#mascota-2`);
        input3 = document.querySelector (`#mascota-3`);
        input4 = document.querySelector (`#mascota-4`);
        input5 = document.querySelector (`#mascota-5`);
        input6 = document.querySelector (`#mascota-6`);

        const escuchaOpcionesRadio = document.forms[`seleccionar-mascota`].elements[`mascota`];
        if (max == escuchaOpcionesRadio.length) {
            for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
                escuchaOpcionesRadio[i].onclick = function() {
                    if (quitaBtnSelectRandom == 0) {
                        spanInputsSelect.innerHTML = `
                        <button type = "button" id = "seleccionar-mascota-player" onclick = seleccionarMascotaPlayer() class = "section-btn-select2">
                            Select
                        </button> 
                        <button type = "button" id = "seleccionar-mascota-player-random" disabled class = "section-btn-random2">
                            Random
                        </button>`;
                    };
                    if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[0]) {
                        alert (dragonsList[0]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[1]) {
                        alert (dragonsList[1]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[2]) {
                        alert (dragonsList[2]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[3]) {
                        alert (dragonsList[3]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[4]) {
                        alert (dragonsList[4]);
                    } else if(escuchaOpcionesRadio[i] == escuchaOpcionesRadio[5]) {
                        alert (dragonsList[5]);
                    };
                    quitaBtnSelectRandom++; 
                };
            };
        };
    });
};

const spanInputsSelect = document.querySelector (`#btn-requisito-seleccion`);
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
    };
    seleccionarMascotaPc();
    spanVidaPlayer.innerHTML = vidaPlayer;
    sectionMain2.style.display=`none`;
};

function seleccionarMascotaPlayerRandom () {
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
        };
    seleccionarMascotaPc();
    spanVidaPlayer.innerHTML = vidaPlayer;
    quitaBtnSelectRandom++;
};// INTENTAR PENSAR ESTA LOGICA CON UN FOR O UN WHILE...

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
    };
    spanVidaPc.innerHTML = vidaPc;
};

function registroDeElecciones (mascota) {
    mascotaElegidaPorPlayer.unshift (dragonsElection[mascota-1].name);
    spanMascotaPlayer.innerHTML = mascotaElegidaPorPlayer[0];
    ataqueDelPlayerALaPc = registroDeAtaque[mascota-1];
    vidaPlayer = registroDeVida[mascota-1];
    validarBtnAtaque (mascota);
    ataqueElegidoPorPlayerMascota = registroDeAtaque[mascota-1];
    defElegidoPorPlayer = registroDeDefensa[mascota-1];
    debDeFuegoMascotaElegidaPlayer = registroDeDebFire[mascota-1];
    debDeAguaMascotaElegidaPlayer = registroDeDebWater[mascota-1];
    debDeTierraMascotaElegidaPlayer = registroDeDebEarth[mascota-1];
};

function registroDeEleccionesPc (DragonPc) {
    mascotaElegidaPorPc.unshift (dragonsElection[DragonPc-1].name); 
    spanMascotarandomPc.innerHTML = mascotaElegidaPorPc[0];
    ataqueDeLaPcAlPlayer = registroDeAtaque[DragonPc-1];
    vidaPc = registroDeVida[DragonPc-1];
    eleccionPc = DragonPc;
    ataqueElegidoPorPcMascota = registroDeAtaque[DragonPc-1];
    defElegidoPorPc = registroDeDefensa[DragonPc-1];
    debDeFuegoMascotaElegidaPC = registroDeDebFire[DragonPc-1];
    debDeAguaMascotaElegidaPC = registroDeDebWater[DragonPc-1];
    debDeTierraMascotaElegidaPC = registroDeDebEarth[DragonPc-1];
};

function validarBtnAtaque (codigoMascota) {
    if (codigoMascota == 1) {
        botonFuego.style.display = `none`;// Quizas se podria crear cada variable en parametros en un una funcion.
        botonTierra.style.display = `none`;// quizas convenga hacer un foreach y una plantilla output para que itere a cada uno agregando nodo de html sin appendchild.
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
    };
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
    noBtnTramp++;
    let ataquerandom = random (min, 2);
    ataqueDelPlayerALaPc = ataqueRandomCritic(ataqueElegidoPorPlayerMascota);
    ataqueDeLaPcAlPlayer = ataqueRandomCritic(ataqueElegidoPorPcMascota);
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
        };
    } else if (eleccionPc == 5) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Agua 💧`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        };
    } else if (eleccionPc == 6) {
        if (ataquerandom == 1) {
            ataqueElementoDeLaPc = `Fuego 🔥`;
        } else {
            ataqueElementoDeLaPc = `Tierra ☘`;
        };
    };
    spanElementosDeLaPc.innerHTML = `Elemento de ${ataqueElementoDeLaPc}`;
    combateDeElementos();
};

function botonDeReinicio () {
    location.reload(); 
};

function random (minimo, maximo) {
    return Math.floor (Math.random() * (maximo - minimo + 1) + minimo);
};

function ataqueRandomCritic (ataque) {
    let aletoidad = random (ataque, (ataque * 1.65)); 
    return aletoidad
};

//-------------------------------------------------------------------------------
function seleccionarMascotaPcTrampa () {
    if (noBtnTramp == 0) {
        seleccionarMascotaPc();
        alert (`
        Este botón se desarrolló para probar las posibles variables de 
        ataques. 
        
        Éste es tú valor que se cambiará:  ${mascotaElegidaPorPc[0]}`);
    } else {
        alert (`Ya no puedes acceder al botón trampa. Prueba antes de que inicie el combate.`);
    }
};

function trampa () {
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
    };
    i++;
    return i
};

function music () {
    let spanMusic = document.querySelector (`#music`);
    spanMusic.innerHTML = `<iframe  width="300" height="300" src="https://www.youtube.com/embed/c3aN6Tv4WLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>`;
};

//COMBATE------------------------- 
function combateDeElementos () {
    if (ataqueElementoPlayer == ataqueElementoDeLaPc) {
        intervaloCombate (0, 0, 0, 0);
        progresoDeAtaquesEmpate = `Los elementos se igualaron!! 😯😮😲😯😳`;
        crearMensajeResultado(1);
    } else if (ataqueElementoPlayer == `Tierra ☘` && ataqueElementoDeLaPc == `Fuego 🔥`) {//ACA SE MODIFICA LA VIDA DEL PC
        intervaloCombate (debDeTierraMascotaElegidaPC, debDeTierraMascotaElegidaPlayer, 0, 0);
    } else if (ataqueElementoPlayer == `Agua 💧` && ataqueElementoDeLaPc == `Tierra ☘`) {
        intervaloCombate (debDeAguaMascotaElegidaPC, debDeAguaMascotaElegidaPlayer, 0, 0);
    } else if (ataqueElementoPlayer == `Fuego 🔥` && ataqueElementoDeLaPc == `Agua 💧`) {
        intervaloCombate (debDeFuegoMascotaElegidaPC, debDeFuegoMascotaElegidaPlayer, 0, 0);
    } else if (ataqueElementoPlayer == `Fuego 🔥` && ataqueElementoDeLaPc == `Tierra ☘`) {//ACA SE MODIFICA LA VIDA DEL Player
        intervaloCombate (0, 0, debDeTierraMascotaElegidaPlayer,debDeTierraMascotaElegidaPC);
    } else if (ataqueElementoPlayer == `Tierra ☘` && ataqueElementoDeLaPc == `Agua 💧`) {
        intervaloCombate (0, 0, debDeAguaMascotaElegidaPlayer, debDeAguaMascotaElegidaPC);
    } else if (ataqueElementoPlayer == `Agua 💧` && ataqueElementoDeLaPc == `Fuego 🔥`) {
        intervaloCombate (0, 0, debDeFuegoMascotaElegidaPlayer, debDeFuegoMascotaElegidaPC);
    };
};

function intervaloCombate (debilidadElementalPc, fortalezaElementalPlayer, debilidadElementalPlayer, fortalezaElementalPc) {
    progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelPlayerALaPc - defElegidoPorPc + fortalezaElementalPc + debilidadElementalPc}`;
    vidaPc = vidaPc - ataqueDelPlayerALaPc - defElegidoPorPc + fortalezaElementalPc + debilidadElementalPc;
    progresoDeVidaPlayer = `vida de tú dragón pierde ${ataqueDeLaPcAlPlayer - defElegidoPorPlayer + debilidadElementalPlayer + fortalezaElementalPlayer}`;
    vidaPlayer = vidaPlayer - ataqueDeLaPcAlPlayer - defElegidoPorPlayer + debilidadElementalPlayer + fortalezaElementalPlayer;
    if (vidaPc <= 0) {
        spanVidaPc.innerHTML = 0;
        crearMensajeResultado(2);   
        revisarVidas (0, vidaPlayer);
    } else {
        spanVidaPc.innerHTML = vidaPc;
        crearMensajeResultado(2);
    };
    if (vidaPlayer <= 0) {
        spanVidaPlayer.innerHTML = 0;
        crearMensajeResultado(3);
        revisarVidas (vidaPc, 0);  
    } else {
        spanVidaPlayer.innerHTML = vidaPlayer;
        crearMensajeResultado(3);
    };
    if (vidaPlayer <= 0 && vidaPc <= 0) {
        spanVidaPlayer.innerHTML = 0;
        spanVidaPc.innerHTML = 0;
        revisarVidas (0, 0);// REVISAR PARA QUE HAYA EMPATE EN 0, 0 EN AMBAS VIDAS
    };
};

function revisarVidas (lPc , lPlayer) {
    if (lPc == 0 && lPlayer > 0 ) {
        crearMensajeFinal (`GANASTE 

        Dejaste al dragón de la PC en 0 de vida. 
        Felicitaciones! Tú dragón es el vencedor. 
        🎉🎉🎈🥳🎉`);
        vidaPc = lPc;
    } else if (lPlayer == 0 && lPc > 0 ) {
        crearMensajeFinal (`PERDISTE 

        El dragón del Pc dejó en 0 la vida de tú dragón. 
        Vuelve a jugar...  😣😣😣😣😣`);
        vidaPlayer = lPlayer;
    } else if (lPc == 0 && lPlayer == 0) {
        crearMensajeFinal (`Hubo un rotundo empate. 
        
        Ambos perdieron`);
        vidaPc = lPc;
        vidaPlayer = lPlayer;
    };
};

function crearMensajeResultado (historyMessages) {
    if (historyMessages == 1) {
        const commentsParagraph = document.createElement (`p`);
        commentsParagraph.innerHTML = progresoDeAtaquesEmpate;
        comments.appendChild(commentsParagraph);
    } else if (historyMessages == 2) {
        const lifePcParagraph = document.createElement (`p`);
        lifePcParagraph.innerHTML = progresoDeVidaPc;
        ataquePlayer.appendChild(lifePcParagraph);
    } else if (historyMessages == 3) {
        const lifePlayerParagraph = document.createElement (`p`);
        lifePlayerParagraph.innerHTML = progresoDeVidaPlayer;
        ataquePc.appendChild(lifePlayerParagraph);
    };
};

function crearMensajeFinal (combatResult) {
    const resultCombatParagraphparrafo = document.createElement (`p`);
    resultCombatParagraphparrafo.innerText = combatResult;
    divMensajeFinal.appendChild(resultCombatParagraphparrafo); 
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
        idTime.innerText = (`Fecha de hoy: ${date.toDateString()} ${time} hs.`);
    }
    currentTime ();
    setInterval(currentTime, 1000);
};

const spanContenedorDeDragones = document.querySelector (`#conteinerDragons`);
const botonFuego = document.querySelector (`#boton-fuego`);
const botonTierra = document.querySelector(`#boton-tierra`);
const botonAgua = document.querySelector(`#boton-agua`);
const botonParaMascotaPlayer = document.querySelector (`#seleccionar-mascota-player`);
const botonParaMascotaPlayerrandom = document.querySelector (`#seleccionar-mascota-player-random`);
const botonReinicio = document.querySelector (`#boton-reiniciar`);
const hoverBotonSelect = document.querySelector (`#seleccionar-mascota-player`);
const sectionMain2 = document.querySelector (`#section-btn-seleccion-player`);
const spanMenuMascotas = document.querySelector (`#btn-requisito-seleccion`);
const spanVidaPlayer = document.querySelector (`#span-vida-player`);
const spanVidaPc = document.querySelector (`#span-vida-pc`);
const spanMascotaPlayer = document.querySelector (`#nombre-mascota-player`);
const spanMascotarandomPc = document.querySelector (`#nombre-mascota-pc`);
const sectionAtaque = document.querySelector (`#section-ataque`);
const sectionMain = document.querySelector(`#section-main`);
const spanElementosPlayer = document.querySelector (`#span-elementos-player`);
const spanElementosDeLaPc = document.querySelector (`#span-elementos-enemigo`);
const comments = document.getElementById (`mensajes`);
const ataquePlayer = document.getElementById (`ataque-player`);
const ataquePc = document.getElementById (`ataque-pc`);
const divMensajeFinal = document.querySelector (`#mensaje-final`);
const sectionReiniciar = document.querySelector (`#reiniciará`);

let input1;
let input2;
let input3;
let input4;
let input5;
let input6;

let optionsDragons;// base de datos de dragons a renderizar en labels.

let progresoDeAtaquesEmpate;
let progresoDeVidaPlayer;
let progresoDeVidaPc;

let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;

const dragonsList = [];//objeto con la info de cada dragon creado. Es lo que se visualiza en los alerts.
const dragonsElection = [];// Acá se iteran con push cada info relevante de los dragones con "New".
const mascotaElegidaPorPlayer = [];//Acá se guarda el nombre del dragon elegido por el Jugador. Solo se iterará 1 objeto.

const mascotaElegidaPorPc = [];//Al elegir aleatoriamente la pc. Itera aca su eleccion traido de dragonsList.
let eleccionPc; //aca se itera un numero del 1 al 6 segun lo que la pc elija... luego se utiliza para elegir el tipo de ataque y los elementos de dicho dragon elegido.

const registroDeAtaque = []; //aca se iterarán todos los ataques de cada dragon para luego poder ser seleccionados. atk * 1.65 es lo mazimo que aumentará el ataque.
let ataqueElegidoPorPlayerMascota; 
let ataqueElegidoPorPcMascota;

const registroDeDefensa = [];
let defElegidoPorPlayer;
let defElegidoPorPc;

const registroDeDebFire = [];
let debDeFuegoMascotaElegidaPlayer;
let debDeFuegoMascotaElegidaPC;

const registroDeDebWater = [];
let debDeAguaMascotaElegidaPlayer;
let debDeAguaMascotaElegidaPC;

const registroDeDebEarth = [];
let debDeTierraMascotaElegidaPlayer;
let debDeTierraMascotaElegidaPC;

let ataqueDelPlayerALaPc;
let ataqueDeLaPcAlPlayer;
let ataqueElementoDeLaPc;
let ataqueElementoPlayer;
let progresoDeAtaques;

const registroDeVida = [];
let vidaPlayer;
let vidaPc;

let quitaBtnSelectRandom = 0;
let i = 0;
let min = 1;
let max = 0; //va a cambiar segun la cantidad de dragones haya iterado
let noBtnTramp = 0; //si se ataca con elementos se asignará un 1 a esta variable impidiendo que puedas cambiar el dragon de la Pc.

botonFuego.addEventListener (`click`, elementoFuego);
botonTierra.addEventListener (`click`, elementoTierra);
botonAgua.addEventListener (`click`, elementoAgua);
botonParaMascotaPlayer.addEventListener (`click`, seleccionarMascotaPlayer);  
botonParaMascotaPlayerrandom.addEventListener (`click`, seleccionarMascotaPlayerRandom); 
botonReinicio.addEventListener (`click`, botonDeReinicio);
botonParaMascotaPlayer.addEventListener (`click`, seleccionarMascotaPlayer);

relogActualizable ();
window.addEventListener (`load`, init);
//------------------------------------------------------------------------
//.join es metodo para unir arrays!!.
//-----------------------parte de objetos mascotas------------------------
callJson()
async function callJson () {
    const response = await fetch('./js/Elemdragons.json');
    const data = await response.json();
    data.forEach((info) => {
        dragonsElection.push(info);
    });
};