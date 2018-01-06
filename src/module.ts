import { NgModule } from '@angular/core';
import { AngularMasonryComponent } from './masonry.component';
import { AngularMasonryBrickComponent } from './brick.component';

const DIRECTIVES = [AngularMasonryComponent, AngularMasonryBrickComponent];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class MasonryModule { }
