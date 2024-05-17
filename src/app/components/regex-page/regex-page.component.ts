import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-regex-page',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, CommonModule],
  templateUrl: './regex-page.component.html',
  styleUrl: './regex-page.component.scss'
})
export class RegexPageComponent {

  stringArr = ['fooaaabar', 'fooabar', 'foobar', 'fooaabar', 'fooxxxbar', 'fooxbar'];
  stringArr2 = ['foo123bar', 'barfoo', 'foobar', 'foobra', 'barqwefoo', 'foocbybar', 'barafoo', 'barabfoo', 'fooaobar'];
  stringArr3 = ['fooxxxbar', 'foo bar', 'foobar', 'foo   bar (4 spaces)', 'fooqwebar', 'fooaabar', 'foo  bar (2 spaces)', 'foo ybar', 'foo       bar (6 spaces)'];
  stringArr4 = ['foo1', 'moo1', 'coo', 'dooqwe', 'daooqwe', 'poo', 'qweloo', 'loo', 'boo', 'hoo'];

  checkXBetweenRegex(str: string): boolean {
    return !!str.match(/foox*bar/);
  }

  checkAnyCharBetweenRegex(str: string): boolean {
    return !!str.match(/foo...bar/);
  }

  checkSthBetweenRegex(str: string): boolean {
    return !!str.match(/foo.*bar/);
  }

  checkSpacesBetweenRegex(str: string): boolean {
    return !!str.match(/foo\s*bar/);
  }

  checkLetterBeforeStringRegex(str: string): boolean {
    return !!str.match(/[fcld]oo/);
  }

  checkExxlduedLetterBeforeStringRegex(str: string): boolean {
    return !!str.match(/[^fdl]oo/);
  }
}
