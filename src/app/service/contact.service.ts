import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../model/contact'
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

	constructor(private http: Http) { }

	// private serverApi= 'http://localhost:3000'; /*removed to make heroku ready*/
	public addContact(contact: Contact) {
		// let URI = `${this.serverApi}/contact/`;  /*removed to make heroku ready*/
		let headers = new Headers;
		let body = JSON.stringify({ name: contact.name, email: contact.email, message: contact.message });
		headers.append('Content-Type', 'application/json');
		// return this.http.post(URI, body ,{headers: headers})  /*removed to make heroku ready*/
		return this.http.post('/contact', body, { headers: headers })
			.map(res => res.json());
	}
}
