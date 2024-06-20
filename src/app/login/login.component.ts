// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;
formControlName: any;
  constructor(private _fb: FormBuilder) {}
  ngOnInit(): void {
    this.formData = this._fb.group({
      // schoolCode: ['', Validators.required],
      username: ['', Validators.required],
      // role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: [false],
    });
  }
  onSubmit() {
    if (this.formData.valid) {
      const formDataJson = JSON.stringify(this.formData.value);
      console.log('Request JSON:', formDataJson);
      // this._loginService.login(formDataJson);
    } else {
      console.log('form err');
      this.formData.markAllAsTouched();
    }
  }

}
