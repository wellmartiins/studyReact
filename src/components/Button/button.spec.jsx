/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from ".";

describe('<button />', () => {

    it('should render the button with text "Load More"', () => {
        render(<Button text ='load more'/>);
        expect.assertions(1)
        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn()
        render(<Button text ='load more' onClick={fn}/>);
        const button = screen.getByRole('button', {name: /load more/i});
        fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text ='load more' disabled={true}/>);
        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeDisabled();
    });

    it('should be disabled when disabled is false', () => {
        render(<Button text ='load more' disabled={false}/>);
        const button = screen.getByRole('button', {name: /load more/i});
        expect(button).toBeEnabled();
    });

});
