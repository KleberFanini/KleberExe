import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { LucideAngularModule, File, House, Menu, UserCheck, Terminal, ChevronDown, Trophy, Star, Zap, Code2, Github, Linkedin , Mail, ExternalLink } from 'lucide-angular';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Index } from './pages/index/index';
import { Navbar } from './components/navbar/navbar';
import { ParticlesBackground } from './components/particles-background/particles-background';
import { Sobre } from './components/sobre/sobre';
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contato/contato';
import { Easteregg } from './components/easteregg/easteregg';
import { Header } from './components/header/header';

@NgModule({
  declarations: [
    App,
    Index,
    Navbar,
    ParticlesBackground,
    Sobre,
    Projetos,
    Contato,
    Easteregg,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ File, House, Menu, UserCheck, Terminal, ChevronDown, Trophy, Star, Zap, Code2, Github, Linkedin , Mail, ExternalLink }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
