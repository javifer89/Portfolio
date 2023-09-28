import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[];
  imagenes: GridImg[] = [];

  constructor() {
    this.projects = [
      {
        img: '../../../assets/hamburgueseria-card.png',
        title: "Hamburguesería Rover's ",
        description: 'Proyecto de HTML/CSS para una Hamburguesería',
        url: '',
        project_url:'https://github.com/javifer89/hamburgueseria_Rover-s'
      },
      {
        img: '../../../assets/Todo-card.png',
        title: 'ToDo App - Gestor de tareas',
        description:
          'Aplicación web para gestión de tareas con HTML/CSS Y JavaScript',
        url: '',
        project_url:'https://github.com/javifer89/app-TODO'
      },
      {
        img: '../../../assets/blog-card.png',
        title: 'Blog Id-Bootcamps',
        description:
          'Blog para integrar en una página web, con funcionalidad de filtrado por categorías. Angular, html y css.',
        url: '',
        project_url:'https://github.com/javifer89/blog_idbootcamp'
      },
      {
        img: '../../../assets/EVENTIA-card.png',
        title: 'Eventia - gestor cultural',
        description:
          'Proyecto fullstack con Angular y Node.js para la creación de un Gestor de espacios culturales',
        url: '',
        project_url:'https://github.com/javifer89/Eventia_front'
        // TODO AÑADIR ENLACE A LA APP DESPLEGADA
      },
      {
        img: '../../../assets/fresaikiwi-card.png',
        title: 'Fresaikiwi Fotografia',
        description:
          'Proyecto fullstack con Angular y Node.js para la creación de una página web de un estudio fotográfico',
        url: 'https://fresaikiwifotografia.com',
        project_url:'https://github.com/javifer89/fresaikiwi_front'
        // TODO AÑADIR ENLACE A LA APP DESPLEGADA
      },
    ];
  }
}
interface GridImg {
  src: string;
  alt: string;
}
