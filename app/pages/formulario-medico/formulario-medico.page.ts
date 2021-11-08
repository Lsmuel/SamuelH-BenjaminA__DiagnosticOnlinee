import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioMedicoService, Form } from 'src/app/services/formulario-medico.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-formulario-medico',
  templateUrl: './formulario-medico.page.html',
  styleUrls: ['./formulario-medico.page.scss'],
})
export class FormularioMedicoPage implements OnInit {

  form: Form [] = [];
  newForm : Form = <Form>{};

  @ViewChild('myList')myList : IonList;

  constructor(private storageService: FormularioMedicoService, 
    private plt: Platform, private toastcontroller: ToastController ) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getDatos().then(formu=>{
      this.form=formu;
    });
  }


  addDatos(){
    this.newForm.modified = Date.now();
    this.newForm.id = Date.now();
    this.storageService.addDatos(this.newForm).then(form=>{
      this.newForm = <Form>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  updateDatos(form: Form ){
    form.nombre = `UPDATED: ${form.nombre}`;
    form.modified = Date.now();
    this.storageService.updateDatos(form).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }
  
  deleteDatos(form: Form){
    this.storageService.deleteDatos(form.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastcontroller.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

}

