import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18nForTests'; // Mocked i18n instance for testing
import Header from '../Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
  });

  it('renders the logo with triple "S" in Autohausss', () => {
    const logoElement = screen.getByText(/V&A Autohausss/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the SVG logo with correct triple "S"', () => {
    const svgText = screen.getByText('Autohausss', { selector: 'text' });
    expect(svgText).toBeInTheDocument();
  });

  it('toggles language between English and Spanish', () => {
    const toggleButton = screen.getByText(/ES|EN/i);
    expect(toggleButton).toBeInTheDocument();

    // Initial state should be English
    expect(i18n.language).toBe('en');

    // Simulate language toggle
    fireEvent.click(toggleButton);
    expect(i18n.language).toBe('es');

    // Simulate language toggle back to English
    fireEvent.click(toggleButton);
    expect(i18n.language).toBe('en');
  });

  it('toggles the mobile menu open and close', () => {
    const menuButton = screen.getByLabelText('Toggle Menu');
    expect(menuButton).toBeInTheDocument();

    // Initially menu should be closed
    let homeButton = screen.queryByText(/nav.home/i);
    expect(homeButton).not.toBeInTheDocument();

    // Simulate menu toggle open
    fireEvent.click(menuButton);
    homeButton = screen.getByText(/nav.home/i);
    expect(homeButton).toBeInTheDocument();

    // Simulate menu toggle close
    fireEvent.click(menuButton);
    homeButton = screen.queryByText(/nav.home/i);
    expect(homeButton).not.toBeInTheDocument();
  });

  it('contains navigation buttons with correct texts from translation', () => {
    const navItems = [
      'nav.home',
      'nav.services',
      'nav.garage',
      'nav.about',
      'nav.gallery',
      'location.contact',
    ];

    navItems.forEach((key) => {
      const buttonElement = screen.getByText(new RegExp(key, 'i'));
      expect(buttonElement).toBeInTheDocument();
    });
  });

  it('should render Instagram link with correct href and attributes', () => {
    const instagramLink = screen.getByLabelText('Follow us on Instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/vyaautohaus?igsh=YWJsMWNqd29wa2Vp&utm_source=qr');
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // Further tests can be added for edge cases or additional features
});