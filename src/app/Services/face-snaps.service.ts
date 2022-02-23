import { Injectable } from '@angular/core';
import { Facesnap } from '../Models/facesnap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  facesnaps : Facesnap[] = [

      {
       id : 1,
       title: 'Archibald',
       description: 'Mon meilleur ami depuis tout petit !',
       imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       createdDate: new Date(),
       snaps: 150

      },
      {

      id : 2,  
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 5,
      location : 'paris'

      }
    ]

    getAllFaceSnaps (): Facesnap [] {
       return this.facesnaps;
    }

    getFaceSnapById (faceSnapId : number):Facesnap{
      const facesnap = this.facesnaps.find(facesnap => facesnap.id === faceSnapId);
      if(!facesnap){
         throw new Error('faceSnap not found');   
      } else {
        return facesnap;
      }
    }
    
    SnapFaceSnapById (faceSnapId : number , SnapType :'snap' | 'unsnap'): void{
      const facesnap = this.getFaceSnapById(faceSnapId);
      SnapType === 'snap' ? facesnap.snaps ++ : facesnap.snaps -- ;   
    }
    
    
}