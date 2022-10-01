class Alumno {
  private nombre: string;
  private apellido: string;
  private notaHistoria: number;
  private notaEnglesh: number;
  private notaMatematica: number;

  constructor(pNombre:string, pApellido:string, pNotaHist:number, pNotaEngl:number, pNotaMate:number){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.notaHistoria = pNotaHist;
    this.notaEnglesh = pNotaEngl;
    this.notaMatematica = pNotaMate;
  }

  public getNombre():string {
    return this.nombre;
  }
  public setNombre(paraNombre):void {
    this.nombre = paraNombre;
  }
  public setApellido(paraApellido):void {
    this.apellido = paraApellido;
  }
  public getApellido():string {
    return this.apellido;
  }
  public setNotaMatematica(paraNota):void {
    this.notaHistoria = paraNota;
  }

  public getCalificacionHist():string {
    if(this.notaHistoria>=7){
      return "Aprobado";
    } else {
      return "Desaprobado"
    }
  }

  public getCalificacionEngl():string {
    if(this.notaEnglesh>=7){
      return "Aprobado";
    } else {
      return "Desaprobado";
    }
  }

  public getCalificacionMate():string {
    if(this.notaMatematica>=7){
      return "Aprobado";
    } else {
      return "Desaprobado";
    }
  }
}


class Profesor {
  private nombre: string;
  private apellido: string;
  private listadoDeAlumnos:Alumno[];

  constructor(pNombre:string, pApellido:string, pListadoAlumnos:Alumno[]){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.listadoDeAlumnos = pListadoAlumnos;
  }

  public getNombre():string {
    return this.nombre;
  }
  public setNombre(paraNombre):void {
    this.nombre = paraNombre;
  }
  public setApellido(paraApellido):void {
    this.apellido = paraApellido;
  }
  public getApellido():string {
    return this.apellido;
  }

}

class Escula {
   private nombreEscuela: string;
   private listadoAlumnos: Alumno[];
   private listadoProfesores: Profesor[];

   constructor(pNombre:string, pListadoAlumnos:Alumno[], pListadoProfesores:Profesor[]){
    this.nombreEscuela = pNombre;
    this.listadoAlumnos = pListadoAlumnos;
    this.listadoProfesores = pListadoProfesores;
   }


   public getNombreEscuela():string {
    return this.nombreEscuela;
   }
   public setNombreEscuela(paraNombre):void {
    this.nombreEscuela =paraNombre;
   }
   public contratarProfesor(ParaProfeseor:Profesor):void {
    this.listadoProfesores.push(ParaProfeseor)
    console.log("Profesor Contratado" +ParaProfeseor.getApellido());
    
   }
   public despredirProfesor(ParaProfeseor:Profesor):void {
    for(let i:number = 0; i<this.listadoProfesores.length; i++){
      if(ParaProfeseor.getApellido() === this.listadoProfesores[i].getApellido()){
        this.listadoProfesores.splice(i,1);
        console.log("Profesor Despedido" + ParaProfeseor.getApellido());
      }else{
        console.log("No se encontro al profresor.");
        
      }
    }
   }

   public maticuelarAlumno(paraAlumno:Alumno):void {
    this.listadoAlumnos.push(paraAlumno);
   }
   public removerAlumno(paraAlumno:Alumno):void {
    for(let i:number = 0; i < this.listadoAlumnos.length; i++) {
      if(paraAlumno.getApellido() === this.listadoAlumnos[i].getApellido()){
        this.listadoAlumnos.splice(i,1);
        console.log("El alumno" + paraAlumno.getApellido() ,"fue removido");
      }
    }
   }
}

   let alumno1 = new Alumno("pedro","perez",4,5,6);
   let alumno2 = new Alumno("juan","gomez",5,6,7);
   let alumno3 = new Alumno("luciana","fernadez",8,8,9);

   let listadoAl: Alumno[] = [alumno1,alumno2,alumno3];

   let docenteA = new Profesor("lucas","pastoruti",listadoAl);
   let docenteB = new Profesor("juan","garcia",listadoAl);
   let docenteC = new Profesor("sergio","almonasi",listadoAl);

   let listadoDeDocentes:Profesor[] = [docenteA,docenteB,docenteC];
   
   let escuelaPrimaria: Escula = new Escula("Escuiela N:7",listadoAl,listadoDeDocentes);

   
   //escuelaPrimaria.despredirProfesor(docenteB);
   