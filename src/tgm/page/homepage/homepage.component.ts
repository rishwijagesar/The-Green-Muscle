import { Component, OnInit } from '@angular/core';
import { Card } from 'src/tgm/models/card';
import { CardComponent } from '../products/card/card.component';

@Component({
  selector: 'tgm-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public cards: CardComponent[] = [];

  constructor() { }

  ngOnInit(): void {

    this.cards.push(new CardComponent);
    this.cards.push(new CardComponent);
    this.cards.push(new CardComponent);
  }

}
