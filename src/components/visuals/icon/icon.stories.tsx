import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Icon } from '.'

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    type: { control: 'home' },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'home',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'arrow-right',
}
