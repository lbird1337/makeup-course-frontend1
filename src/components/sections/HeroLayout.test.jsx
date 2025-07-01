import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

function setWindowWidth(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Hero layout', () => {
  it('applies correct negative margin and columns at 1440px', () => {
    setWindowWidth(1440);
    render(<Hero />);
    const copy = document.querySelector('.hero-copy');
    expect(copy).toBeTruthy();
    const style = window.getComputedStyle(copy);
    // Should be -48px (lg:-mt-12)
    expect(style.marginTop).toBe('-48px');
    // Should have two grid columns
    const grid = copy.closest('.grid');
    expect(grid).toBeTruthy();
    expect(grid.className).toMatch(/lg:grid-cols-2/);
  });

  it('applies no negative margin and single column at 390px', () => {
    setWindowWidth(390);
    render(<Hero />);
    const copy = document.querySelector('.hero-copy');
    expect(copy).toBeTruthy();
    const style = window.getComputedStyle(copy);
    // Should be 0px
    expect(style.marginTop).toBe('0px');
    // Should have one grid column
    const grid = copy.closest('.grid');
    expect(grid).toBeTruthy();
    expect(grid.className).toMatch(/grid-cols-1/);
  });
}); 