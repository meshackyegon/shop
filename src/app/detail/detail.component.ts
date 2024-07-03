import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
interface Product {
  id: number;
  title: string;
  imageUrls: string[];
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  phoneNumber: string = '254751899324';
  message: string = 'Hello! I would like to inquire about this laptops';
  emailAddress: string = 'coniglioamber1@gmail.com';
  subject: string = 'Inquiry';
  body: string = 'Hello! I would like to inquire about...';
  openWhatsApp() {
    const url = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }
  openEmail() {
    const url = `mailto:${this.emailAddress}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    window.location.href = url;
  }
  products: Product[] = [
    { id: 1, title: 'Lenovo 11e 4gb 256 ssd', imageUrls: ['assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg' ] },
    // { id: 1, title: 'Lenovo 6th gen 8gb 256 ssd', imageUrls: ['assets/11G31.jpg', 'assets/11G31.jpg','assets/11G31.jpg',,'assets/11G31.jpg','assets/11G31.jpg'] },
    { id: 2, title: 'Lenovo 11e 4gb 256 ssd', imageUrls: ['assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg', 'assets/11e_2.jpg' ] },
    { id: 3, title: 'Hp 430 g2 8gb 256 ssd', imageUrls: ['assets/430-G5.jpg','assets/430-G5.jpg','assets/430-G5.jpg','assets/430-G5.jpg','assets/430-G5.jpg','assets/430-G5.jpg'] },
    { id: 4, title: 'Hp 840 6th gen 8gb 256 ssd', imageUrls: ['assets/840_g2_1.jpg', 'assets/840_g2_1.jpg','assets/840_g2_1.jpg','assets/840_g2_1.jpg','assets/840_g2_1.jpg'] },
    { id: 5, title: 'Dell 6th gen 8gb 256 ssd', imageUrls: ['assets/dell_7280.jpg','assets/dell_7280.jpg','assets/dell_7280.jpg','assets/dell_7280.jpg','assets/dell_7280.jpg','assets/dell_7280.jpg'] },
    { id: 6, title: 'HP 830 8gb 256 ssd', imageUrls: ['assets/830_G71.jpg', 'assets/830_G71.jpg','assets/830_G71.jpg','assets/830_G71.jpg','assets/830_G71.jpg','assets/830_G71.jpg','assets/830_G71.jpg'] },
    { id: 7, title: 'HP 1030 g3 8gb 256 ssd', imageUrls: ['assets/1030_g3_2.jpeg','assets/1030_g3_2.jpeg','assets/1030_g3_2.jpeg','assets/1030_g3_2.jpeg','assets/1030_g3_2.jpeg','assets/1030_g3_2.jpeg','assets/1030_g3_2.jpeg'] },
    { id: 8, title: 'Dell  7300 7th gen 8gb 256 ssd', imageUrls: ['assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg'] },
    { id: 9, title: 'HP  9th gen 8gb 256 ssd', imageUrls: ['assets/DRAGON_FLY 2.jpg', 'assets/DRAGON_FLY 2.jpg','assets/DRAGON_FLY 2.jpg','assets/DRAGON_FLY 2.jpg','assets/DRAGON_FLY 2.jpg','assets/DRAGON_FLY 2.jpg','assets/DRAGON_FLY 2.jpg'] },
    // { id: 10, title: 'Product 2', imageUrls: ['assets/images/product2-1.jpg', 'assets/images/product2-2.jpg'] },
    // { id: 11, title: 'Product 2', imageUrls: ['assets/images/product2-1.jpg', 'assets/images/product2-2.jpg'] },
    { id: 12, title: 'Dell  7300 7th gen 8gb 256 ssd', imageUrls: ['assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg','assets/dell 7300 2 in 1.jpg'] },
    { id: 10, title: 'Mackbook 13 Pro 8gb 256gb', imageUrls: ['assets/mackbook13_1.jpeg', 'assets/mackbook13_2.jpeg','assets/mackbook13_1.jpeg', 'assets/mackbook13_2.jpeg','assets/mackbook13_1.jpeg', 'assets/mackbook13_2.jpeg'] },
    { id: 11, title: 'Mackbook 13 Pro 8gb 256gb', imageUrls: ['assets/mackbook14_1.jpeg', 'assets/mackbook14_2.jpeg','assets/mackbook14_3.jpeg','assets/mackbook14_4.jpeg', 'assets/mackbook14_5.jpeg', 'assets/mackbook14_6.jpeg'] },
  ];
  selectedProductId: number | null = null;
  selectedProduct: Product | undefined;

  constructor(private route: ActivatedRoute) { }
  // selectedProductId: number = 14; // Set this dynamically as needed
  // selectedProduct: Product | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.selectedProductId = id ? +id : null;
      if (this.selectedProductId !== null) {
        this.loadProduct(this.selectedProductId);
      }
    });
  }

  loadProduct(productId: number) {
    this.selectedProduct = this.products.find(product => product.id === productId);
  }

}
