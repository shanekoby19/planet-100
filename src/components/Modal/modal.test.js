import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

test('Modal starts out hidden', () => {
    // Render the modal and find it's close button.
    render(<Modal />);
    const button = screen.queryByRole('button', { name: 'X' });

    // Expect the button to not be on the page. 
    expect(button).not.toBeInTheDocument();
});

test('Modal appears after 3 seconds.', async () => {
    // Render the modal and find it's close button.
    render(<Modal />);
    const button = await screen.findByRole('button', { name: 'X' }, { timeout: 3000 });

    // Expect the button to be on the page.
    expect(button).toBeVisible();
});

test('Modal closes when the close button is clicked', async () => {
    const user = userEvent.setup();
    // Render the modal and find it's close button.
    render(<Modal />);
    const button = await screen.findByRole('button', { name: 'X' }, { timeout: 3000 });

    // Click the button
    await user.click(button);

    // Expect the button to disappear 2 seconds.
    await waitFor(() => {
        expect(button).not.toBeVisible();
    }, { timeout: 2000 });
});

