import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-game-app'
  public menuStatus: boolean = false

  public setMenuStatus(status: boolean): void {
    console.log('$$$$$$$$$$$$', status);
    this.menuStatus = status
  }
}
