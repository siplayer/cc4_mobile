import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    public loading:LoadingService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public toastController: ToastController
  ) {
    
   }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }
  
  onFormSubmit(form: NgForm) {
    this.loading.present();
    this.authService.login(form)
      .subscribe(res => {
        if(res.erreur){
          this.loading.dismiss();
          this.presentToast(res.erreur)
        }
        else if (res.password) {
          localStorage.setItem('token', res.password);
          localStorage.setItem('id', res.id);
          localStorage.setItem('role', res.role);
          localStorage.setItem('parent', res.parent);
          this.presentToast('Veuillez patienter un peut vous serait rediriger dans quelques instants')
          this.loading.dismiss();          
          this.router.navigate(['/home']);

        }
      }, (err) => {
        this.loading.dismiss();
      });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}