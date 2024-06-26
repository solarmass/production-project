import type { Meta, StoryObj } from '@storybook/react';
import { [FTName] } from './[FTName]';

const meta = {
    title: 'shared/[FTName]',
    component: [FTName],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {

    },
};
