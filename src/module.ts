import { NgModule } from '@angular/core';
import { AngularMasonryComponent } from './masonry.component';
import { AngularMasonryBrickDirective } from './brick.directive';

const DIRECTIVES = [AngularMasonryComponent, AngularMasonryBrickDirective];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class MasonryModule { }
