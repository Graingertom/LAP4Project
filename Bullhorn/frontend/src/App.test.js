import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import App from '.'

it("navigates home ", () => {

    const root = document.createElement('div');
    document.body.appendChild(root);

    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>,
        root
    );

    act(() => {
        // Find the link (perhaps using the text content)
        const goHomeLink = document.querySelector('#home');
        // Click it
        goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(document.body.contains('div'));
});