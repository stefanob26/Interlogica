import { SweetService } from './../../services/sweet.service';
import { Component, OnInit } from '@angular/core';
import { Sweet } from 'src/models/sweet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sweet-show-grid',
  templateUrl: './sweet-show-grid.component.html',
  styleUrls: ['./sweet-show-grid.component.scss'],
})
export class SweetShowGridComponent implements OnInit {
  sweets: Sweet[];

  constructor(private sweetService: SweetService, private router: Router) {}

  ngOnInit(): void {
    this.sweetService.getAllSoldable().subscribe((sweets) => {
      this.sweets = sweets;

      console.log(sweets);
    });
  }

  viewSweet(sweet: Sweet) {
    this.router.navigate(['sweet', { sweet: JSON.stringify(sweet) }]);
  }
}
