import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lazyImage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public titleAlternative: string = "";

  public hasLoader: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is requerid')
    if (this.titleAlternative === "") throw new Error('Gif title property is required')
  }

  onLoad() {
    this.hasLoader = true
  }


}
