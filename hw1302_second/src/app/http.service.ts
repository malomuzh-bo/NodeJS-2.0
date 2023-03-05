import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class HttpService{
    constructor(private http: HttpClient){}

    getData(user: User){
        const body = {login: user.login, pass: user.pass};
        console.log(body);

        return this.http.post('http://localhost:3000/postuser', body);
    }
}