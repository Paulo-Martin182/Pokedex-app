import { Story, Meta } from '@storybook/react/types-6-0'
import PokeInfo from '.'

export default {
  title: 'PokeInfo',
  component: PokeInfo
} as Meta

export const Default: Story = () => <PokeInfo pokeName="ivysaur" pokeId="2" />
