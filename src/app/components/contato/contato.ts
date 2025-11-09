import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  contato = [
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/KleberFanini',
      color: 'text-[#00e1ff]',
      glow: 'glow-cyan',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://linkedin.com/in/kleberfanini',
      color: 'text-[#ff66ff]',
      glow: 'glow-purple',
    },
    {
      name: 'Email',
      icon: 'mail',
      link: 'mailto:kleberdev97@gmail.com',
      color: 'text-[#00ff00]',
      glow: 'glow-green',
    },
  ];
}
