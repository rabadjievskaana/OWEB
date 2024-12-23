import { Component, Input } from '@angular/core';
import { driver } from '../../driver';

@Component({
  selector: 'app-comp',
  imports: [],
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
  console.log("KLIKNA ME");    //ispis na konzola
}

}
