import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, gifs } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  private _tagsHistory: string[] = [];
  private apiKey: string = 'fKaK9mVuUNVCKjzvyEzFThPjzfLAjA41';
  private url: string = 'https://api.giphy.com/v1/gifs';
  public gifsList: gifs[] = [];

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  addTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    // Peticiones http request(fetch)
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=fKaK9mVuUNVCKjzvyEzFThPjzfLAjA41&q=valorant&limit=5').then(res => {
    //   return res.json()
    // }).
    //   then(data => console.log(data))

    // httpClient

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', 10).set('q', tag)
    this.http.get<SearchResponse>(`${this.url}/search`, { params }).subscribe((data) => {
      this.gifsList = data.data
    })

  }

  private saveLocalStorge() {
    localStorage.setItem('historyTags', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage() {
    const temporal = localStorage.getItem('historyTags')
    if (!temporal) return;
    this._tagsHistory = JSON.parse(temporal)

    if (this._tagsHistory.length === 0) return
    this.addTag(this._tagsHistory[0]);
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(e => e != tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10)
    this.saveLocalStorge()

  }


}
