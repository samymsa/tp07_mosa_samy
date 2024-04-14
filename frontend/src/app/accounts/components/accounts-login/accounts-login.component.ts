import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'accounts-login',
  templateUrl: './accounts-login.component.html',
  providers: [ApiService],
})
export class AccountsLoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.login(this.loginForm.value).subscribe((response) => {
      console.log('Login response: ', response);
      this.loginForm.reset();
    });
  }
}