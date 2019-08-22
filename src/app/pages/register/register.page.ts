import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private authService: AuthService,
    public loading:LoadingService,
    private router: Router,
    public toastController: ToastController,
    private alertService: AlertService) { }

  ngOnInit() {
    
  }
  register(form: NgForm) {
    
    this.loading.present();
    this.authService.register(form.value.fName,form.value.phone, form.value.city).subscribe(res => {
      this.loading.dismiss();
      if(res.erreur){
        this.presentToast(res.erreur)
      }
      console.log(JSON.stringify(res));
      if (res.message) {
        this.router.navigate(['merci']);
      }
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
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
