import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  full_name =''
  phone = '' 

  output1 =''
  output2 =''


  click_submit() {
   // alert ('Hello')
   this.output1 = this.full_name
   this.output2 = this.phone
  }

}
