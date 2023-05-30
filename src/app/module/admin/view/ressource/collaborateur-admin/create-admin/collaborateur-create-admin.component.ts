import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';
import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurCriteria} from 'src/app/controller/criteria/CollaborateurCriteria.model';
@Component({
  selector: 'app-collaborateur-create-admin',
  templateUrl: './collaborateur-create-admin.component.html'
})
export class CollaborateurCreateAdminComponent extends AbstractCreateController<CollaborateurDto, CollaborateurCriteria, CollaborateurService>  implements OnInit {



   private _validCollaborateurCode = true;

    constructor( private collaborateurService: CollaborateurService ) {
        super(collaborateurService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validCollaborateurCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCollaborateurCode();
    }

    public validateCollaborateurCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCollaborateurCode = false;
        } else {
            this.validCollaborateurCode = true;
        }
    }






    get validCollaborateurCode(): boolean {
        return this._validCollaborateurCode;
    }

    set validCollaborateurCode(value: boolean) {
         this._validCollaborateurCode = value;
    }



}
