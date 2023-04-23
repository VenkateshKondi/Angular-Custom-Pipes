import { AfterContentInit, Directive, ElementRef, HostBinding, Input, OnChanges, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnChanges, AfterContentInit {

  @Input("appHighLight") searchTerm!: string;
  @Input() caseSensitive = false;
  @HostBinding("innerHtml")
  content!: string;

  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }
  ngOnChanges() {
    this.highLightText();
  }

  ngAfterContentInit() {
    this.highLightText();
  }

  private highLightText() {
    const text = (this.el.nativeElement as HTMLElement).textContent!;
    if (text && this.searchTerm !== "") {
      if (this.searchTerm === "") {
        this.content = text;
      } else {
        const regex = new RegExp(
          this.searchTerm,
          this.caseSensitive ? "g" : "gi"
        );
        const newText = text!.replace(regex, (match: string) => {
          return `<mark class="highlight">${match}</mark>`;
        });
        const sanitzed = this.sanitizer.sanitize(
          SecurityContext.HTML,
          newText
        )!;
        this.content = sanitzed;
      }
    }
    else{
      this.content = text;
    }
  }
}