import { Component } from '@angular/core';

@Component({
  selector: 'app-academi-login',
  templateUrl: './academi-login.component.html',
  styleUrls: ['./academi-login.component.css']
})
export class AcademiLoginComponent {

  name: string|undefined;
  userName:string = "Peter"; 
   constructor() { } 
   ngOnInit() { 
      this.name = "Aluh John" 
   }

   showData($event: any){
    console.log("button is clicked!");
    if($event) { 
      console.log($event.target); 
      console.log($event.target.value); 
   } 
   }
}
