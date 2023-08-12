import { Component } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[];

  constructor() {
    this.skills = [
      {
        img: '',
        title: 'HTML/CSS/BOOTSTRAP',
        description: '',
      },
      {
        img: '',
        title: 'JavaScript',
        description: '',
      },
      {
        img: '',
        title: 'TypeScript',
        description: '',
      },
      {
        img: '',
        title: 'Angular16',
        description: '',
      },
      {
        img: '',
        title: 'Node.js + Express',
        description: '',
      },
      {
        img: '',
        title: 'Python',
        description: 'Automatización IT con Python',
      },
      {
        img: '',
        title: 'MySQL',
        description: '',
      },
      {
        img: '',
        title: 'MongoDB',
        description: '',
      },
    ];
  }
}
