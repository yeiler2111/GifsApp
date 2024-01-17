import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private GifsService:GifsService){

  }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    this.GifsService.addTag(newTag)
    this.tagInput.nativeElement.value = ''

  }
}
