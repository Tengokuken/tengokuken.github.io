import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Johnson\'s Portfolio Website';
  title = 'test';
  // TODO: Move these functions into a service.
  // When the user scrolls down 20px from the top of the document, show the button
  @HostListener('window:scroll') onScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('return_to_top').style.display = 'block';
    } else {
      document.getElementById('return_to_top').style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
