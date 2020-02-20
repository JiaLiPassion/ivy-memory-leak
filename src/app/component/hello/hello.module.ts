import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { HelloRoutingModule } from './hello-routing.module';
@NgModule({
  declarations: [HelloComponent],
  imports: [HelloRoutingModule]
})
export class HelloModule {}
