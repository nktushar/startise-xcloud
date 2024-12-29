import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintListModalComponent } from './blueprint-list-modal.component';

describe('BlueprintListModalComponent', () => {
  let component: BlueprintListModalComponent;
  let fixture: ComponentFixture<BlueprintListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueprintListModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueprintListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
