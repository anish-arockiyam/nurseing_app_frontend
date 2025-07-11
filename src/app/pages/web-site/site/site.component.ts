import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [],
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent {
  private loadedCssLinks: HTMLLinkElement[] = [];

  constructor(private router: Router) {
    this.loadCss();
  }

  //Load CSS
  loadCss(){
    const cssSources = [
      'assets/vendor/bootstrap/bootstrap.min.css',
      'assets/vendor/bootstrap-icons/font/bootstrap-icons.min.css',
      'assets/vendor/glightbox/glightbox.min.css',
      'assets/vendor/swiper/swiper-bundle.min.css',
      'assets/vendor/aos/aos.css',
      'assets/css/style.css'
    ];
  
    cssSources.forEach(src => {
      this.loadedCssLinks.push(this.loadExternalCSS(src));
    });
  }

  loadExternalCSS(url: string): HTMLLinkElement {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    head.appendChild(link);
    return link;
  }

}
