import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropDownDirective {
    @HostBinding('class.show') isOpen: boolean = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    @HostListener('mouseleave') toggleClose() {
        this.isOpen = false;
    }

} 