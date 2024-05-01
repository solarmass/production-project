import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta = {
    title: 'shared/Page',
    component: Page,

} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Normal: Story = {
//     args: {

//     },
// };
