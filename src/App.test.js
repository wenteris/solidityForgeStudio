// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders solidityForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/solidityForge/i);
    expect(titleElement).toBeInTheDocument();
});
