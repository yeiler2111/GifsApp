import { Component, Input, OnInit } from '@angular/core';
import { gifs } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from "../../../shared/components/lazyImage/lazyImage.component";

@Component({
    selector: 'gifs-card',
    standalone: true,
    templateUrl: './card.component.html',
    imports: [LazyImageComponent]
})
export class CardComponent implements OnInit {
  @Input()
  public gif! : gifs;


  ngOnInit(): void {
    if(!this.gif)  throw new Error('Gif property is required')

  }





}
