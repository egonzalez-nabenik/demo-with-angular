import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginUsername = '';
  loginPassword = '';

  constructor(
    private loginService: LoginService
  ) { }

  doLogin(): void {
    if (this.loginUsername?.trim() == '') {
      alert('El campo "Usuario" es requerido');
      return;
    }
    if (this.loginPassword?.trim() == '') {
      alert('El campo "Contraseña" es requerido');
      return;
    }
    if (this.loginPassword == '1234') {
      alert('No uses esta contraseña');
      return;
    }
    this.loginService.tryToDoLogin(this.loginUsername, this.loginPassword)
      .subscribe({
        next: resp => { console.log('El token recibido es: ' + resp.token) },
        error: err => { console.error('No se pudo iniciar sesión') }
      });
  }

}
