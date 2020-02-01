import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicSelectricComponent } from "./ionic-selectric.component";
import { IonicModule } from "@ionic/angular";
import { IonicSelectricOptionsComponent } from '../ionic-selectric-options/ionic-selectric-options.component';

const components = [IonicSelectricComponent, IonicSelectricOptionsComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, IonicModule],
    exports: [...components],
    entryComponents: [IonicSelectricOptionsComponent]
})
export class IonicSelectricModule {}
