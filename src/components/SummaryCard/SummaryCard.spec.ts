import { mount } from '@vue/test-utils'
import SummaryCard from './SummaryCard.vue'

const TOTAL_AMOUNT = 100
const PERSON_AMOUNT = 20

describe('BaseCard', () => {
  it('renders summary card content', () => {
    const wrapper = mount(SummaryCard, {
      props: {
        personAmount: PERSON_AMOUNT,
        totalAmount: TOTAL_AMOUNT,
      },
    })

    const personSummary = wrapper.findAll('.summary-item')[0]
    const totalSummary = wrapper.findAll('.summary-item')[1]
    const resetButton = wrapper.find('button')

    expect(personSummary.find('.amount').text()).toBe(`$${PERSON_AMOUNT}`)
    expect(personSummary.find('.title').text()).toBe('Tip Amount')
    expect(personSummary.find('.subtitle').text()).toBe('/ person')

    expect(totalSummary.find('.amount').text()).toBe(`$${TOTAL_AMOUNT}`)
    expect(totalSummary.find('.title').text()).toBe('Total')
    expect(totalSummary.find('.subtitle').text()).toBe('/ person')

    expect(resetButton.text()).toBe('RESET')
  })

  it('emitts reset event on button click', () => {
    const wrapper = mount(SummaryCard)

    const resetButton = wrapper.find('button')

    resetButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('reset')
  })
})
