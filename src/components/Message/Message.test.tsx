import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Message ,{ IMessagesProps } from './Message';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render default message', () => {
        // Default message
        const msgBasicProps: IMessagesProps = {
            msgType: 'basic',
            msgSize: 'large',
            msgColor: 'white',
            className: 'test'
        }
        const msgBasicWrapper = render(<Message {...msgBasicProps}></Message>);
        const msgElement = screen.getByTestId('message-element');
        expect(msgElement).toHaveClass('msg msg-basic msg-large msg-white test');
    });

    it('should render message with different props', () => {
        // List message
        const msgListProps: IMessagesProps = {
            msgType: 'list',
            msgSize: 'large',
            msgColor: 'white',
            className: 'test',
            msgHeader: 'List Message'
        }
        const msgListWrapper = render(<Message {...msgListProps}></Message>);
        const msgListElement = msgListWrapper.queryByText('List Message');
        expect(msgListElement).toBeInTheDocument();
        const listElement = screen.queryByTestId('message-element');
        expect(listElement).toHaveClass('msg msg-list msg-large msg-white test');
    });

});