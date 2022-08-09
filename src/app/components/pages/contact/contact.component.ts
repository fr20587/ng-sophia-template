// Angular Modules
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Third's Modules
// import Swal from 'sweetalert2';

// Service
// import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  public contacFormSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,

    // private contactService: ContactService,
  ) { }

  public contactForm = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(2) ]],
    email: [ '', [ Validators.required, Validators.email ]],
    subject: [ '', [ Validators.required ]],
    message: [ '', [ Validators.required ]],
  });


  // Send message
  // public sendMessage() {
  //   this.contacFormSubmitted = true;

  //   if (this.contactForm.invalid) {
  //     return;
  //   }

  //   this.contactService.sendMessage(this.contactForm.value)
  //     .subscribe( resp => {
  //       Swal.fire(
  //         'Mensaje recibido',
  //         'Nos pondremos en contacto con usted a la mayor brevedad posible.',
  //         'success'
  //       );
  //     });

  //   this.router.navigateByUrl('/home');
  // }

  // Check fields
  public fieldNotValid( field: string ): boolean {
    if (this.contactForm.get(field).invalid && this.contacFormSubmitted) {
      return true;
    } else {
      return false;
    }
  }

}
