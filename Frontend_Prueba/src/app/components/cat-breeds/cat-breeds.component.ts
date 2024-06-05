import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';

@Component({
  selector: 'app-cat-breeds',
  templateUrl: './cat-breeds.component.html',
  styleUrls: ['./cat-breeds.component.css']
})
export class CatBreedsComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: any;

  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.catApiService.getBreeds().subscribe(data => {
      this.breeds = data;
    });
  }

  onBreedSelect(breedId: string): void {
    this.catApiService.getBreedById(breedId).subscribe(data => {
      this.selectedBreed = data;
    });
  }
}
