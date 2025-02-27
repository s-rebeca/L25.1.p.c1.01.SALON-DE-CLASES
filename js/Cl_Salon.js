export default class Cl_Salon {
    constructor () {
        this.acumEdad = 0;
        this.contEstudiante = 0;
        this.chicaMayor = 0;
        this.auxNombre;
        this.mayor = 0;
        this.contaf = 0;
    }

    procesarEstudiante (es) {
        this.contEstudiante++;
        this.acumEdad += es.edad;
        if (es.edad>=18 && es.sexo === 'f') {
            this.chicaMayor++;
        }
        if (es.sexo === 'f') {
            this.contaf++;
        }
        if (es.edad> this.mayor) {
            this.mayor = es.edad;
            this.auxNombre = es.nombre;
        }
    }

    edadPromedio () {
        return this.acumEdad / this.contEstudiante;
    }

    porcentajeChicaMayor () {
        return (this.chicaMayor / this.contaf) * 100;
    }
    devolverMayor () {
        return this.auxNombre;
    }
}