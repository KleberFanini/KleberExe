import { Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

@Component({
  selector: 'app-particles-background',
  standalone: false,
  templateUrl: './particles-background.html',
  styleUrl: './particles-background.css',
})
export class ParticlesBackground implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number | null = null;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  @HostListener('window:resize')
  onResize() {
    this.initCanvas();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createParticles() {
    const canvas = this.canvasRef.nativeElement;
    const particlesCount = 100;
    this.particles = [];

    for (let i = 0; i < particlesCount; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualiza e desenha partículas
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 243, 255, ${p.opacity})`;
      this.ctx.fill();
    })

    // Desenha as conexões
    // for (let i = 0; i < this.particles.length; i++) {
    //   for (let j = i + 1; j < this.particles.length; j++) {
    //     const p1 = this.particles[i];
    //     const p2 = this.particles[j];
    //     const dx = p1.x - p2.x;
    //     const dy = p1.y - p2.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance < 100) {
    //        this.ctx.beginPath();
    //       this.ctx.strokeStyle = `rgba(0, 243, 255, ${0.15 * (1 - distance / 120)})`;
    //       this.ctx.lineWidth = 0.5;
    //       this.ctx.moveTo(p1.x, p1.y);
    //       this.ctx.lineTo(p2.x, p2.y);
    //       this.ctx.stroke();
    //     }
    //   }
    // }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

}
