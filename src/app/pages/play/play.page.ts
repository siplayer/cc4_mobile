import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import * as $ from "jquery";

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
   answers:any = 0;
   randquestion:any = '';
   question:string = '';
   myQuestion = [{'id':3,'text' :'Combien de personnes dans le monde connaissent le secret de Marlboro ?'},
                     {'id':1000,'text' :'Combien de vérifications le paquet Marlboro doit passer pour être validé ?'},
                     {'id':5 ,'text': 'Combien de variétés Marlboro existe-t-il  au Maroc ?'},
                     {'id':150 ,'text': 'Dans combien de pays Marlboro est savouré ?'}];

  constructor(private navCtrl: NavController) { 
    
   }
 
  shuffle(a) {
    var rand = a[Math.floor(Math.random() * a.length)];
    return rand;
  }
  ngOnInit() {

    this.randquestion = this.shuffle(this.myQuestion);
    localStorage.setItem('bonnus', this.randquestion.id);
    this.question = this.randquestion.text;
    this.answers = this.randquestion.id;
    

   }

  Compte(){
    this.navCtrl.navigateRoot('/compte');
  }

  showAnswer(){
    $("#interactUser span").show(600);
     setTimeout( () => {
      this.Compte()
    }, 2000);
  }

}
