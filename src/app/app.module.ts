import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ListUserComponent } from './module-user/list-user/list-user.component';
import { NavigationComponent } from './module-user/navigation/navigation.component';
import { SidebarFormComponent } from './module-user/sidebar-form/sidebar-form.component';
import { AngularFireModule}  from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SearchDataComponent } from './module-user/search-data/search-data.component';
import { SidebarDetailUserComponent } from './module-user/sidebar-detail-user/sidebar-detail-user.component';

 
@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    NavigationComponent,
    SidebarFormComponent,
    SearchDataComponent,
    SidebarDetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
