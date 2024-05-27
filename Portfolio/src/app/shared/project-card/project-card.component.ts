import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectImage: string = '';
  @Input() headline: string = '';
  @Input() techStack: string = '';
  @Input() description: string = '';
  @Input() liveTestLink: string = '';
  @Input() gitLink: string = '';
  @Input() rowReverse: boolean = false;
}
