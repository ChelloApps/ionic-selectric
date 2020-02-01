import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { IonicSelectricComponent } from "./ionic-selectric.component";

describe("IonicSelectricComponent", () => {
    let component: IonicSelectricComponent;
    let fixture: ComponentFixture<IonicSelectricComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonicSelectricComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(IonicSelectricComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
