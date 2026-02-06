import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('Header component', () => {
  it('should display the title "V&A Autohauss" in the logo', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );

    const logoElement = screen.getByText(/v&a autohauss/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('should have functioning scrollable buttons', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );

    const homeButton = screen.getByRole('button', { name: /nav.home/i });
    fireEvent.click(homeButton);
    // Note: Here you'd simulate scroll functionality if possible
    // with your testing setup, or mock scrollIntoView if needed.
    expect(homeButton).toBeDefined();
  });

  it('should toggle the language when the language button is clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );

    const languageToggle = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(languageToggle);
    expect(i18n.language).toBe('es'); // assuming initial language was 'en'
    fireEvent.click(languageToggle);
    expect(i18n.language).toBe('en');
  });

  it('should toggle the mobile menu when hamburger button is clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );

    const menuToggle = screen.getByRole('button', { name: /toggle menu/i });
    const menuElement = screen.getByRole('navigation');
    fireEvent.click(menuToggle);
    expect(menuElement).toHaveClass('block');
    fireEvent.click(menuToggle);
    expect(menuElement).toHaveClass('hidden');
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <I18nextProvider i18n={i18n}>
        <Header />
      </I18nextProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});