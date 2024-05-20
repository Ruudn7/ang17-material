import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-regex-extended-page',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, CommonModule],
  templateUrl: './regex-extended-page.component.html',
  styleUrl: './regex-extended-page.component.scss'
})
export class RegexExtendedPageComponent {

  patternArray = [834, 529, 4874, 5, 89, 45687, 25, 645];

  
}
