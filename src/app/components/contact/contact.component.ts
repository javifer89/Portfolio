import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactService = inject(ContactService)
  formulario: FormGroup;


     constructor(private router: Router) {
         this.formulario=new FormGroup({

             nombre: new FormControl(null, [Validators.required]),
             apellidos: new FormControl(null, [Validators.required]),
             email: new FormControl(null, [ Validators.required,
                 Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-] {2, 10}$/),
                 ]),
             mensaje: new FormControl(null, [Validators.required]),
         });
    }

    async onSubmit() {
     const response=await this.contactService.contactFormulario(this.formulario.value);
     console.log(response);

     Swal.fire({
         icon: 'success',
         title: 'Mensaje enviado correctamente',
         showConfirmButton: false,
         timer: 2500,
         width: 500,
         padding: '3em',
         color: '#333333',
         background: '#0077B6',
     });
    this.router.navigate(['/home']);
    }

    checkError(field: string, error: string) {
     return (this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched);
    }
    }
