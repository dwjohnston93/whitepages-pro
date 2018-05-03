import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class ReversePhoneService {
 phone: string = "6195925389"
 myKey: string = "036aaec05d7545efad76ba76088998cd"
 url: string = "https://proapi.whitepages.com/3.0/phone?phone=" + this.phone + "&api_key=" + this.myKey;
//url: string = "https://proapi.whitepages.com/3.0/phone?phone=2061115201&api_key=API_KEY";


 constructor(private http: HttpClient) { }
 
 getData (){
   return this.http.get(this.url)
 
}

} 