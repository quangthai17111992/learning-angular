import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  //template: `<p> Hello  work</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles:['']
})

export class AppComponent{
  name = 'Thai'

  getName() {
    return this.name
  }
}
