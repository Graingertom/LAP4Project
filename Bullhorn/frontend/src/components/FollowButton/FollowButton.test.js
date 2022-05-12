import FollowButton from ".";
import { screen, render } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";

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

describe('FollowButton', () => {
    beforeEach(() => {
        render(<FollowButton />, { wrapper: MemoryRouter });
    })

    test('renders a button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('Follow');
    })

    test('when clicked runs function', () => {
        const btn = screen.getByRole('button')
        userEvent.click(btn)
        expect(mockedNavigate).toHaveBeenCalled
    })
})
