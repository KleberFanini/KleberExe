import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: false,
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  stats = [
    { label: 'Nível', value: 'Junior Dev', icon: 'trophy' },
    { label: 'XP', value: '3500/5000', icon: 'star' },
    { label: 'Status', value: 'Learning', icon: 'zap' },
    { label: 'Class', value: 'Full Stack', icon: 'code-2' },
  ];

  skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Angular', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Java', level: 45 },
    { name: 'Git', level: 85 },
  ];
}
