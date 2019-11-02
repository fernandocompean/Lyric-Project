import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class LyricsService {

  lyrics: any;

  constructor(private http: HttpClient) {}

  GetLyric(url) {
    return this.http.get(url);
  }

  setLyric(lyrics) {
    this.lyrics = lyrics;
  }

  getLyric() {
    return this.lyrics;
  }
}
