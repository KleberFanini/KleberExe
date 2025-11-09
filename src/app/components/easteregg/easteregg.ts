import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-easteregg',
  standalone: false,
  templateUrl: './easteregg.html',
  styleUrl: './easteregg.css',
})
export class Easteregg {
  isVisible = false;
  input = '';
  output: string[] = [];

   // Atalho: Ctrl + Shift + K
  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === 'K') {
      event.preventDefault();
      this.isVisible = !this.isVisible;
    }
  }

   handleCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();
    let response = '';

    switch (trimmed) {
      case 'help':
        response = 'Comandos disponíveis: help, about, skills, projects, clear, exit';
        break;
      case 'about':
        response = 'Kazuto.exe v1.0.0 - Software Engineer Portfolio System';
        break;
      case 'skills':
        response = 'React | Angular | TypeScript | Node.js | Python | Git | Docker';
        break;
      case 'projects':
        response = "6 projetos carregados. Use 'scroll projects' para ver.";
        break;
      case 'clear':
        this.output = [];
        return;
      case 'exit':
        this.isVisible = false;
        return;
      case '':
        return;
      default:
        response = `Comando não reconhecido: ${trimmed}. Digite 'help' para ver os comandos.`;
    }

    this.output.push(`> ${cmd}`, response);
    this.input = '';
  }
}
