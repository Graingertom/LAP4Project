import { screen, render } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";
import TestRenderer from 'react-test-renderer'
import Header from ".";
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

describe('Header', () => {
    beforeEach(() => {
        render(<Header />, { wrapper: MemoryRouter });
    })

    test('renders the hamburger', () => {
        const hdr = screen.getByRole('section')
        expect(hdr.textContent).toContain('+');
    })


})

// const testRenderer = TestRenderer.create(<Header />);
// const testInstance = testRenderer.root;

// expect(testInstance.findByType(SubComponent))
// expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
 