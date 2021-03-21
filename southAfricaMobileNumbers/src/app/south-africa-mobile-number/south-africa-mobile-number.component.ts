import {environment} from '../../environments/environment';
import {Component, OnInit} from '@angular/core';

import * as Papa from 'papaparse';
import {NumbersService} from '../../services/numbers.service';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {Numbers} from '../../models/numbers';

@Component({
  selector: 'app-south-africa-mobile-number',
  templateUrl: './south-africa-mobile-number.component.html',
  styleUrls: ['./south-africa-mobile-number.component.scss'],
})
export class SouthAfricaMobileNumberComponent implements OnInit {
  name = 'Angular 5 csv file parser example';
  preserveId = environment.preserveId;
  dataList: any[];
  dataToShow: Numbers[];
  uploadSuccessAlert = true;
  uploadWarningAlert = true;
  uploadErrorAlert = true;

  columnMode = ColumnMode;

  columns = [
    {prop: 'id', summaryFunc: cells => null},
    {prop: 'number', name: 'Number', summaryFunc: cells => null},
    {prop: 'previous', summaryFunc: cells => null}
  ];

  constructor(private numbersService: NumbersService) {
  }

  ngOnInit(): void {
  }

  uploadValidNumbers(): void {
    if (this.dataList) {
      const numbers = this.dataList.filter(el =>
        el.number != null
      );

      this.numbersService.addNumbers(numbers).subscribe(resp => {
        if (numbers.length === resp.length) {
          this.uploadSuccessAlert = false;
          setTimeout(() => this.uploadSuccessAlert = true, 1500);
        }
      }, error => {
        this.uploadErrorAlert = false;
        setTimeout(() => this.uploadErrorAlert = true, 1500);
      });
    } else {
      this.uploadWarningAlert = false;
      setTimeout(() => this.uploadWarningAlert = true, 1500);
    }
  }

  viewFixedNumbers(): void {
    if (this.dataList) {
      this.dataToShow = this.dataList.filter(el => el.number && el.previous != null);
    }
  }

  viewAllValidNumbers(): void {
    if (this.dataList) {
      this.dataToShow = this.dataList.filter(el => el.number != null);
    }
  }

  viewAllNotValidNumbers(): void {
    if (this.dataList) {
      this.dataToShow = this.dataList.filter(el => el.number == null);
    }
  }

  viewAllRecords(): void {
    if (this.dataList) {
      this.dataToShow = this.dataList;
    }
  }

  onChange(files: FileList): void {
    if (files[0]) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result, file) => {
          this.dataList = result.data;
          this.dataList = this.dataList
            .map((el) => {
              const previous = el.sms_phone;
              el.sms_phone = el.sms_phone.replace(/\D/g, '');
              el.sms_phone = el.sms_phone.slice(
                el.sms_phone.indexOf('278'),
                el.sms_phone.indexOf('278') + 11
              );

              if (previous !== el.sms_phone) {
                el.previous = previous;
              }

              if (!environment.preserveId) {
                delete el.id;
                return el;
              }

              if (el.sms_phone < 9999999999 || el.sms_phone > 27899999999) {
                el.sms_phone = null;
              }

              el.number = el.sms_phone;
              delete el.sms_phone;

              return el;
            });

          this.dataToShow = this.dataList;
        },
      });
    }
  }
}
