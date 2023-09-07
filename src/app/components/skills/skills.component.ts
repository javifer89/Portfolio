import { Component } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[];


  // TODO REVISAR DESCRIPCIÓN SKILLS
  constructor() {
    this.skills = [
      {
        img: '../../../assets/html-css-icons2.png',
        title: 'HTML/CSS',
        description: '',
      },
            {
        img: '../../../assets/logo-javascript.png',
        title: 'JavaScript',
        description: '',
      },
      {
        img: '../../../assets/typescript2034.jpg',
        title: 'TypeScript',
        description: '',
      },
      {
        img: '../../../assets/angular-icon-1-logo-png-transparent.png',
        title: 'Angular',
        description: '',
      },
      {
        img: '../../../assets/th.png',
        title: 'NodeJS',
        description: '',
      },
      {
        img: '../../../assets/nestjs-icon-2048x2040-3rrvcej8.png',
        title: 'NestJS',
        description: '',
      },
      {
        img: '../../../assets/Python-logo-notext.svg.png',
        title: 'Python',
        description: '',
      },
      // {
      //   img: '../../../assets/PHP-logo.svg.png',
      //   title: 'PHP',
      //   description: '',
      // },
      // {
      //   img: '../../../assets/1280px-Laravel.svg.png',
      //   title: 'Laravel',
      //   description: '',
      // },
      {
        img: '../../../assets/mysql_logo-705x705.png',
        title: 'MySQL',
        description: '',
      },
      {
        img: '../../../assets/MongoDB_Logo.svg.png',
        title: 'MongoDB',
        description: '',
      },
    ];
  }
}
