import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';

@Component({
  selector: 'app-cat-table',
  templateUrl: './cat-table.component.html',
  styleUrls: ['./cat-table.component.css']
})
export class CatTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'origin', 'temperament'];
  dataSource: any[] = [];

  constructor(private catApiService: CatApiService) {}

  ngOnInit(): void {
    this.catApiService.getBreeds().subscribe(data => {
      this.dataSource = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = this.dataSource.filter(breed => breed.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
