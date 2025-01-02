import { Component } from '@angular/core';
import { ImageToTextComponent } from './components/image-to-text/image-to-text.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [ImageToTextComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
