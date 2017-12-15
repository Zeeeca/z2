import { Component, ViewChildren, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { User, Address } from "./user.model";
import { numericRangeValidator } from '../validators/number-range.validator';
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs/Observable";

// export function numericRangeValidator(min: number, max: number) : ValidatorFn {
//     return (control: AbstractControl) : {[key: string] : any} => {
//         const forbiddenValue = control.value > min && control.value < max;
//         console.log(forbiddenValue);
//         return forbiddenValue ? null : { 'forbiddenName' : { value: control.value }};
//     }
// }

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit{
    user: User;
    userForm: FormGroup;  
    @ViewChild('.testx') streetInput;  

    constructor(private formBuilder: FormBuilder, private auth: AuthenticationService){
        
        this.userForm = this.formBuilder.group({
            'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]),
            'username': new FormControl('', [],this.validateUniqueEmailPromise.bind(this)), 
            'email': new FormControl(''),
            'id': new FormControl(0),
            'address': new FormArray( [] ),
            'phone': new FormControl(''),
            'website': new FormControl(''),
            'company': new FormGroup({
                'name': new FormControl(''),
                'catchPhrase': new FormControl(''),
                'bs': new FormControl('')
            })
        })

    }

    onFormSubmit(){
        let usr = new User(
            this.userForm.get('name').value,
            this.userForm.get('username').value,
            this.userForm.get('email').value,
            this.userForm.get('id').value,
            this.userForm.get('address').value,
            this.userForm.get('phone').value,
            this.userForm.get('website').value,
            this.userForm.get('company').value,
        );
    }

    onAddAddress(){
        let addressForm = new FormGroup({
            'street': new FormControl(''), 
            'suite': new FormControl(''), 
            'city': new FormControl(''), 
            'zipcode': new FormControl(''), 
            'geo': new FormGroup({
                'lat': new FormControl(null, [Validators.required, numericRangeValidator(-360, 360) ] ),
                'lng': new FormControl(null, [Validators.required, numericRangeValidator(-360, 360) ] )
            }),
        });

        (<FormArray>this.userForm.get('address')).push(addressForm);
       
    }

    ngOnInit(){
    }

    validateUniqueEmailPromise( control: AbstractControl ) {
        return new Promise(resolve => {
          setTimeout(() => {
            if( control.value === "asd" ) {
              resolve({
                asyncInvalid: true
              })
            } else {
              resolve(null);
            }
          }, 2000);
        })
    }

    validateUniqueEmailObservable(  control: AbstractControl ) {
        return new Observable(observer => {
            let isAvailable = this.auth.isUsernameAvailable(control.value);
            if( !isAvailable ) {
                observer.next({mikaPeraLaza: true});
            } else {
                observer.next(null);
            }
            observer.complete();
        });
      }
        
}