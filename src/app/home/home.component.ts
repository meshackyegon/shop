import { Component, ViewChild } from '@angular/core';
import { NgImageSliderModule  } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  @ViewChild('slider')
  slider!: HomeComponent;
  imageObject: Array<object> = [
    {
      image: 'assets/11G31.jpg',
      thumbImage: 'assets/11G31.jpg',
      alt: 'alt of image',
      title: 'title of image'
    },
    {
      image: 'assets/11e_2.jpg', 
      thumbImage: 'assets/11e_2.jpg', 
      title: 'Image title',
      alt: 'Image alt', 
      order: 1 
    },
    {
      image: 'assets/430-G5.jpg', 
      thumbImage: 'assets/430-G5.jpg', 
      title: 'Image title',
      alt: 'Image alt', 
      order: 2
    },
    {
      image: 'assets/dell_7280.jpg', 
      thumbImage: 'assets/dell_7280.jpg', 
      title: 'Image title',
      alt: 'Image alt', 
      order: 3 
    }
  ];


  // prevImageClick() {
  //   if (this.slider) {
  //     this.slider.prev();
  //   }
  // }

  // nextImageClick() {
  //   if (this.slider) {
  //     this.slider.next();
  //   }
  // }

}
