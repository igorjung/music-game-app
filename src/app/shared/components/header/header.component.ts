import { Component, EventEmitter, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() openMenuEvent = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('&&&&&&')
    this.dialog.open(DialogComponent, {
      data: 'Texto',
    });
  }
}
