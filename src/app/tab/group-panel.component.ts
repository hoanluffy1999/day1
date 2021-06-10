import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TabPanelComponet } from "./tab-panel.componet";

@Component({
    selector:'group-panel',
    template:`
        <div class="tab-headers">
            <div 
                class="tab-header-item"
                *ngFor="let tab of listPanel; let idx = idx"  
            >
                {{tab.title}}
                <button (click)="removeTab(tab)"> x</button>
            </div>
        </div>
        <div class="tab-body" *ngIf='listPanel.length>0;else notap'>
            <ng-container *ngTemplateOutlet="listPanel[activeIndex].panelBody">
            </ng-container>
        </div>

        <ng-template #notap>
            <span>no tap</span>
        </ng-template>
    `,
    styles:[]
})
export class GroupPanelComponent{
    listPanel:TabPanelComponet[] = [];
    @Input() activeIndex:number
    @Output() aciticeIndexChange = new EventEmitter<number>();
    
    addTab(tab:TabPanelComponet)
    {
        this.listPanel =[...this.listPanel,tab];
    }
    
    removeTab(tab : TabPanelComponet)
    {
        let found = -1;
        this.listPanel = this.listPanel.filter((tp,index)=>{
            if(tp === tab )
            {
                found = index;
                return false;
            }
            return true;
        })

        if(found === this.activeIndex)
        {
                this.aciticeIndexChange.emit(found === this.listPanel.length ? found -1 : found)
        }
    }
}