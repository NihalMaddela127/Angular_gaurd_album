import { Component, OnInit } from '@angular/core';
import { ImageService } from './urlservice.service'
import { Iphotos } from './servicemodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serviceurl',
  templateUrl: './serviceurl.component.html',
  styleUrls: ['./serviceurl.component.css'],
})
export class ServiceurlComponent implements OnInit {
  start : number;
  limit : number;
  imageList: Iphotos[];
  currenturl : string;

  constructor(private _imageService: ImageService) {
    this.start = 0;
    this.limit = 10;
    
  }
  updateLimit(val){
    this.start=0;
    this.limit=val;
    this.display();
  }
  currentImage(currenturl){
    this.currenturl=currenturl;
  }
  display(){
    this._imageService.imageFunction(this.start, this.limit).subscribe((res:Iphotos[]) =>{
      this.imageList = res;
    });
   }
  ngOnInit() {
    this.display();    
 }

}
