import { NgModule } from '@angular/core';
import { FiltroCompletePipe } from './filtro-complete.pipe';

@NgModule({
  declarations: [FiltroCompletePipe],
  exports: [FiltroCompletePipe]
})
export class PipesModule { }
