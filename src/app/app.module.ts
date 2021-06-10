import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponet } from './hello.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { TabPanelComponet } from './tab/tab-panel.componet';
import { GroupPanelComponent } from './tab/group-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponet,
    AuthorListComponent,
    AuthorDetailComponent,
    TabPanelComponet,
    GroupPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponet]
})
export class AppModule { }
