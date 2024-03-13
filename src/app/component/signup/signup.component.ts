import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email! : string;
  password! : string;
  firstname!: string;
  lastname!: string;

  authService = inject(AuthServiceService)
  router = inject(Router)

  signup() {
    this.authService.signup(this.firstname, this.lastname, this.email,this.password).subscribe({
      next : apiResponse => {
        //some stuff here
        localStorage.setItem("authentication_date", apiResponse.authentication_date);
        this.router.navigate(['/activate']);
      }, 
      error: (err) => console.error(err),
      complete: () => console.log('Completed')
    })
      
  }
}
