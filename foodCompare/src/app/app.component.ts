import { Component, Input, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Food } from './model/food';
import { FoodService } from './services/food.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
foods1:Food[] =[]
selectedFoods1:Food[]=[]

foods2:Food[]=[]
selectedFoods2:Food[] = []

selectedGraphicFood1:Food = {
  energia:-1,
  grasas:-1,
  carbohidratos:-1,
  azucar:-1,
  proteina:-1,
  colesterol:-1

}
selectedGraphicFood2:Food = {
  energia:-1,
  grasas:-1,
  carbohidratos:-1,
  azucar:-1,
  proteina:-1,
  colesterol:-1
}


 nombre1:string = ''
 nombre2:string = ''

seDespliega1:boolean = false
seDespliega2:boolean = false

   basicData1:any
   basicData2:any
   basicOptions:any


  constructor(private foodService:FoodService){
  }

  
  ngOnInit(): void {
   this.foodService.getFoods().subscribe(data => this.foods1 = data);
   this.foodService.getFoods().subscribe(data => this.foods2 = data);
  }
  
  despliegaColumnas1(){
    if(this.seDespliega1 == true){
      this.seDespliega1 = false
    }else{
      this.seDespliega1 = true
    }
  }

  despliegaColumnas2(){
    if(this.seDespliega2 == true){
      this.seDespliega2 = false
    }else{
      this.seDespliega2 = true
    }
  }

  eligeselectedFoods1(nombre:string){
    this.selectedFoods1 = this.foods1.filter(data => data.nombre == nombre)
    this.selectedGraphicFood1 = this.selectedFoods1[0]
    this.basicData1={
      labels:['Calorías','Grasas','Carbohidratos','Azucares','Proteina','Sal','Colesterol'],
      datasets:[
        {
         label: 'Tabla de valores',
         backgroundColor: '#FF5733',
           data:[this.selectedGraphicFood1.energia,this.selectedGraphicFood1.grasas,this.selectedGraphicFood1.carbohidratos,this.selectedGraphicFood1.azucar,this.selectedGraphicFood1.proteina,this.selectedGraphicFood1.sal,this.selectedGraphicFood1.colesterol]
        }
      ]
      
    }
  }

  eligeselectedFoods2(nombre:string){
    this.selectedFoods2 = this.foods2.filter(data => data.nombre == nombre)
    this.selectedGraphicFood2 = this.selectedFoods2[0]
    
    this.basicData2={
      labels:['Calorías','Grasas','Carbohidratos','Azucares','Proteina','Sal','Colesterol'],
      datasets:[
        {
         label: 'Tabla de valores',
         backgroundColor: '#B8FF33',
           data:[this.selectedGraphicFood2.energia,this.selectedGraphicFood2.grasas,this.selectedGraphicFood2.carbohidratos,this.selectedGraphicFood2.azucar,this.selectedGraphicFood2.proteina,this.selectedGraphicFood2.sal,this.selectedGraphicFood2.colesterol]
        }
      ]
      
    }
  }

  
}
