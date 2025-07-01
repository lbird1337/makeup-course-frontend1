import React from 'react';
import { render, screen } from '@testing-library/react';
import Stats from './Stats';

// Helper to mock window.matchMedia for responsive tests
function createMatchMedia(width) {
  return (query) => {
    return {
      matches: query.includes(`${width}`),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };
}

describe('Stats', () => {
  it('renders exactly 3 list items with correct numbers', () => {
    render(<Stats />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('ТОП-30');
    expect(items[1]).toHaveTextContent('8 лет');
    expect(items[2]).toHaveTextContent('500+');
  });

  it('renders a <ul> with role="list"', () => {
    render(<Stats />);
    const list = screen.getByRole('list');
    expect(list.tagName).toBe('UL');
  });

  it('container has flex-row and not flex-col on 375px viewport', () => {
    // Simulate mobile viewport
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    render(<Stats />);
    const list = screen.getByRole('list');
    expect(list.className).toMatch(/flex-row/);
    expect(list.className).not.toMatch(/flex-col/);
  });

  it('all circles have equal width/height (112px mobile, 128px md)', () => {
    render(<Stats />);
    const circles = screen.getAllByRole('listitem').map(li => li.querySelector('div'));
    circles.forEach(circle => {
      expect(circle).toHaveClass('w-28', 'h-28');
    });
  });
}); 