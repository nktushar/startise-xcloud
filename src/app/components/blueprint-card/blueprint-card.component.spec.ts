import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintCardComponent } from './blueprint-card.component';

describe('BlueprintCardComponent', () => {
  let component: BlueprintCardComponent;
  let fixture: ComponentFixture<BlueprintCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueprintCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueprintCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
