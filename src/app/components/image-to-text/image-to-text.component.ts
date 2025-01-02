import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Tesseract from 'tesseract.js';
import { HighlightPipe } from '../../pipes/highlight.pipe';

@Component({
  selector: 'app-image-to-text',
  imports: [FormsModule, HighlightPipe],
  templateUrl: './image-to-text.component.html',
  styleUrl: './image-to-text.component.scss'
})
export class ImageToTextComponent {
  extractedText: string = '';
  loading: boolean = false;
  searchText = '';
  searchResult = '';
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageData = reader.result as string;
        this.performOCR(imageData);
      };

      reader.readAsDataURL(file); // Convert image to Base64 format
    }
  }

  performOCR(imageData: string): void {
    this.loading = true;

    Tesseract.recognize(
      imageData, // Base64 image data
    )
      .then(({ data: { text } }) => {
        this.extractedText = this.removeAngleBrackets(text); // Extracted text
        this.loading = false;
      })
      .catch((err) => {
        console.error('OCR Error:', err);
        this.loading = false;
      });
  }

  search() {
    if (this.extractedText.toUpperCase().includes(this.searchText.toUpperCase())) {
      this.searchResult = 'Text "' + this.searchText + '"' + 'exists. Occurences :' + this.countNumberOfOccurences();
    } else {
      this.searchResult = "Not exist"
    }
  }

  countNumberOfOccurences() {
    const regex = new RegExp(this.searchText.toUpperCase(), "g");
    const count = (this.extractedText.toUpperCase().match(regex) || []).length;
    return count;
  }

  removeAngleBrackets(text: string): string {
    return text.replace(/[<>]/g, ' ');  // Removes both < and > characters
  }
}
