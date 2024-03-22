import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    args: {

    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
        text: `import type { Meta, StoryObj } from '@storybook/react';
        import { Code } from './Code';
        
        const meta = {
            title: 'shared/Code',
            component: Code,
            args: {
        
            },
        } satisfies Meta<typeof Code>;
        
        export default meta;
        type Story = StoryObj<typeof meta>;`,
    },
};
