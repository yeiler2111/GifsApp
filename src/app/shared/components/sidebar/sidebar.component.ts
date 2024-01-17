import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { NgForOf, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [NgForOf, TitleCasePipe,],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  //pricate gifsService

  constructor(private gifsService: GifsService) { }
  get Tags() {
    return this.gifsService.tagsHistory
  }

  searchTag(tag: string) {
    this.gifsService.addTag(tag)
  }








}
