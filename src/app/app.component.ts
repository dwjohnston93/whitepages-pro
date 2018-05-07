import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  results: any;
  
  constructor(private _reversephone: ReversePhoneService){}
  
  ngOnInit(){}
  
  getPhoneNumber(phoneNum){
      this._reversephone.getData(phoneNum).subscribe( data => {
        console.log(data)
        this.results = data;
        console.log(this.results); 
      })
    }
    
      
}
