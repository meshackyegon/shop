import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent }  from './detail/detail.component';
import { ProductComponent } from './product/product.component';


export const routes: Routes = [
    { path: 'home', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: ProductComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch:'full'},
        { path: 'products/:id', component: DetailComponent }
        
     ],
    },
    //  { path: 'products/:id', component: DetailComponent },
   
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent},
    { path: 'blog', component: BlogComponent},
    { path:'login', component: LoginComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }