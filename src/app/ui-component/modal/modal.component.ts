import {Component,  Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ngbd-modal-focus',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class NgbdModalFocus {

  // --------------------------------------------
  //           INPUTS
  // --------------------------------------------

  @Input() placeholder: string = 'Hello';
  @Input() content: object;

  @Input() active = 'score';

  constructor(private modalService: NgbModal) {
  }


  open(name: string) {
    // switch (name) {
    //   case 'score':
    //     var modalRef =  this.modalService.open();
    //     modalRef.componentInstance.match = this.content ;
    //     modalRef. result.then(() => { }, () => { });
    //
    //     break;
    //   case 'tournois':
    //     var modalRef =  this.modalService.open();
    //     modalRef.componentInstance.oldTournoi = this.content ;
    //     modalRef. result.then(() => {  }, () => { });
    //
    //     break;
    //
    //   default:
    //
    // }
  }
}
