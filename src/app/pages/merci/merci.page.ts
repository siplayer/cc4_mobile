import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-merci',
  templateUrl: './merci.page.html',
  styleUrls: ['./merci.page.scss'],
})
export class MerciPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  clickedhome(){
    this.navCtrl.navigateRoot('/home');
    return false;
  }
}
