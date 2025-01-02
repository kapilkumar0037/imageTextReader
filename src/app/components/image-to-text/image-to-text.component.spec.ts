import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToTextComponent } from './image-to-text.component';

describe('ImageToTextComponent', () => {
  let component: ImageToTextComponent;
  let fixture: ComponentFixture<ImageToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
