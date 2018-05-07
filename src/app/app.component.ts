import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  input: any;
  number: any;
  results: any; 
  constructor(private _http: HttpClient){
    getPhoneNumber(){
      this._http.getData().subscribe( data => {
        console.log(data)
        this.results = data;
        console.log(this.results); 
      })
    }
    
  }
  
  ngOnInit(){}
  
  
      
}
