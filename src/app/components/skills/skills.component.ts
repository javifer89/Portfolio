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
        img: '../../../assets/html-css-icons.png',
        title: 'HTML/CSS',
        description: '',
      },
      {
        img: '../../../assets/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67.png',
        title: 'Bootstrap',
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
        title: 'Angular16',
        description: '',
      },
      {
        img: '../../../assets/th.jpg',
        title: 'Node.js',
        description: '',
      },
      {
        img: '../../../assets/Python-logo-notext.svg.png',
        title: 'Python',
        description: 'Automatización IT con Python',
      },
      {
        img: '../../../assets/PHP-logo.svg.png',
        title: 'PHP',
        description: '',
      },
      {
        img: '../../../assets/1280px-Laravel.svg.png',
        title: 'Laravel',
        description: '',
      },
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
