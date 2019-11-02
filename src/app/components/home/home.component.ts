import { Component, OnInit } from '@angular/core';
import { LyricsService } from '../../services/lyrics.service';
import { NzModalService } from "ng-zorro-antd/modal";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  artist: string;
  song: string;

  constructor(
    private lyricsApi: LyricsService,
    private router: Router,
    private modalService: NzModalService
  ) {}

  ngOnInit() {}

  getLyric() {
    this.lyricsApi
      .GetLyric(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`)
      .subscribe(
        (data: any) => {
          this.lyricsApi.setLyric(data.lyrics);
          this.router.navigateByUrl('/lyrics');
        },
        error => {
          this.error();
        }
      );
  }

  error(): void {
    this.modalService.error({
      nzTitle: "Error",
      nzContent: "Lo sentimos ;(, no pudimos encontrar la letra de la canción"
    });
  }


}



