import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-sweet',
  templateUrl: './add-sweet.component.html',
  styleUrls: ['./add-sweet.component.scss'],
})
export class AddSweetComponent implements OnInit {
  files: File[] = [];

  ingredientsQty = 1;

  newRequestForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    ingredientsList: new FormArray([]),
  });

  get ingredientsListForm() {
    return this.newRequestForm.controls.ingredientsList as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ingredientsListFormChange();
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  addSweet() {}

  addIngredients() {
    this.ingredientsQty++;
    this.ingredientsListFormChange();
  }

  removeIngredients() {
    this.ingredientsQty--;
    this.ingredientsListFormChange();
  }

  ingredientsListFormChange() {
    if (this.ingredientsQty < this.ingredientsListForm.length) {
      for (
        let i = this.ingredientsListForm.length;
        i >= this.ingredientsQty;
        i--
      ) {
        this.ingredientsListForm.removeAt(i);
      }
    } else {
      for (
        let i = this.ingredientsListForm.length;
        i < this.ingredientsQty;
        i++
      ) {
        this.ingredientsListForm.push(
          this.formBuilder.group({
            name: ['', [Validators.required]],
            qty: [0, [Validators.required]],
            unit: ['', [Validators.required]],
          })
        );
      }
    }
  }
}
