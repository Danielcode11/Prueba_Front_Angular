import { Component, Input, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';

@Component({
  selector: 'app-cat-carousel',
  templateUrl: './cat-carousel.component.html',
  styleUrls: ['./cat-carousel.component.css']
})
export class CatCarouselComponent implements OnInit {
  @Input() breed: any;
  images: any[] = [];

  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.catApiService.getImagesByBreedId(this.breed.id).subscribe(data => {
      this.images = data;
    });
  }
}

