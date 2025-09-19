import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      This site is owned by जिल्हा परिषद यवतमाळ <br />
      Developed & Maintained by
      <a href="https://settribe.com/" class="dev-link"><u>SETTribe</u></a>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        text-align: center;
        padding: 15px;
        font-size: 0.8em;
        background-color: #000000;
        color: #ffffff;
      }

      .dev-link {
        color: #87ceeb;
        text-decoration: none;
        font-weight: bold;
      }
    `,
  ],
})
export class FooterComponent {
  // You can add footer-specific methods or properties here if needed
}
