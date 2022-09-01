class Gato {
    //Estado/Caracteristica/Campo
    nombre = "No tengo nombre";
    esHuranio = true;

    //Comportamiento/metodo
    
    /**
     * Muestra el resultado del Gato al ser acariciado 
     * dependiendo del estado esHuranio
     */
    teEstanAcariciando() {
        if (this.esHuranio) {
            console.log("No me agradas y te voy a arañar >:( ");
        }else{
            console.log("Me agradas, estoy ronroneando :)");
        }
    }

    /**
     * Cambia el estado de esHuranio al Gato
     * @param {Boolean} nuevoAnimo para el Gato
     */
    cambiaTuAnimo(nuevoAnimo){
        this.esHuranio = nuevoAnimo;
    }

    /**
     * Muestra la presentacion del Gato
     * @returns la presentacion del Gato
     */
    comoTeLlamas() {
        return "Mi nombre es: " + this.nombre;
    }

    /**
     * Cambia el nombre del Gato
     * @param {String} nuevoNombre para el Gato
     */
    ahoraTeLlamas(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

//exporta la definicion de la clase Gato
module.exports = Gato;