import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var close:any = document.getElementById('cerrar');
    var menug:any = document.getElementById('mega-menu');
    var categ:any = document.getElementById('categorias');
    close.addEventListener("click",function (e:any) {
      e.preventDefault();
       menug.style.visibility = "hidden";
    });


    categ.addEventListener('click',function (f:any){
       f.preventDefault();
       menug.style.visibility = "visible";
    });
  }
  login(){
    $('#modal_login').modal('show');
  }

}
