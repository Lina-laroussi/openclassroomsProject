import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facesnap } from '../Models/facesnap.model';
import { FaceSnapsService } from '../Services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() facesnap !: Facesnap;
  ButtonText!:string;
  constructor( private faceSnapsService: FaceSnapsService,
                private route:ActivatedRoute ){

  }

  ngOnInit() {
  this.ButtonText = 'on snap !';
  const snapId = +this.route.snapshot.params['id'];
  this.facesnap = this.faceSnapsService.getFaceSnapById(snapId);
}

onsnap(){
    if ( this.ButtonText =='on snap!' ){
         this.faceSnapsService.SnapFaceSnapById(this.facesnap.id , 'snap');
         this.ButtonText = 'oops ,unsnap' ;

   } else {
     this.faceSnapsService.SnapFaceSnapById(this.facesnap.id , 'unsnap');
     this.ButtonText = 'on snap!';
   }
  }


}
