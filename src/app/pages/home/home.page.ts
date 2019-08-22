import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  role:any = localStorage.getItem('role');
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  clickedStart(){

    if(this.role ==1){
      this.router.navigate(['gagnant']);
    }else{
      this.router.navigate(['start']);
    }
    
    return false;
  }
}
