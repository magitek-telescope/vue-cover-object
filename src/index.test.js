import { mount } from 'vue-test-utils'
import CoverObject from './'

test('it works', () => {
  const wrapper = mount(CoverObject)
  expect(wrapper.isVueInstance()).toBe(true)
})
