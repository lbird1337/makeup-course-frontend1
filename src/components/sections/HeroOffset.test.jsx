import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

function setWindowWidth(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Hero offset', () => {
  it('applies correct translateY at 1440px', () => {
    setWindowWidth(1440);
    render(<Hero />);
    const headline = screen.getByText(/Мастер-класс/i);
    // Find the closest .hero-copy ancestor
    let node = headline.parentElement;
    while (node && !node.classList.contains('hero-copy')) {
      node = node.parentElement;
    }
    expect(node).toBeTruthy();
    const style = window.getComputedStyle(node);
    // Should be -48px (lg:-translate-y-12)
    expect(style.transform).toMatch(/-48px/);
  });

  it('applies no translateY at 390px', () => {
    setWindowWidth(390);
    render(<Hero />);
    const headline = screen.getByText(/Мастер-класс/i);
    let node = headline.parentElement;
    while (node && !node.classList.contains('hero-copy')) {
      node = node.parentElement;
    }
    expect(node).toBeTruthy();
    const style = window.getComputedStyle(node);
    // Should be 0px
    expect(style.transform).toMatch(/0px/);
  });
}); 