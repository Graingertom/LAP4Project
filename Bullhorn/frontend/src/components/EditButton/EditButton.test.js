import EditButton from '.';
import { screen, render } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigate: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('EditButton', () => {
    beforeEach(() => {
        render(<EditButton />, { wrapper: MemoryRouter });
    })

    test('renders a button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('Edit Your Profile');
    })

    test('when clicked runs function', () => {
        const btn = screen.getByRole('button')
        userEvent.click(btn)
        expect(mockedNavigate).toHaveBeenCalled
    })
})
