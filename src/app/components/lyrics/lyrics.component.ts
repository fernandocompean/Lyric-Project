import { Component, OnInit } from '@angular/core';
import { LyricsService } from "../../services/lyrics.service";


@Component({
  selector: "app-lyrics",
  templateUrl: "./lyrics.component.html",
  styleUrls: ["./lyrics.component.css"]
})
export class LyricsComponent implements OnInit {

  lyrics: string;

  constructor(private lyricsApi: LyricsService) {}

  ngOnInit() {
    this.showLyric();
  }

  showLyric() {
    this.lyrics = this.lyricsApi.getLyric();
  }

}
