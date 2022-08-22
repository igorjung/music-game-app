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
    this.dialog.open(DialogComponent, {
      data: {
        title: 'ABOUT',
        content: `This is a game for Marvel fans! Inspired by, and, Each day a new character is picked from, Marvel's API. It is quite simple to play it. Guess the character name using just the blurred picture. If you guess it wrong, the picture becomes clearer. All rights go to the rightful owners - no copyright infringement intended.`
      }
    });
  }
}
