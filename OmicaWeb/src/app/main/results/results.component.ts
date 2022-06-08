import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openPersonalized(contenido){
    this.modal.open(contenido,{size:'xl',
                              keyboard:true,
                              scrollable:true,
                              animation:true})

  }

}
