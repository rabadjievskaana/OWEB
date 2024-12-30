import { Component, Input } from '@angular/core';
import { driver } from '../../driver';
import { NgClass, NgIf, NgSwitch } from '@angular/common';


@Component({
  selector: 'app-comp',
  imports: [NgIf, NgClass, NgSwitch],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {    //ova e type script delot 
@Input()
//ime:String | undefined;
vozac: driver | undefined;

@Input()
indeks: Number | undefined;

onDrvView(){
  //console.log("KLIKNA ME");    //ispis na konzola
  let link: string | undefined;  //ova e ts

  //var link = ' ';  ova e js

  if(this.vozac?.iconUrl){
    link = this.vozac?.iconUrl
  } else{
    link = "https://www.google.co.uk/"
  };

  window.open(link, "_blank")
}

klasi(){
  return{'begin': this.vozac?.category == 'ADS',
    'adv':this.vozac?.category == 'EXPERT',
    //'undr': true
  }
}

klasi2(){
  if(this.vozac?.category == 'ASD'){
    return 'begin'
  } else{
    return 'adv'
  }
}

stilovi(){
  return {'undr':this.vozac?.category == 'EXPERT'}
}


/*isExpanded = false;

toggleExpanded() {
  this.isExpanded = !this.isExpanded;
}*/


}