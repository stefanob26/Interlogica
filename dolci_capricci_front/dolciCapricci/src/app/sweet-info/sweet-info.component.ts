import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sweet } from 'src/models/sweet';

@Component({
  selector: 'app-sweet-info',
  templateUrl: './sweet-info.component.html',
  styleUrls: ['./sweet-info.component.scss'],
})
export class SweetInfoComponent implements OnInit {
  sweet: Sweet;
  ingredientsList: { name: string; qty: number; unit: string }[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.sweet = JSON.parse(
      this.activatedRoute.snapshot.paramMap.get('sweet')
    ) as Sweet;

    for (const key in this.sweet.ingredients) {
      this.ingredientsList.push({
        name: key,
        qty: this.sweet.ingredients[key].qty,
        unit: this.sweet.ingredients[key].unit,
      });
    }
  }
}
