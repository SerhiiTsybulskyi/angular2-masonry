import { NgModule } from '@angular/core';
import { AngularMasonry } from './masonry';
import { AngularMasonryBrickComponent } from './brick';

const DIRECTIVES = [AngularMasonry, AngularMasonryBrickComponent];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class MasonryModule { }
