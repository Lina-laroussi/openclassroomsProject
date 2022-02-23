import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.scss']
})
export class LandigPageComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(){
    
 }

 OnContinue() {
       this.router.navigateByUrl('facesnaps');
    }

}
