import { mount } from '@vue/test-utils'
import TipSelector from '.'

describe('TipSelector', () => {
  it('renders component', () => {
    const wrapper = mount(TipSelector)

    const tipButtons = wrapper.findAll('button')
    const customTip = wrapper.find('input')

    expect(tipButtons).toHaveLength(5)
    expect(customTip.attributes()['placeholder']).toBe('Custom')
  })

  it('emits update value when some button is clicked', () => {
    const wrapper = mount(TipSelector)
    const tipButton = wrapper.find('button')

    tipButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    // @ts-ignore
    expect(wrapper.emitted()['update:modelValue'][0][0]).toBe(5)
    expect(wrapper.emitted()).toHaveBeenCalledOnce
    console.log(wrapper.emitted())
  })
})
