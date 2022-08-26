//import {mascotasEleccion} from './dragons.js';

function init () {

    let botonFuego = document.querySelector (`#boton-fuego`);
    let botonTierra = document.querySelector(`#boton-tierra`);
    let botonAgua = document.querySelector(`#boton-agua`);
    botonFuego.addEventListener (`click`, elementoFuego);
    botonTierra.addEventListener (`click`, elementoTierra);
    botonAgua.addEventListener (`click`, elementoAgua);

    let botonParaMascotaJugador = document.querySelector (`#seleccionar-mascota-jugador`);
    botonParaMascotaJugador.addEventListener (`click`, seleccionarMascotaJugador);  

    let botonParaMascotaJugadorAleatorio = document.querySelector (`#seleccionar-mascota-jugador-aleatorio`);
    botonParaMascotaJugadorAleatorio.addEventListener (`click`, seleccionarMascotaJugadorAleatorio); 

    let botonReinicio = document.querySelector (`#boton-reiniciar`);
    botonReinicio.addEventListener (`click`, botonDeReinicio);

    relogActualizable ();

    let escuchaOpcionesRadio = document.forms[`seleccionar-mascota`].elements[`mascota`];
    for(let i = 0, max = escuchaOpcionesRadio.length; i < max; i++) {
        escuchaOpcionesRadio[i].onclick = function() {
            let spanInputsSelect = document.querySelector (`#botones-requisito-seleccion`);
            
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
    let input1 = document.querySelector (`#mascota-1`);
    let input2 = document.querySelector (`#mascota-2`);
    let input3 = document.querySelector (`#mascota-3`);
    let input4 = document.querySelector (`#mascota-4`);
    let input5 = document.querySelector (`#mascota-5`);
    let input6 = document.querySelector (`#mascota-6`);
    let spanVidaJugador = document.querySelector (`#span-vida-jugador`);
    let hoverBotonSelect = document.querySelector (`#seleccionar-mascota-jugador`);
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
    let sectionMain2 = document.querySelector (`#section-botones-seleccion-jugador`);
    sectionMain2.style.display=`none`;
};

function seleccionarMascotaJugadorAleatorio () {
    let aleatorioMascotaJugador = random (min, max);
    let spanMenuMascotas = document.querySelector (`#botones-requisito-seleccion`);
    spanMenuMascotas.innerHTML = `<p class = "conteiner-aleatorio-mensaje">Seleccionaste el botón <b>"aleatorio"</b> por ende, no podrás volver a seleccionar sin <b>reiniciar</b> el juego.</p>`;
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

function seleccionarMascotaPc () {
    
    let spanVidaPc = document.querySelector (`#span-vida-pc`);
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

function registroDeElecciones (mascota) {
    let spanMascotaJugador = document.querySelector (`#nombre-mascota-jugador`);
    mascotaElegidaPorJugador.unshift (mascotasEleccion[mascota-1].name);
    spanMascotaJugador.innerHTML = mascotaElegidaPorJugador[0];
    ataqueDelJugadorALaPc = registroDeAtaque[mascota-1];
    vidaJugador = registroDeVida[mascota-1];
    validarBotonesAtaque (mascota);
    ataqueElegidoPorJugadorMascota = registroDeAtaque[mascota-1];
    defElegidoPorJugador = registroDeDefensa[mascota-1];

    debDeFuegoMascotaElegidaJugador = registroDeDebFuego[mascota-1];
    debDeAguaMascotaElegidaJugador = registroDeDebAgua[mascota-1];
    debDeTierraMascotaElegidaJugador = registroDeDebTierra[mascota-1];

    //alert ("jugador: "+debDeTierraMascotaElegidaJugador+"  "+debDeAguaMascotaElegidaJugador+"  "+debDeTierraMascotaElegidaJugador)
};

function registroDeEleccionesPc (MascotaPc) {
    let spanMascotaAleatorioPc = document.querySelector (`#nombre-mascota-pc`);
    mascotaElegidaPorPc.unshift (mascotasEleccion[MascotaPc-1].name); 
    spanMascotaAleatorioPc.innerHTML = mascotaElegidaPorPc[0];
    ataqueDeLaPcAlJugador = registroDeAtaque[MascotaPc-1];
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

function validarBotonesAtaque (codigoMascota) {
    let botonFuego = document.querySelector (`#boton-fuego`);
    let botonTierra = document.querySelector (`#boton-tierra`);
    let botonAgua = document.querySelector (`#boton-agua`);

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
    let sectionAtaque = document.querySelector (`#section-ataque`);
    sectionAtaque.style.display=`flex`;
    let sectionMain = document.querySelector(`#section-main`);
    sectionMain.style.display=`none`;
};

function elementoFuego () {
    let spanElementosJugador = document.querySelector (`#span-elementos-jugador`);
    ataqueElementoJugador = `Fuego 🔥`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();
};

function elementoAgua () {
    let spanElementosJugador = document.querySelector (`#span-elementos-jugador`);
    ataqueElementoJugador = `Agua 💧`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();    
};

function elementoTierra () {
    let spanElementosJugador = document.querySelector (`#span-elementos-jugador`);
    ataqueElementoJugador = `Tierra ☘`;
    spanElementosJugador.innerHTML = `Elemento de ${ataqueElementoJugador}`;
    ataqueDeLaPc ();
};

function ataqueDeLaPc () {
    let ataqueAleatorio = random (min, (max-4));
    let spanElementosDeLaPc = document.querySelector (`#span-elementos-enemigo`);
    ataqueDelJugadorALaPc = ataqueAleatoriooo(ataqueElegidoPorJugadorMascota);
    ataqueDeLaPcAlJugador = ataqueAleatoriooo(ataqueElegidoPorPcMascota);

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

function ataqueAleatoriooo (ataque) {
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
    let spanVidaJugador = document.querySelector (`#span-vida-jugador`);
    let spanVidaPc = document.querySelector (`#span-vida-pc`);

    if (ataqueElementoDeLaPc == ataqueElementoJugador) {
        progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelJugadorALaPc - defElegidoPorPc}`;
        vidaPc = vidaPc - ataqueDelJugadorALaPc - defElegidoPorPc;

        progresoDeVidaJugador = `vida de tú dragón pierde ${ataqueDeLaPcAlJugador - defElegidoPorJugador}`;
        vidaJugador = vidaJugador - ataqueDeLaPcAlJugador - defElegidoPorJugador;

        if (vidaJugador <= 0) {
            spanVidaJugador.innerHTML = 0;
            crearMensajeResultado(3);
            revisarVidas ();
                
        } else {
            spanVidaJugador.innerHTML = vidaJugador;
            crearMensajeResultado(3);
        }

        if (vidaPc <= 0) {
            spanVidaPc.innerHTML = 0;
            crearMensajeResultado(2);
            revisarVidas ();
                
        } else {
            spanVidaPc.innerHTML = vidaPc;
            crearMensajeResultado(2);
        }

        progresoDeAtaquesEmpate = `Los elementos se igualaron!! 😯😮😲😯😳`;
        crearMensajeResultado(1);
    }

         //ACA SE MODIFICA LA VIDA DEL PC

    if (ataqueElementoDeLaPc == `Fuego 🔥` && ataqueElementoJugador == `Tierra ☘`) {
        progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelJugadorALaPc - defElegidoPorPc + debDeTierraMascotaElegidaPC}`;
        vidaPc = vidaPc - ataqueDelJugadorALaPc - defElegidoPorPc + debDeTierraMascotaElegidaPC;
        //alert (ataqueDelJugadorALaPc + "  " + defElegidoPorPc + "  " + debDeFuegoMascotaElegidaPC)

        if (vidaPc <= 0) {
            spanVidaPc.innerHTML = 0;
            crearMensajeResultado(2);
            revisarVidas ();
                
        } else {
            spanVidaPc.innerHTML = vidaPc;
            crearMensajeResultado(2);
        }
        
    } else if (ataqueElementoDeLaPc == `Tierra ☘` && ataqueElementoJugador == `Agua 💧`) {
        progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelJugadorALaPc - defElegidoPorPc + debDeAguaMascotaElegidaPC}`;
        vidaPc = vidaPc - ataqueDelJugadorALaPc - defElegidoPorPc + debDeAguaMascotaElegidaPC;
        //alert (ataqueDelJugadorALaPc + "  " + defElegidoPorPc + "  " + debDeTierraMascotaElegidaPC)
        if (vidaPc <= 0) {
            spanVidaPc.innerHTML = 0;
            crearMensajeResultado(2);
            revisarVidas ();
                
        } else {
            spanVidaPc.innerHTML = vidaPc;
            crearMensajeResultado(2);
        }

    } else if (ataqueElementoDeLaPc == `Agua 💧` && ataqueElementoJugador == `Fuego 🔥`) {
        progresoDeVidaPc = `vida del dragón de la Pc pierde ${ataqueDelJugadorALaPc - defElegidoPorPc + debDeFuegoMascotaElegidaPC}`;
        vidaPc = vidaPc - ataqueDelJugadorALaPc - defElegidoPorPc + debDeFuegoMascotaElegidaPC;
        //alert (ataqueDelJugadorALaPc + "  " + defElegidoPorPc + "  " + debDeAguaMascotaElegidaPC)
        if (vidaPc <= 0) {
            spanVidaPc.innerHTML = 0;
            crearMensajeResultado(2);
            revisarVidas ();
                
        } else {
            spanVidaPc.innerHTML = vidaPc;
            crearMensajeResultado(2);
        }
    }

        //ACA SE MODIFICA LA VIDA DEL JUGADOR

    if (ataqueElementoDeLaPc == `Tierra ☘` && ataqueElementoJugador == `Fuego 🔥`) {
        progresoDeVidaJugador = `vida de tú dragón pierde ${ataqueDeLaPcAlJugador - defElegidoPorJugador + debDeTierraMascotaElegidaJugador}`;
        vidaJugador = vidaJugador - ataqueDeLaPcAlJugador - defElegidoPorJugador + debDeTierraMascotaElegidaJugador;
        //alert (ataqueDeLaPcAlJugador + "  " + defElegidoPorJugador + "  " + debDeFuegoMascotaElegidaJugador)
        if (vidaJugador <= 0) {
            spanVidaJugador.innerHTML = 0;
            crearMensajeResultado(3);
            revisarVidas ();
                
        } else {
            spanVidaJugador.innerHTML = vidaJugador;
            crearMensajeResultado(3);
        }
    } else if (ataqueElementoDeLaPc == `Agua 💧` && ataqueElementoJugador == `Tierra ☘`) {
        progresoDeVidaJugador = `vida de tú dragón pierde ${ataqueDeLaPcAlJugador - defElegidoPorJugador + debDeAguaMascotaElegidaJugador}`;
        vidaJugador = vidaJugador - ataqueDeLaPcAlJugador - defElegidoPorJugador + debDeAguaMascotaElegidaJugador;
        //alert (ataqueDeLaPcAlJugador + "  " + defElegidoPorJugador + "  " + debDeTierraMascotaElegidaJugador)
        if (vidaJugador <= 0) {
            spanVidaJugador.innerHTML = 0;
            crearMensajeResultado(3);
            revisarVidas ();
                
        } else {
            spanVidaJugador.innerHTML = vidaJugador;
            crearMensajeResultado(3);
        }
    } else if (ataqueElementoDeLaPc == `Fuego 🔥` && ataqueElementoJugador == `Agua 💧`) {
        progresoDeVidaJugador = `vida de tú dragón pierde ${ataqueDeLaPcAlJugador - defElegidoPorJugador + debDeFuegoMascotaElegidaJugador}`;
        vidaJugador = vidaJugador - ataqueDeLaPcAlJugador - defElegidoPorJugador + debDeFuegoMascotaElegidaJugador;
        //alert (ataqueDeLaPcAlJugador + "  " + defElegidoPorJugador + "  " + debDeAguaMascotaElegidaJugador)
        if (vidaJugador <= 0) {
            spanVidaJugador.innerHTML = 0;
            crearMensajeResultado(3);
            revisarVidas ();
                
        } else {
            spanVidaJugador.innerHTML = vidaJugador;
            crearMensajeResultado(3);
        }
    }
};



// Gano cuando uso fuego contra tierra o uso tierra contra agua o si uso agua contra fuego.

function revisarVidas () {
    if (vidaPc <= 0) {
        crearMensajeFinal (`GANASTE 

        dejaste al dragón de la PC en 0 de vida. 
        Felicitaciones! Tú dragón es el vencedor. 
        🎉🎉🎈🥳🎉`);
        vidaPc = 0;
    } else if (vidaJugador <= 0) {
        crearMensajeFinal (`PERDISTE 

        El dragón del Pc dejó en 0 la vida de tú dragón. 
        Vuelve a jugar...  😣😣😣😣😣`);
        vidaJugador = 0;
    }
};

function crearMensajeResultado (mensajito) {
    
    if (mensajito == 1) {
        let ataqueEmpate = document.getElementById (`mensajes`);
        let parrafo1 = document.createElement (`p`);
        parrafo1.innerHTML = progresoDeAtaquesEmpate;
        ataqueEmpate.appendChild(parrafo1);
    } else if (mensajito == 2) {
        let ataqueJugador = document.getElementById (`ataque-jugador`);
        let parrafo2 = document.createElement (`p`);
        parrafo2.innerHTML = progresoDeVidaPc;
        ataqueJugador.appendChild(parrafo2);
    } else if (mensajito == 3) {
        let ataquePc = document.getElementById (`ataque-pc`);
        let parrafo3 = document.createElement (`p`);
        parrafo3.innerHTML = progresoDeVidaJugador;
        ataquePc.appendChild(parrafo3);
    } 
};

function crearMensajeFinal (resultadoFinal) {
   
    let divMensajeFinal = document.querySelector (`#mensaje-final`);
    let parrafo = document.createElement (`p`);
    parrafo.innerText = resultadoFinal;
    divMensajeFinal.appendChild(parrafo);  //aca se aplica lo interesante de las funciones junto con la funcion de revisarVidas...
    desactivarBotones ();
};

function desactivarBotones () {
    let botonFuego = document.querySelector (`#boton-fuego`);
    let botonTierra = document.querySelector (`#boton-tierra`);
    let botonAgua = document.querySelector (`#boton-agua`);
    botonFuego.disabled = true;
    botonTierra.disabled = true;
    botonAgua.disabled = true;
    let sectionReiniciar = document.querySelector (`#reiniciará`);
    sectionReiniciar.style.visibility = `visible`;
    sectionReiniciar.style.display = `flex`;
};

function relogActualizable () {
    const currentTime = () => {
        const idTime = document.querySelector (`#fecha-de-hoy`);
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

window.addEventListener (`load`, init);
let progresoDeAtaquesEmpate = ``;
let progresoDeVidaJugador = ``;
let progresoDeVidaPc = ``;
//let ResultadoDeAtaques;
let escuchaBotonDeFuego;
let escuchaBotonAgua;
let escuchaBotonTierra;

const listaMascotas = [];

const mascotasEleccion = [];

const mascotaElegidaPorPc = [];
const mascotaElegidaPorJugador = [];
const mascotaAtaque = [];

const registroDeAtaque = []; //aca es el ataque de los 6 dragones
let ataqueElegidoPorJugadorMascota; // aca se pushean los datos de los ataques elegidos por dragon
let ataqueElegidoPorPcMascota;

const registroDeVida = [];

const registroDeDefensa = [];
let defElegidoPorJugador;
let defElegidoPorPc;


const registroDeDebFuego = [];
let debDeFuegoMascotaElegidaJugador;
let debDeFuegoMascotaElegidaPC;

const registroDeDebAgua = [];
let debDeAguaMascotaElegidaJugador;
let debDeAguaMascotaElegidaPC;

const registroDeDebTierra = [];
let debDeTierraMascotaElegidaJugador;
let debDeTierraMascotaElegidaPC;

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