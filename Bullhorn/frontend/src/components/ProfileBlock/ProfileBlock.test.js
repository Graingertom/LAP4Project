import { screen, render } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";
import TestRenderer from 'react-test-renderer'
import ProfileBlock from ".";
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

describe('Profile', () => {
    beforeEach(() => {
        render(<ProfileBlock />, { wrapper: MemoryRouter });
    })

    test('renders the profile', () => {
        const hdr = screen.getByRole('p')
        expect(hdr.textContent).toContain('following:');
        expect(hdr.textContent).toContain('following:');

    })


})
