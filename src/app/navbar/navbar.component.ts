import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ustAnimation: any = [{a:'U',b:'S',c:'T',d:'.'}];
  ust: string = 'UST.';

  constructor() { }

  ngOnInit(): void {

    this.animateUSTLogo();

  }

  animateUSTLogo() {
    setInterval(() => {
      const array = this.ust.split('');
      array.sort(() => Math.random() - 0.5)

      const randomisedText = {
        a: array[0],
        b: array[1],
        c: array[2],
        d: array[3]
      }
      
      this.ustAnimation = randomisedText;
    }, 3000);
  }

}
