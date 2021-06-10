import { Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { GroupPanelComponent } from "./group-panel.component";

@Component({
    selector:'tab-panel',
    template:`
    <ng-template>
        <ng-content></ng-content>
    </ng-template>
    `,
    styles:[]
})
export class TabPanelComponet{
    @Input() title:string
    @ViewChild(TemplateRef,{static:true}) panelBody:TemplateRef<unknown>;

    constructor(private grouptab:GroupPanelComponent)
    {

    }
    ngOnInit(){
        this.grouptab.addTab(this)
    }
}