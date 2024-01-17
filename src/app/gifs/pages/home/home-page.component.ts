import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent, ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService){

  }

  get gif() : gifs[]{
    return this.gifsService.gifsList;
  }



}
