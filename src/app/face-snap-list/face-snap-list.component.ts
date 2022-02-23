import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../Models/facesnap.model';
import { FaceSnapsService } from '../Services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  facesnaps !: Facesnap [];
  
  constructor(private faceSnapsServices:FaceSnapsService) { }

  ngOnInit() {
     this.facesnaps = this.faceSnapsServices.getAllFaceSnaps();
  }

}
