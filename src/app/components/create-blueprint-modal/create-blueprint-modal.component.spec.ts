import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlueprintModalComponent } from './create-blueprint-modal.component';

describe('CreateBlueprintModalComponent', () => {
  let component: CreateBlueprintModalComponent;
  let fixture: ComponentFixture<CreateBlueprintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBlueprintModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlueprintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
