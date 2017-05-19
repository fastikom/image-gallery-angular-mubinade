import { Injectable } from '@angular/core';
import {Image} from '../models/image';

@Injectable()
export class ImageService {

  images: Image[] = [
    new Image('1', 'Matahari Terbit', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img7.jpg', 'https://angularbooks.com/img/angular4/img7-l.jpg'),
    new Image('2', 'Handphone tertutup Matahari', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img3.jpg', 'https://angularbooks.com/img/angular4/img3-l.jpg'),
    new Image('3', 'Merenung di atas awan', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img4.jpg', 'https://angularbooks.com/img/angular4/img4-l.jpg'),
    new Image('4', 'Serangga Menggantung', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img1.jpg', 'https://angularbooks.com/img/angular4/img1-l.jpg'),
    new Image('5', 'Rumput Basah di Pagi Hari', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img5.jpg', 'https://angularbooks.com/img/angular4/img5-l.jpg'),
    new Image('6', 'Jembatan Kebenaran', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img2.jpg', 'https://angularbooks.com/img/angular4/img2-l.jpg'),
    new Image('7', 'Perspektif dari Bawah', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img8.jpg', 'https://angularbooks.com/img/angular4/img8-l.jpg'),
    new Image('8', 'Gajah Berjalan tanpa Arah', 'tidak ada deskripsi', 'https://angularbooks.com/img/angular4/img6.jpg', 'https://angularbooks.com/img/angular4/img6-l.jpg'),
  ];

  constructor() { }

  getImages() {
    return this.images;
  }
}