import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta = {
    title: 'shared/Card',
    component: Card,

} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
};
