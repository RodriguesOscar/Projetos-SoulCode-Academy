import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public btnCarousel(fragment: string): void{
    this.router.navigateByUrl('/home#' + fragment)
  }

}
