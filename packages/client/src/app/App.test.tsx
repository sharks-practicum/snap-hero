import App from './App'
import { render, screen } from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import React from "react";

const appContent = 'Вот тут будет жить ваше приложение :)'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  )
  expect(screen.getByText(appContent)).toBeDefined()
})
