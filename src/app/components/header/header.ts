import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  displayText = '';
  showCursor = true;
  private fullText = '> Hello, World! Eu sou Kleber Fanini!';
  private typingIntervalId?: any;
  private cursorIntervalId?: any;

  ngOnInit() {
    let index = 0;

    // Efeito de Digitação
    this.typingIntervalId = setInterval(() => {
      if (index < this.fullText.length) {
        this.displayText += this.fullText[index];
        index++;
      } else {
        clearInterval(this.typingIntervalId);
      }
    }, 100);

    // Piscar do cursor
    this.cursorIntervalId = setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 530);
  }

  ngOnDestroy() {
    clearInterval(this.typingIntervalId);
    clearInterval(this.cursorIntervalId);
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
