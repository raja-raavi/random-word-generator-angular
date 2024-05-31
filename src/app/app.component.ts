import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-word-generator';
  limit = 0;
  para = ""
  Array = ["The", "Dams", "And", "Projects", "Which", "Are", "Build", "Accorss", "The", "River", "To", "Provide", "Water", "For", "Irrigation", "And", "Also", "To", "Control", "Floods", "Are", "Called", "MultiPurpouse", "Projects", "In", "India"];

  buttonclicked() {
    this.para = this.Array.slice(0,this.limit).join(" ")
    if(this.limit == 27){
      this.para = "OOPS..You are out of Range, Please Selcet The Range Below 26";
    }else if(this.limit == 0){
      this.para = "Invalid Range"
    }
  }
}
