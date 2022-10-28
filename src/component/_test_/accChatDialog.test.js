import AddChatDialog from "../AddChatDialog";
import { render } from '@testing-library/react';

describe('AddChatDialog tests', () => {
    it("AddChatDialog snap", () => {
        const component = render(<AddChatDialog/>);
        const input = component.getByTestId('input-chatName')

    });
});