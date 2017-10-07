// ...omitted
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
 declarations: [
   AppComponent,
 ],
 imports: [
   // ...omitted
   AngularFireModule.initializeApp(firebaseConfig),
   AgmCoreModule.forRoot({
     apiKey: environment.googleMapsKey
   })
 ],
 bootstrap: [
   AppComponent
 ],
})
export class AppModule { }
