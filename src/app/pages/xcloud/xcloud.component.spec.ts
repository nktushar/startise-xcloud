import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XcloudComponent } from './xcloud.component';

describe('XcloudComponent', () => {
  let component: XcloudComponent;
  let fixture: ComponentFixture<XcloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XcloudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
