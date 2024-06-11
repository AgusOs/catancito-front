import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../store/actions/user.actions';
import { Router } from '@angular/router';
import { selectErrorAuth, selectIsLogged, selectLoadingAuth, selectUserAuth } from '../../../store/selectors/user.selector';
import { Subscription, Observable } from 'rxjs';
import { AppState } from '../../../store/app.reducer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loading$!: Observable<any>
  _loading!: Subscription
  loading: any

  error$!: Subscription
  error!: any

  _isLogged!: Subscription
  isLogged: boolean = false

  loginForm!: FormGroup;

  token: any;
  disabled:boolean = true
  
  constructor(
    private store: Store<AppState>,
    private router: Router
  ){

    // this.fetchData();
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoadingAuth)
    this._isLogged = this.store.select(selectIsLogged)
      .subscribe(res => this.isLogged = res)
    this._loading = this.loading$.subscribe(res => this.loading = res)
    this.error$ = this.store.select(selectErrorAuth)
      .subscribe(err => {
        this.error = err
        if (err) this.loading = false
      })

  }

  ngOnDestroy(): void {
    this._loading?.unsubscribe()
    this._isLogged?.unsubscribe()
    this.error$?.unsubscribe()
  }

  onSubmit(){
    if(this.loginForm.value != null){
      const submit = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }
      this.store.dispatch(login({ ...submit }))
    }
  }

}
