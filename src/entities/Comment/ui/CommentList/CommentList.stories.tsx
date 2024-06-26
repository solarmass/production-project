import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
    },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: {
                    id: '1',
                    username: 'Vasya',
                },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: {
                    id: '1',
                    username: 'Petya',
                },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
