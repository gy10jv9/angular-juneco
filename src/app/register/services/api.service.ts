import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
    providedIn: 'root'
}) 

export class Apiservice {
    constructor(private http: HttpClient) {}

    register = (data: any) => {
        return this.http.post (
            'http://localhost:3000/user/add', data
        )
    }
}