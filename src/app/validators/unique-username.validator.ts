import { Validator, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";



export default class AsyncValidator implements Validator {

    validate( c : AbstractControl ) : Promise<{[key : string] : any}>|Observable<{[key : string] : any}> {
        return this.validateUniqueEmailPromise(c.value);
      }

      validateUniqueEmailPromise( email : string ) {
        return new Promise(resolve => {
          setTimeout(() => {
            if( email === "alreadyExistsEmail@gmail.com" ) {
              resolve({
                asyncInvalid: true
              })
            } else {
              resolve(null);
            }
          }, 2000);
        })
    }
}