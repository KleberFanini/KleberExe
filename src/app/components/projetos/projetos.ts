import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: false,
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  projects = [
    {
      title: 'GeekShop',
      description: 'Site com o objetivo de vender produtos de Trading Card Games (TCG) e realizar Ligas e Torneios.',
      tech: ['Angular', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/KleberFanini/GeekShop',
      demo: '#',
      gradient: 'from-primary to-secondary',
    },
    
  ];
}
