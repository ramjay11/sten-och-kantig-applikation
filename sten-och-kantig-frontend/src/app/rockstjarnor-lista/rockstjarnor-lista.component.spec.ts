import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockstjarnorListaComponent } from './rockstjarnor-lista.component';

describe('RockstjarnorListaComponent', () => {
  let component: RockstjarnorListaComponent;
  let fixture: ComponentFixture<RockstjarnorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RockstjarnorListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RockstjarnorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
