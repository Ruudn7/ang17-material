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
  stringArr4 = ['foo1', 'moo1', 'coo', 'Coo', 'dooqwe', 'Dooqwe', 'aooqwe', 'poo', 'zweqoo', 'loo', 'Loo', 'boo', 'hoo', 'zoo'];
  stringArr5 = ['x.y', 'xx.y', 'x.yyy', 'xyy', 'xxxx.yy', 'xxxxxyyyyy', 'xxx.y', 'xy', 'xxxxyyyyy', '1.23'];
  stringArr6 = ['x#y', 'x:y', 'x.y', 'x&y', 'x%y', 'x$y', 'x@y', 'x!y', 'x^y'];
  stringArr7 = ['foo bar baz', 'foo ba1 bak', 'bar foo baz', 'foo', 'baz foo bar', 'baz bar foo', 'bar baz foo', 'foo baz bar', 'baz bar foo']

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

  checkExlduedLetterBeforeStringRegex(str: string): boolean {
    return !!str.match(/[^fdl]oo/);
  }

  checkLettersBetweenRangeRegex(str: string): boolean {
    return !!str.match(/[h-p]oo/);
  }

  checkLettersBetweenRangeAndOneLetterRegex(str: string): boolean {
    return !!str.match(/[h-pz]oo/);
  }
  checkLettersBetweenUnionRangesAndOneLetterRegex(str: string): boolean {
    return !!str.match(/[h-pA-Dz]oo/);
  }

  checkDotsBetweenSetLettersRegex(str: string): boolean {
    return !!str.match(/x*\.+y*/);
  }

  checkAvaliableSymbolsBeetwenLetters(str: string): boolean {
    //  \^  -> escape because ^ on the beginning has different meaning, we can use it as a char in that way using \ before
    return !!str.match(/x[\^#$%*]y/);
  }

  checkExcludedSymbolsBeetwenLetters(str: string): boolean {
    return !!str.match(/x[^#$%*^]y/);
  }

  checkIfFooFirstAndOtherAfter(str: string): boolean {
    return !!str.match(/^foo.*/);
  }

  checkIfBarIsLast(str: string): boolean {
    return !!str.match(/.*bar$/);
  }

  checkNothingBeforeAndBehindFoo(str: string): boolean {
    return !!str.match(/^foo$/);
  }
}
