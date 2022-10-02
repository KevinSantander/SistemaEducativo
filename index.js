var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pNotaHist, pNotaEngl, pNotaMate) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaHistoria = pNotaHist;
        this.notaEnglesh = pNotaEngl;
        this.notaMatematica = pNotaMate;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (paraNombre) {
        this.nombre = paraNombre;
    };
    Alumno.prototype.setApellido = function (paraApellido) {
        this.apellido = paraApellido;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setNotaMatematica = function (paraNota) {
        this.notaHistoria = paraNota;
    };
    Alumno.prototype.getCalificacionHist = function () {
        if (this.notaHistoria >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    Alumno.prototype.getCalificacionEngl = function () {
        if (this.notaEnglesh >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    Alumno.prototype.getCalificacionMate = function () {
        if (this.notaMatematica >= 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(pNombre, pApellido, pListadoAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoDeAlumnos = pListadoAlumnos;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.setNombre = function (paraNombre) {
        this.nombre = paraNombre;
    };
    Profesor.prototype.setApellido = function (paraApellido) {
        this.apellido = paraApellido;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    return Profesor;
}());
var Escula = /** @class */ (function () {
    function Escula(pNombre, pListadoAlumnos, pListadoProfesores) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
    }
    Escula.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    Escula.prototype.setNombreEscuela = function (paraNombre) {
        this.nombreEscuela = paraNombre;
    };
    Escula.prototype.contratarProfesor = function (ParaProfeseor) {
        this.listadoProfesores.push(ParaProfeseor);
        console.log("Profesor Contratado" + ParaProfeseor.getApellido());
    };
    Escula.prototype.despredirProfesor = function (ParaProfeseor) {
        for (var i = 0; i < this.listadoProfesores.length; i++) {
            if (ParaProfeseor.getApellido() === this.listadoProfesores[i].getApellido()) {
                this.listadoProfesores.splice(i, 1);
                console.log("Profesor Despedido" + ParaProfeseor.getApellido());
            }
            else {
                console.log("No se encontro al profresor.");
            }
        }
    };
    Escula.prototype.maticuelarAlumno = function (paraAlumno) {
        this.listadoAlumnos.push(paraAlumno);
    };
    Escula.prototype.removerAlumno = function (paraAlumno) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (paraAlumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i, 1);
                console.log("El alumno" + paraAlumno.getApellido(), "fue removido");
            }
        }
    };
    return Escula;
}());
var alumno1 = new Alumno("pedro", "perez", 4, 5, 6);
var alumno2 = new Alumno("juan", "gomez", 5, 6, 7);
var alumno3 = new Alumno("luciana", "fernadez", 8, 8, 9);
var listadoAl = [alumno1, alumno2, alumno3];
var docenteA = new Profesor("lucas", "pastoruti", listadoAl);
var docenteB = new Profesor("juan", "garcia", listadoAl);
var docenteC = new Profesor("sergio", "almonasi", listadoAl);
var listadoDeDocentes = [docenteA, docenteB, docenteC];
var escuelaPrimaria = new Escula("Escuiela N:7", listadoAl, listadoDeDocentes);
escuelaPrimaria.despredirProfesor(docenteB);
console.log(escuelaPrimaria);
