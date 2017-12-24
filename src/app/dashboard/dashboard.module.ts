import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashcompComponent } from './dashcomp/dashcomp.component';
import { Istudents } from './dashcomp/casesensitive'
import { FilterPipe } from './dashcomp/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyButtonDirective } from './dashcomp/dashcomp.mydirectivebutton';
import { MyResponseDirective } from './dashcomp/dashcomp.myresponse';
import { RouterModule, CanActivate, ActivatedRoute } from '@angular/router';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { AuthGuardService as AuthGuard } from './detaillist/mycanguard.service';
import { ServiceurlComponent } from './serviceurl/serviceurl.component';
import { ImageService } from './serviceurl/urlservice.service'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'students', component : DashcompComponent},
      {path:'details/:id', component : DetaillistComponent, canActivate: [AuthGuard] },      
      {path:'album', component : ServiceurlComponent}
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashcompComponent,
    FilterPipe,
    MyButtonDirective,
    MyResponseDirective,
    DetaillistComponent,
    ServiceurlComponent,
  ],
  providers: [AuthGuard, ImageService, HttpClientModule ],
  exports : [DashcompComponent]
})
export class DashboardModule { }
