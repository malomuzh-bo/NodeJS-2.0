import { Component } from '@angular/core';
import { Picture } from './pic';
import { PicService } from './pic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw0702';

  items: Picture[] = [];
  selPic:Picture = this.items[0];

  onSelect(item: Picture): void {
    this.selPic = item;
  }

  constructor(private picService: PicService){};

  ngOnInit() {
    this.items = this.picService.list;
  }
}
