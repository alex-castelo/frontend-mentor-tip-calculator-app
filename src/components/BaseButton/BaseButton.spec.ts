import { mount } from '@vue/test-utils'
import BaseButton from '.'

describe('BaseButton', () => {
  it('renders a default slot content button', () => {
    const wrapper = mount(BaseButton, { slots: { default: 'click-me' } })

    expect(wrapper.find('button').text()).toBe('click-me')
  })

  it('emits click event when user clicks on it', () => {
    const wrapper = mount(BaseButton, { slots: { default: 'click-me' } })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
