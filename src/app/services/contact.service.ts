import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Contact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl: string;

  private httpClient = inject(HttpClient);

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/contacto';
  }

  contactFormulario(formValues: any): Promise<Contact> {
    return firstValueFrom(
      this.httpClient.post<Contact>(`${this.baseUrl}/`, formValues)
    );
  }

  getFormById(formId: number): Promise<Contact | any> {
    return firstValueFrom(
      this.httpClient.get<Contact>(`${this.baseUrl}/id/${formId}`)
    );
  }
}
