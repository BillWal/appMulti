import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appMulti';

  feed = {
          id:"1",
          name:"Eerie rock that appears to mysteriously float",
          image:'assets/IMG_0602.jpg',
          alt:'Coastal image with a rock that appears to mysteriously Float on the sea.'
        }

  feed2 = {
    id:"2",
    name:"Eerie rock that appears to mysteriously float",
    image:'assets/IMG_0603.jpg',
    alt:'Coastal image with a rock that appears to mysteriously Float on the sea.'
  }

  feed3 = {
    id:"3",
    name:"Eerie rock that appears to mysteriously float",
    image:'assets/IMG_0604.jpeg',
    alt:'Coastal image with a rock that appears to mysteriously Float on the sea.'
  }

  feed4 = {
    id:"4",
    name:"Eerie rock that appears to mysteriously float",
    image:'assets/IMG_0605.jpg',
    alt:'Coastal image with a rock that appears to mysteriously Float on the sea.'
  }

}
