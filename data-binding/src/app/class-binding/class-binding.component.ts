import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*
  Class binding adiciona remove ou altera uma classe de
  uma tag.
  Estrutura: [class.NomePropriedade]="varivaelControle == 'valueDaTagAserAplicada' "
*/
