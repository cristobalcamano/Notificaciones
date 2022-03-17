import { Component, OnInit, ViewChild ,ElementRef, Renderer2} from '@angular/core';

import {Notificaciones}from'../../models/Notificaciones';
import {Paginador}from'../../models/Paginador';
import {NotificacionesService} from '../../services/notificaciones.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  
  public listaNotificaciones : Notificaciones[] =[];
  cantidad : number[]=[];
  public estadoNextdeshabilitado= false;
  public estadoNext= true;
  public origenEmail:string="";
  maximasPage:number=5;  
  page:Paginador={
    number:0,
    size:10,
    totalPages :0,
    totalElements:0,
    origen:this.origenEmail,
    paginaActual:0
  }
  
  
  constructor(
    private notificacionesService:NotificacionesService

    ) { }

  ngOnInit(): void {        
    this.getNotificaciones();
  }

  getNotificaciones(){
    this.notificacionesService.getNotificaciones(this.page)
    .subscribe((res:any)=>{        
      this.listaNotificaciones=res.content
      this.page=res;
      this.page.paginaActual=this.page.number +1;    
      this.page.origen=this.origenEmail
      let pagesN = this.maximasPage <= this.page.totalPages ? this.maximasPage : this.page.totalPages       
      let s;
      if(this.page.number > 0){
         s=this.cantidad[pagesN - 1]              
      }else{
         s=this.cantidad[pagesN]              
      }      
        if(this.page.totalPages != s){                   
          for (let i = 0; i < pagesN; i++) {                                  
            this.cantidad[i]=this.page.paginaActual++;                                                                             
          }  
        }        
    },
    (err) => console.log(err)
    );
  }

  FiltroOrigen(){  
    this.page.number=0;
    this.page.origen=this.origenEmail;  
    this.estadoNextdeshabilitado=false;
    this.getNotificaciones();
  }
  setNext(){ 
    this.page.number++;   
    
    let cont = this.page.number + 1 ;
    let s =this.cantidad[this.maximasPage - 1] + 1;              
    if(this.page.totalPages > cont){
        if(this.page.totalPages == s){        
          this.cantidad.shift(); 
          this.cantidad.push(s);
        }                                                   
    }else{
      this.estadoNextdeshabilitado=true;
    }             
    this.getNotificaciones();         
  }

  previous(){    
    this.estadoNextdeshabilitado=false
    this.page.number--;    
    this.getNotificaciones();
  }

  numeroPaginador(nPagina:number){        
    this.page.number=nPagina - 1;
    let cont = this.page.number + 1 ;
    if(this.page.totalPages > cont){  
      this.estadoNextdeshabilitado=false    
    }else{
      this.estadoNextdeshabilitado=true;
    }
    
    this.getNotificaciones();
    
  }
  getUltimaPagina(){
    this.page.number=this.page.totalPages - 1    
    let cont = this.page.number + 1 ;
    if(this.page.totalPages > cont){

    }else{
      this.estadoNextdeshabilitado=true;
    }
    this.getNotificaciones();
  }
  getPrimeraPagina(){{
    this.estadoNextdeshabilitado=false
    this.page.number=0;        
    this.getNotificaciones();
  }} 

}
