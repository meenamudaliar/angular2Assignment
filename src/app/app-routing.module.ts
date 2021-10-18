import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { PropertylistComponent } from './propertylist/propertylist.component';

const routes: Routes = [{path:'list',component:PropertylistComponent},
{path:'create',component:PropertyComponent},
{path:'',redirectTo:'list',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
