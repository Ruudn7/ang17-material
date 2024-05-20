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

  strArray = ['834', '529', '4874', '5', '89', '45687', '25', '645'];
  strArray1 = ['lion', 'tiger', 'leopard', 'fox', 'kangaroo', 'bat', 'mouse', 'cockoo', 'deer'];
  strArray2 = ['ha', 'haha', 'hahahahahaha', 'hahaha', 'hahahahahahahaha', 'hahahaha', 'hahahahaha'];
  strArray4 = ['fooaaabar', 'fooabar', 'foobar', 'fooaabar', 'fooxxxbar', 'fooxbar'];
  strArray5 = ['https://website', 'http://website', 'httpss://website', 'xhttp://website', 'httpxx://website', 'httpqwe://website'];
  strArray6 = ['wood', 'sapwood', 'rosewood', 'logwood', 'teakwood', 'plywood', 'redwppd'];

  checkThreeDigitNumber(str: string): boolean {
    return !!str.match(/^[0-9]{3}$/)
  }

  checkForToSixLetterString(str: string): boolean {
    return !!str.match(/^[a-z]{4,6}$/)
  }

  checkRepeatedPatterndFourTimeOrMore(str: string): boolean {
    return !!str.match(/^(ha){4,6}$/)
  }

  checkRepeatedPatterndLessThenFourTime(str: string): boolean {
    return !!str.match(/^(ha){0,2}$/)
  }

  // + mean one or more char before "+"
  checkOneOreMoreCharBeetwenStings(str: string): boolean {
    return !!str.match(/fooa+bar/)
  }

  // ? mean or - so there will be s or nothing beetwen http and rest sting
  checkIfCharIsBeetweenStrings(str: string): boolean {
    return !!str.match(/^https?:\/\/website/)
  }

  // | mean first option or secong option
  checkIfBeginningStringMatch(str: string): boolean {
    return !!str.match(/^[log | ply]+wood/)
  }
}
