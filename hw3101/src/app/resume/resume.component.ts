import { Component } from '@angular/core';
import { ResumeTemplate } from './resume';
import { resumes } from './mock-resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  res : ResumeTemplate = new ResumeTemplate("Resume1", 4657683512, "exampleamail@gmail.com", "City1", "Experience1", "Skill1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FEtRaBQYZ2_QebGp9B5lK3IAfGPRuWc6IIhBZ-2iFzZXWUl61VTNZ9Dh71SveTCK80o&usqp=CAU");
  resumees = resumes;
}
