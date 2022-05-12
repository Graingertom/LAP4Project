// import ConfirmationBox from '.';
// import { screen, render } from '@testing-library/react';
// import { MemoryRouter, useNavigate } from 'react-router-dom';

// const mockedNavigate = jest.fn();

// jest.mock('react-router-dom', () => {
//   const actualNav = jest.requireActual('react-router-dom');
//   return {
//     ...actualNav,
//     useNavigate: () => ({
//       navigate: mockedNavigate,
//     }),
//   };
// });

// describe('EditButton', () => {
//     beforeEach(() => {
//         render(<ConfirmationBox />, { wrapper: MemoryRouter });
//     })

//     test('renders a button', () => {
//         const div = screen.getByRole('section')
//         expect(div.textContent).toHaveClass('confirmation');
//     })

// })