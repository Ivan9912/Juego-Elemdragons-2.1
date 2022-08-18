//export {mascotasEleccion};

const mascotasEleccion = [];

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

mascotasEleccion.push(new Mascotas(`Dragón N°1`,`Agua`, 1010, 60,16,5,6,98));
mascotasEleccion.push(new Mascotas(`Dragón N°2`,`Fuego`, 1020, 60,15,5,6,97));
mascotasEleccion.push(new Mascotas(`Dragón N°3`,`Tierra`, 1030, 60,14,5,6,96));
mascotasEleccion.push(new Mascotas(`Dragón N°4`,`Agua y Fuego`, 1040, 60,13,5,6,95));
mascotasEleccion.push(new Mascotas(`Dragón N°5`,`Agua y Tierra`, 1050, 60,12,5,6,94));
mascotasEleccion.push(new Mascotas(`Dragón N°6`,`Tierra y Fuego`, 1060, 60,11,5,6,93));

