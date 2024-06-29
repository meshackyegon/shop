import { Injectable } from '@angular/core';
import { shopList } from  './showDetails';

@Injectable({
  providedIn: 'root'
})
export class showService {
  readonly baseUrl = './assets/';

  protected shopLists: shopList[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 4,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      price: 1000,
      description: 'mesh',
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      price: 1000,
      description: 'mesh',
    }
  ];

  getAllSales(): shopList[] {
    return this.shopLists;
  }

  getHousingSaleById(id: number):  shopList | undefined {
    return this.shopLists.find(shopList => shopList.id === id);
  }
}
