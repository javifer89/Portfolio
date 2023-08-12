import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/interfaces/menuItem.interface';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  router: Router = inject(Router);

  menuItems: MenuItem[] = [
    {
      title: 'Inicio',
      routes: ['/home'],
    },
    {
      title: 'Sobre mí',
      routes: ['/about'],
    },
    {
      title: 'Proyectos',
      routes: ['/projects'],
    },
    {
      title: 'Contacto',
      routes: ['/contact'],
    },
    {
      title: 'Sobre mí',
      routes: ['/about'],
    },
  ];
}
