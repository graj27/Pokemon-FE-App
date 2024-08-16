import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from './pokemon.component';
import { beforeEach, it } from 'node:test';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
