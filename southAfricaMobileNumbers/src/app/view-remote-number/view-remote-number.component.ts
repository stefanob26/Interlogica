import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../../services/numbers.service';
import {Numbers} from '../../models/numbers';
import {environment} from '../../environments/environment';
import {ColumnMode} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-remote-number',
  templateUrl: './view-remote-number.component.html',
  styleUrls: ['./view-remote-number.component.scss']
})
export class ViewRemoteNumberComponent implements OnInit {

  allNumbers: Numbers[];
  preserveId = environment.preserveId;


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
    this.getAllNumbers();
  }

  getAllNumbers(): void {

    this.numbersService.getAllNumbers().subscribe(resp => {

      this.allNumbers = resp;
    }, error => {
      this.uploadErrorAlert = false;
      setTimeout(() => this.uploadErrorAlert = true, 1500);
    });

  }

  getAllFixedNumbers(): void {
    this.numbersService.getAllFixedNumbers().subscribe(resp => {
      this.allNumbers = resp;
    }, error => {
      this.uploadErrorAlert = false;
      setTimeout(() => this.uploadErrorAlert = true, 1500);
    });
  }


}
