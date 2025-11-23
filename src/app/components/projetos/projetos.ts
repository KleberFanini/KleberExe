import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
  images?: string[];
  currentIndex?: number;
  intervalId?: any;
}

@Component({
  selector: 'app-projetos',
  standalone: false,
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos implements OnInit, OnDestroy {

  projects: Project[] = [
    {
      title: 'GeekShop',
      description: 'Site com o objetivo de vender produtos de Trading Card Games (TCG) e realizar Ligas e Torneios.',
      tech: ['Angular', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/KleberFanini/GeekShop',
      demo: '#',
      gradient: 'from-primary to-secondary',
      images: ['/assets/Imagens/GeekShop/Tela-Home.png', '/assets/Imagens/GeekShop/Tela-Login.png', '/assets/Imagens/GeekShop/Tela-Catalogo.png', '/assets/Imagens/GeekShop/Tela-Ligas.png', '/assets/Imagens/GeekShop/Tela-Contato.png'],
      currentIndex: 0,
    },
    {
      title: 'MarcosEngenharia',
      description: 'Plataforma web da MarcosEngenharia, destacando serviços e projetos de engenharia com qualidade e precisão.',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Lucide'],
      github: 'https://github.com/KleberFanini/MarcosEngenharia',
      demo: '#',
      gradient: 'from-primary to-secondary',
      images: ['/assets/Imagens/MarcosEngenharia/Inicio.png', '/assets/Imagens/MarcosEngenharia/Portifólio.png', '/assets/Imagens/MarcosEngenharia/Projetos.png', '/assets/Imagens/MarcosEngenharia/Contato.png'],
      currentIndex: 0,
    },
    {
      title: 'Agendamento Psicológico',
      description: 'Uma Plataforma web, criada para pacientes agendarem por si próprios as consultas com a psicologa que desejar.',
      tech: ['Angular', 'TypeScript', 'Tailwind', 'Lucide'],
      github: 'https://github.com/KleberFanini/web-agendamento-psicologico',
      demo: '#',
      gradient: 'from-primary to-secondary',
      images: ['/assets/Imagens/Orange/inicio.png', '/assets/Imagens/Orange/sobre.png', '/assets/Imagens/Orange/agendar.png', '/assets/Imagens/Orange/perfil.png'],
      currentIndex: 0,
    }
  ];

  ngOnInit(): void {
    // Inicia autoplay por projeto
    this.projects.forEach(project => {
      if (project.images && project.images.length > 1) {
        project.currentIndex = 0;
        project.intervalId = setInterval(() => {
          project.currentIndex = ((project.currentIndex ?? 0) + 1) % project.images!.length;
        }, 3000);
      }
    });
  }

  ngOnDestroy(): void {
    this.projects.forEach(p => {
      if (p.intervalId) clearInterval(p.intervalId);
    });
  }
}
