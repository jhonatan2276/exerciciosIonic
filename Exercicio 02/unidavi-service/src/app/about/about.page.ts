import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor(private sqlite: SQLite) { }

  createDbTest() {
    console.log('OK');
    // this.sqlite.create({
    //   name: 'data.db',
    //   location: 'default'
    // })
    //   .then((db: SQLiteObject) => {
    
    
    //     db.executeSql('create table danceMoves(name VARCHAR(32))', {})
    //       .then(() => console.log('Executed SQL'))
    //       .catch(e => console.log(e));
    
    
    //   })
    //   .catch(e => console.log(e));
  }
}
