import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Country from '../components/Country';

// Mock the country data for the test
const mockCountry = {
  name: 'Test Country',
  region: 'Test Region',
  flags: 'test-flag.png',
};

test('renders the Country component correctly', () => {
  // Render the component with the mock country data inside a MemoryRouter
  render(
    <MemoryRouter>
      <Country country={mockCountry} />
    </MemoryRouter>,
  );

  // Use getByText or queryByText to check if specific elements are rendered correctly
  expect(screen.getByText('Test Country')).toBeInTheDocument();
  expect(screen.getByText('Region: Test Region')).toBeInTheDocument();

  // Check if the image is rendered correctly
  const countryImage = screen.getByAltText('country');
  expect(countryImage).toBeInTheDocument();
  expect(countryImage.src).toContain('test-flag.png');

  // Verify the link to the details page
  const navLink = screen.getByTestId('navLink');
  expect(navLink).toHaveAttribute('href', '/details/Test Country');
});
