// import { Component, inject } from '@angular/core';
// import { ContactService } from 'src/app/services/contact.service';
// import { FormControl, FormGroup, Validators} from '@angular/forms';
// import { Router} from '@angular/router';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
//   contactService = inject(ContactService)
//   formulario: FormGroup;


//      constructor(private router: Router) {
//          this.formulario=new FormGroup({

//              nombre: new FormControl(null, [Validators.required]),
//              apellidos: new FormControl(null, [Validators.required]),
//              email: new FormControl(null, [ Validators.required,
//                  Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-] {2, 10}$/),
//                  ]),
//              mensaje: new FormControl(null, [Validators.required]),
//          });
//     }

//     async onSubmit() {
//      const response=await this.contactService.contactFormulario(this.formulario.value);
//      console.log(response);

//      Swal.fire({
//          icon: 'success',
//          title: 'Mensaje enviado correctamente',
//          showConfirmButton: false,
//          timer: 2500,
//          width: 500,
//          padding: '3em',
//          color: '#333333',
//          background: '#0077B6',
//      });
//     this.router.navigate(['/home']);
//     }

//     checkError(field: string, error: string) {
//      return (this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched);
//     }
//     }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage!: string; // the response message to show to the user

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      let formData: any = new FormData();
      formData.append("name", this.form.get("name")!.value);
      formData.append("email", this.form.get("email")!.value);
      formData.append("message", this.form.get("message")!.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits

//       this.http.post("https://script.google.com/macros/s/AKfycbwItkJwk7wFos1By0F2J7IX4sgHVWH5cRK6rIIfvo65eQ1yDpBd3VHLuTxPMXEadOM/exec", formData).subscribe(
//         (response) => {
//           // choose the response message
//           if (response["result"] == "success") {
//             this.responseMessage = "Thanks for the message! I'll get back to you soon!";
//           } else {
//             this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
//           }
//           this.form.enable(); // re enable the form after a success
//           this.submitted = true; // show the response message
//           this.isLoading = false; // re enable the submit button
//           console.log(response);
//         },
//         (error) => {
//           this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
//           this.form.enable(); // re enable the form after a success
//           this.submitted = true; // show the response message
//           this.isLoading = false; // re enable the submit button
//           console.log(error);
//         }
//       );
//     }
//   }
this.http.post("https://script.google.com/macros/s/AKfycbwItkJwk7wFos1By0F2J7IX4sgHVWH5cRK6rIIfvo65eQ1yDpBd3VHLuTxPMXEadOM/exec", formData)
      .pipe(
        switchMap((response : any) => {
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
          return of(response); // You can modify this to return any relevant data
        }),
        catchError((error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
          return of(error); // You can modify this to return any relevant data
        })
      )
      .subscribe();
  }
}
}
