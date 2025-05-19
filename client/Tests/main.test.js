import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import TestPage from '../src/pages/TestPage';
import InteractionPage from '../src/pages/InteractionPage';
import FormPage from '../src/pages/FormPage';
import AsyncPage from '../src/pages/AsyncPage';

// 1. Basic rendering test
describe('TestPage Component', () => {
  it('should render the main heading', () => {
    render(<TestPage />);
    const heading = screen.getByRole('heading', { name: /test page/i });
    expect(heading).toBeInTheDocument();
  });
});

// 2. Interaction test
describe('InteractionPage Component', () => {
  it('should increment counter on button click', () => {
    render(<InteractionPage />);
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button);
    const counter = screen.getByText(/count: 1/i);
    expect(counter).toBeInTheDocument();
  });
});

// 3. Form input test
describe('FormPage Component', () => {
  it('should accept user input in the name field', () => {
    render(<FormPage />);
    const input = screen.getByPlaceholderText(/enter your name/i);
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toBe('John');
  });
});

// 4. Async behavior test
describe('AsyncPage Component', () => {
  it('should display data after async fetch', async () => {
    render(<AsyncPage />);
    const data = await screen.findByText(/fetched data/i);
    expect(data).toBeInTheDocument();
  });
});