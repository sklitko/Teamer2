import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.css']
})
export class AreYouSureComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AreYouSureComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }



}



