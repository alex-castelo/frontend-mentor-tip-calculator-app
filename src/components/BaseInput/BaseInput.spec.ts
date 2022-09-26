import { mount } from '@vue/test-utils'
import BaseInput from '../BaseInput'
import type { InputIcons } from './BaseInput.vue'

describe('BaseInput', () => {
  it('renders default state component', () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'default',
      },
    })

    expect(wrapper.get('.input-label').text()).toBe('default')
    expect(wrapper.get('input').attributes()['placeholder']).toBe('default')
    expect(wrapper.find('.input-wrapper').exists()).toBe(true)
  })

  it('renders error messages and classes when has an error', () => {
    const wrapper = mount(BaseInput, {
      props: {
        hasError: true,
        errorMessage: 'error-message',
      },
    })

    expect(wrapper.find('.input-wrapper-error').exists()).toBe(true)
    expect(wrapper.get('.input-error').text()).toBe('error-message')
  })

  it.each(['dollar', 'person'])('renders %s icon properly', (icon) => {
    const wrapper = mount(BaseInput, {
      props: {
        icon: icon as InputIcons,
      },
    })

    expect(wrapper.get('img').attributes()['alt']).toBe(`${icon}-icon`)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('do not render icon by default', () => {
    const wrapper = mount(BaseInput)

    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('emits update:modelValue event when user types', () => {
    const wrapper = mount(BaseInput)
    const input = wrapper.find('input')

    input.setValue('potato')

    expect(input.element.value).toBe('potato')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()['update:modelValue']).toHaveProperty('')
  })
})
