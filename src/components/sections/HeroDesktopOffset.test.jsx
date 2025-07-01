import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

function setWindowWidth(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Hero desktop offset', () => {
  it('applies correct negative margin at 1440px', () => {
    setWindowWidth(1440);
    render(<Hero />);
    const copy = document.querySelector('.hero-copy');
    expect(copy).toBeTruthy();
    const style = window.getComputedStyle(copy);
    // Should be -48px (lg:-mt-12)
    expect(style.marginTop).toBe('-48px');
  });

  it('applies no negative margin at 390px', () => {
    setWindowWidth(390);
    render(<Hero />);
    const copy = document.querySelector('.hero-copy');
    expect(copy).toBeTruthy();
    const style = window.getComputedStyle(copy);
    // Should be 0px
    expect(style.marginTop).toBe('0px');
  });
}); 