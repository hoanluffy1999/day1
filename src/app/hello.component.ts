import {Component} from "@angular/core"

@Component({
    selector:'hello',
    templateUrl:'./hello.component.html'
})
export class HelloComponet{
    title = "Hoàn";
    currentIndex = 1;
    user ={
        name :"Hoàn",
        age :19
        }
    
    handler(){
        alert('hello')
    }
}
