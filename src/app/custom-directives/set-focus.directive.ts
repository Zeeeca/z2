import { Directive, ElementRef, Inject, OnInit, Input } from "@angular/core";

@Directive({
    selector: '[appFocus]'
})
export class SetFocusDirective implements OnInit{    
    constructor(@Inject(ElementRef) private element: ElementRef){        
    }

    ngOnInit(){        
        this.element.nativeElement.focus();  
    }


}