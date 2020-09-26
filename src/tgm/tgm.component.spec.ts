import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TGMComponent } from './tgm.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TGMComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TGMComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TheGreenMuscle'`, () => {
    const fixture = TestBed.createComponent(TGMComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TheGreenMuscle');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TGMComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('TheGreenMuscle app is running!');
  });
});
