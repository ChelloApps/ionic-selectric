import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonicSelectricOptionsComponent } from './ionic-selectric-options.component';

describe('IonicSelectricOptionsComponent', () => {
  let component: IonicSelectricOptionsComponent;
  let fixture: ComponentFixture<IonicSelectricOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicSelectricOptionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonicSelectricOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
