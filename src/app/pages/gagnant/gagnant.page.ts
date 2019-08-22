import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import * as $ from "jquery";
import { TweenMax } from 'gsap';
import { TirageService } from '../../services/tirage.service';
import { AlertService } from '../../services/alert.service';

declare var Power1,Expo,Bounce,Elastic: any;

@Component({
  selector: 'app-gagnant',
  templateUrl: './gagnant.page.html',
  styleUrls: ['./gagnant.page.scss'],
})
export class GagnantPage implements OnInit {
  canPlay: boolean = false;
  terminer: boolean = false;
  
  btnVal = "";
  messageavant = '';
  Winner = {
    name : "",
    phone : "",
    city : ""
  }

  constructor(
    private navCtrl: NavController,
    public tirage:TirageService,
    public alert:AlertService) {  }

  ngOnInit() {
    this.tirage.gettirage().subscribe(res => {
      if (res.erreur) {
        this.messageavant = res.erreur;
        this.terminer = true;
        this.btnVal = "Terminer";
      }else{
        this.canPlay = true;
        this.btnVal = "Start";
        this.messageavant = res.Message;
      }
    }, (err) => {
      console.log(err);
    });
  }
  doTirage(){
    if(!this.canPlay){ this.navCtrl.navigateRoot('/home');return false;}
        this.tirage.executetirage().subscribe(res => {
          if(res.erreur && res.erreur!=''){
            this.Winner.name  = "--------";
            this.Winner.phone = "--------";
            this.Winner.city  = "--------";
            this.terminer = true;
          }else{
            this.Winner.name  = res.name;
            this.Winner.phone = res.phone;
            this.Winner.city  = res.city;
            this.canPlay = false;
            this.terminer = true;
          }
          
        });
      this.rotateWheel();
      return false;
    
      
  }


  reload(){
    location.reload();
    return false;
  }

  goHome(){
    this.navCtrl.navigateRoot('/home');
    return false;
  }

  rotateWheel(){
    TweenMax.fromTo($("#rotator"), 10, {rotation:0, transformOrigin:"50% 50%"}, {rotation:360*3, transformOrigin:"50% 50%", ease: Expo.easeOut});
    setTimeout( () => {
    TweenMax.fromTo($("#rotator"), 10, {rotation:0, transformOrigin:"50% 50%"}, {rotation:360*3, transformOrigin:"50% 50%", ease: Expo.easeOut});
    }, 400);
    
    $("#wheelBox, #action").delay(3500).fadeTo(600,0, function(){
       TweenMax.staggerFromTo(".infosUser", 1.2, {y:80, autoAlpha:0}, {y:0, autoAlpha:1, display:'block', ease: Elastic.easeOut.config(1, 0.75)}, 0.2, function(){ $("#afterTirage_action").fadeIn(600) });$(this).remove() 
    });

    this.btnVal = "Tirage au sort en cours...";
    this.canPlay = false;
  }

}
