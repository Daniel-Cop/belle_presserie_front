import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  standalone: true,
  imports: [],
  templateUrl: './carousel-home.component.html',
  styleUrl: './carousel-home.component.css',
})
export class CarouselHomeComponent implements OnInit {
  imgs: string[] = [
    'https://images.unsplash.com/photo-1604335398980-ededcadcc37d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604335398557-3f39109c7b4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  i: number = 0;

  carouselTime: number = 5000;

  ngOnInit(): void {
    setInterval(() => {
      this.nextPic();
    }, this.carouselTime);
  }

  nextPic() {
    if (this.i === this.imgs.length - 1) {
      this.i = 0;
    } else {
      this.i++;
    }
  }
}
