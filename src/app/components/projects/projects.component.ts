import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[]


// TODO SACAR CAPTURAS DE LOS PROYECTOS
  constructor() {
    this.projects = [
      {
        img: '',
        title: 'Hamburguesería',
        description: 'Proyecto de HTML/CSS para una Hamburguesería',
        url: '',
      },
      {
        img: '',
        title: 'Gestor de tareas',
        description:
          'Aplicación web para gestión de tareas con HTML/CSS Y JavaScript',
        url: '',
      },
      {
        img: '',
        title: 'Blog',
        description:
          'Blog para integrar en una página web, con funcionalidad de filtrado por categorías. Angular, html y css.',
        url: '',
      },
      {
        img: '',
        title: 'Eventia - gestor cultural',
        description:
          'Proyecto fullstack con Angular y Node.js para la creación de un Gestor de espacios culturales',
        url: '',
      },
      {
        img: '',
        title: 'Fresaikiwi Fotografia',
        description:
          'Proyecto fullstack con Angular y Node.js para la creación de una página web de un estudio fotográfico',
        url: '',
      },
    ];
}





}
