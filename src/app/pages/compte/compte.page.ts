import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(private navCtrl: NavController) {  }

  ngOnInit() {
  }
  clickedCompte(id){
    
    if(id==1){
      this.navCtrl.navigateRoot('/register');
    }else if(id==2){
      this.navCtrl.navigateRoot('/newcompte');
    }else{
      this.navCtrl.navigateRoot('/home');
    }
    
    return false;
  }
}
