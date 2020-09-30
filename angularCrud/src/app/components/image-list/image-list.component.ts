import { Component, OnInit } from '@angular/core';

import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  constructor(private imagesService:ImagesService) {

  }

  ngOnInit(){
    this.imagesService.getImages().subscribe(
      res => console.log(res), err=> console.error(err)
    )
  }
}
