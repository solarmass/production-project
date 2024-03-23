import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'shared/CommentCard',
    component: CommentCard,
    argTypes: {
    },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Normal: Story = {
//     args: {

//     },
// };
