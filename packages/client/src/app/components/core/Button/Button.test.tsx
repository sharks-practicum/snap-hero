import Button from './Button'
import {render, screen } from '@testing-library/react'

test('Example test', async () => {
  render(<Button>Кнопка</Button>)
  expect(screen.getByRole('button')).toBeDefined()
})
