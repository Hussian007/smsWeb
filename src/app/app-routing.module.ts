import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { HomeComponent } from './home/home.component';
import { UpperheaderComponent } from './upperheader/upperheader.component';
import { OurServicesComponent} from './our-services/our-services.component';
import { GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent},  
  {path: "upperheader", component:  UpperheaderComponent}, 
  {path: "our-services", component:  OurServicesComponent},
  {path: "gallery", component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
