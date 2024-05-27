import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/project-card/project-card.component';
import { PROJECTS, Project } from '../../../data/project-data';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

projects: Project[] = PROJECTS;

}
