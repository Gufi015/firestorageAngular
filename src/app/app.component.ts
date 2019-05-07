import { FirebaseStorageService } from "./firebase-storage.service";
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CloudStorage";

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required)
  });

  public mensajeArchivo = "No hay un archivo seleccionado";
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  constructor(private firebaseStorage: FirebaseStorageService) {}

  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo Preparado: ${
          event.target.files[i].name
        }`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append(
          'archivo',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo = "No hay un Archivo selecionado!";
    }
  }
  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo
    );
    let tarea = this.firebaseStorage.tareaCloudStorage(
      this.nombreArchivo,
      archivo
    );

    tarea.percentageChanges().subscribe(porcentaje => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
        console.log('Subida Finalizada');
      }
    }, (error)=>{
      console.log(error);
    });


    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
      console.log('Esta es la url' + JSON.stringify(URL));
    });
  }
}
