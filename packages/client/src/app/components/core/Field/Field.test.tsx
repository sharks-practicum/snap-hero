import Field from './Field'
import {render, screen } from '@testing-library/react'

test('Example test', async () => {
  render(<Field label="input" type="text"/>)
  expect(screen.getByRole('input')).toBeDefined()
})
