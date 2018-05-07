import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class ReversePhoneService {
 //template url: string = "https://proapi.whitepages.com/3.0/phone?phone=2061115201&api_key=API_KEY";
 phone: string = "phone?phone="
 myKey: string = "036aaec05d7545efad76ba76088998cd";
 url: string = "https://proapi.whitepages.com/3.0"
apiKey: string ="&api_key=036aaec05d7545efad76ba76088998cd"

 constructor(private _http: HttpClient) {
    
 }
 
    getData (phoneNum){
        console.log("my url request", this.url + this.phone + phoneNum+ this.apiKey);
        let urlRequest = this.url + this.phone + phoneNum + this.apiKey; 
        return this._http.get(urlRequest)
        }
 
} 