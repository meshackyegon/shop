import { Component, ViewChild } from '@angular/core';
import { NgImageSliderModule  } from 'ng-image-slider';
import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';
import { Router,ActivatedRoute } from '@angular/router';

interface Image {
  id: number;
  image: string;
  thumbImage: string;
  alt: string;
  title: string;
  price: number;
  pieces: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgImageSliderModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  @ViewChild('slider')
  slider!: HomeComponent;
  imageObject: Image[] = [
    {
      id: 1,
      image: 'assets/11G31.jpg',
      thumbImage: 'assets/11G31.jpg',
      alt: 'Lenovo 6th gen 8gb 256 ssd',
      price: 200,
      title: 'title of image',
      pieces: 22
    },
    {
      id: 2,
      image: 'assets/11e_2.jpg', 
      thumbImage: 'assets/11e_2.jpg', 
      title: 'Lenovo 11e 4gb 256 ssd',
      price: 120,
      alt: 'Image alt',
      pieces: 9
    },
    {
      id: 3,
      image: 'assets/430-G5.jpg', 
      thumbImage: 'assets/430-G5.jpg', 
      title: 'Hp 430 g2 8gb 256 ssd',
      price: 220,
      alt: 'Image alt',
      pieces: 19
    },
    {
      id: 4,
      image: 'assets/840_g2_1.jpg', 
      thumbImage: 'assets/840_g2_1.jpg', 
      title: 'Hp 840 6th gen 8gb 256 ssd',
      price: 240,
      alt: 'HP 840 G2 8gb 256 ssd',
      pieces: 30
    }, 
    {
      id: 5,
      image: 'assets/dell_7280.jpg', 
      thumbImage: 'assets/dell_7280.jpg', 
      title: 'Dell 6th gen 8gb 256 ssd',
      price: 240,
      alt: 'Image alt',
      pieces: 21
    }, {
      id: 6,
      image: 'assets/830_G71.jpg', 
      thumbImage: 'assets/830_G71.jpg', 
      title: 'HP 830 8gb 256 ssd',
      price: 230,
      alt: 'Image alt',
      pieces: 16
    }, {
      id: 7,
      image: 'assets/1030_g3_2.jpeg', 
      thumbImage: 'assets/1030_g3_2.jpeg', 
      title: 'HP 1030 g3 8gb 256 ssd',
      price: 300,
      alt: 'Image alt',
      pieces: 41
    },
    {
      id: 8,
      image: 'assets/dell 7300 2 in 1.jpg', 
      thumbImage: 'assets/dell 7300 2 in 1.jpg', 
      title: 'Dell  7300 7th gen 8gb 256 ssd',
      price: 280,
      alt: 'Image alt',
      pieces: 17
    },
    {
      id: 9,
      image: 'assets/DRAGON_FLY 2.jpg', 
      thumbImage: 'assets/DRAGON_FLY 2.jpg', 
      title: 'HP  9th gen 8gb 256 ssd',
      price: 350,
      alt: 'Image alt',
      pieces: 17
    }, 
    {
      id: 10,
      image: 'assets/mackbook13.jpeg', 
      thumbImage: 'assets/mackbook13.jpeg', 
      title: 'Macbook 13 7th gen 8gb 256 ssd',
      price: 300,
      alt: 'Image alt',
      pieces: 12
    },
    {
      id: 11,
      image: 'assets/mackbook14.jpeg', 
      thumbImage: 'assets/mackbook13.jpeg', 
      title: 'Macbook 14 7th gen 8gb 256 ssd',
      price: 500,
      alt: 'Image alt',
      pieces: 10
    }

  ];
  constructor(private router: Router) {}

  navigateToDetail(imageId: number) {
    this.router.navigate(['/products',imageId]);
  }

}
