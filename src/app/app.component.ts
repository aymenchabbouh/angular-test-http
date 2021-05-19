import { Component } from '@angular/core';
import { MagicRequestService } from 'src/app/services/magic-request.service';
import { HttpHeaders } from '@angular/common/http';
import { Mynew } from './_models/mynew';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  title = 'magic-request';
  constructor(private magicRequestService:MagicRequestService){
    this.magicRequest();

  }
  magicRequest(): any {
    let myNews: Mynew[];
    let url = "https://magicrequestv3.orange.fr/ToolBar-V4/actu";
    url = "http://localhost/xml/index.php";
    this.magicRequestService.getUrl2(url).subscribe((response: any) => {
      for (let key in response) {
        if (key == "news") {
          myNews = response[key];
          console.log(myNews)
        }
      }

    })
  }
}
