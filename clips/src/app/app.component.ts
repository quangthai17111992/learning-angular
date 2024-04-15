import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  //template: `<p> Hello  work</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent{
  name = 'thai hoang'
  imgURL = 'https://picsum.photos/id/237/500/500'
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: [
      'pepperoni', 'bacon'
    ],
    size: 'large'
  }
  blueClass = false
  fontSize = 16

  getName() {
    return this.name
  }
  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event)
  }
}
