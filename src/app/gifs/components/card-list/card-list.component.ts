import { Component, Input } from '@angular/core';
import { gifs } from '../../interfaces/gifs.interfaces';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports:  [NgFor, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  public gif:gifs[] = []


}
