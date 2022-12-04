import Field from './Field'
import {render } from '@testing-library/react'

test('Example test', async () => {
  render(<Field label="input" type="password"/>)

  expect(document.querySelector('[type=text]')).toBeNull()
  expect(document.querySelector('[type=password]')).not.toBeNull()
})
