import {Component, OnInit} from '@angular/core';
import {Sweet} from '../../../models/sweet';
import {SweetService} from '../../../services/sweet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remove-sweet',
  templateUrl: './remove-sweet.component.html',
  styleUrls: ['./remove-sweet.component.scss']
})
export class RemoveSweetComponent implements OnInit {

  sweets: Sweet[];

  constructor(private sweetService: SweetService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllSweet();
  }

  getAllSweet() {
    this.sweetService.getAll().subscribe((sweets) => {
      this.sweets = sweets;
      console.log(sweets)
    });
  }

  removeSweet(sweet: Sweet) {
    this.sweetService.soldSweet(sweet.id).subscribe(resp => {

      if (resp.sold) {
        this.getAllSweet();
      }

    });
  }

}
