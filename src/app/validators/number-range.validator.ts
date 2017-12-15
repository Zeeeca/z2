import { FormControl, ValidatorFn, AbstractControl } from "@angular/forms";

export function numericRangeValidator(min: number, max: number) : ValidatorFn {
    return (control: AbstractControl) : {[key: string] : any} => {
        const forbiddenValue = control.value > min && control.value < max;
        console.log(forbiddenValue);
        return forbiddenValue ? null : { 'forbiddenName' : { value: control.value }};
    }
}

