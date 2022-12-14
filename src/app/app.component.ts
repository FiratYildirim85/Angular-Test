import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['coding.jpg', 'computer.jpg', 'software.jpg'];
  currentImage = 0

  ngOnInit() {
    this.updateImage();

  }
  updateImage() {
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
    },8000)

  }
}
