import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatCardComponent } from './shared/components/cat-card/cat-card.component';
import { PhotoComponent } from './components/photo/photo.component';
import { MaterialModule } from './material/material.module';

@NgModule({ declarations: [
        AppComponent,
        CatCardComponent,
        FavoritesComponent,
        FooterComponent,
        GalleryComponent,
        HeaderComponent,
        PhotoComponent,
    ],
    bootstrap: [AppComponent], imports: [AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MaterialModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
