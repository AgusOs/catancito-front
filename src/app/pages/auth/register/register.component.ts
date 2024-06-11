import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { register } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup

  constructor(private store:Store<AppState>){

    this.registerForm = new FormGroup({
      email: new FormControl('',
        [Validators.required, Validators.email]
      ),
      user_name: new FormControl('',
        Validators.required
      ),
      password: new FormControl('',
        Validators.required
      )
    })

  }

  onSubmit(){
    if(this.registerForm.value != null){
      const submit = {
        email: this.registerForm.get('email')?.value,
        user_name: this.registerForm.get('user_name')?.value,
        password: this.registerForm.get('password')?.value
        }
      this.store.dispatch(register({ ...submit }))
    }
  }

}