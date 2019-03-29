import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private _elementRef:ElementRef) {
    console.log("Directiva llamada");
    // this._elementRef.nativeElement.style.backgroundColor="yellow";
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    // console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
    // this._elementRef.nativeElement.style.backgroundColor="yellow";
  };

  @HostListener('mouseleave') mouseSalio(){
    // this._elementRef.nativeElement.style.backgroundColor=null;
    this.resaltar( null);
  }

  private resaltar(color:string){
    this._elementRef.nativeElement.style.backgroundColor=color;
  }

}
