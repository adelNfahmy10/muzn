import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-offers',
  imports: [],
  templateUrl: './offers.html',
  styleUrl: './offers.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Offers {
  products = [
    {
      name: 'عبوة مياه 5 جالون',
      desc: 'مياه نقية محلاة بجودة عالية',
      price: 260,
      image: 'assets/home/big-water.png',
      qty: 1
    },
    {
      name: 'دفتر كوبونات مياه',
      desc: '25 كوبون إلكتروني + عبوتين مجاناً',
      price: 310,
      image: 'assets/home/big-water.png',
      qty: 1
    },
    {
      name: 'مياه معدنية 1.5 لتر × 12',
      desc: 'مياه نقية مناسبة لجميع الاستخدامات',
      price: 70,
      image: 'assets/home/big-water.png',
      qty: 1
    },
    {
      name: 'مياه معدنية 1.5 لتر × 12',
      desc: 'مياه نقية مناسبة لجميع الاستخدامات',
      price: 70,
      image: 'assets/home/big-water.png',
      qty: 1
    },
    {
      name: 'مياه معدنية 1.5 لتر × 12',
      desc: 'مياه نقية مناسبة لجميع الاستخدامات',
      price: 70,
      image: 'assets/home/big-water.png',
      qty: 1
    },
    {
      name: 'مياه معدنية 1.5 لتر × 12',
      desc: 'مياه نقية مناسبة لجميع الاستخدامات',
      price: 70,
      image: 'assets/home/big-water.png',
      qty: 1
    },
    {
      name: 'مياه معدنية 1.5 لتر × 12',
      desc: 'مياه نقية مناسبة لجميع الاستخدامات',
      price: 70,
      image: 'assets/home/big-water.png',
      qty: 1
    }
  ];

  increase(product: any) {
    product.qty++;
  }

  decrease(product: any) {
    if (product.qty > 1) product.qty--;
  }
}
