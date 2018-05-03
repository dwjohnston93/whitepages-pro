import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  results: any; 
  constructor(private _reversePhone: ReversePhoneService){}
  
  ngOnInit(){}
  
  getPhoneNumber(input){
      this._reversePhone.getData().subscribe( data => {
        console.log(data)
        this.results = data;
        console.log(this.results); 
      })
    }

}
