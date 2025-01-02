import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, search: string): SafeHtml {
    if (!search) {
      return value;
    }
    const regex = new RegExp(`(${search})`, 'gi');
    const highlightedText = value.replace(
      regex,
      '<span class="highlight">$1</span>'
    );
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
