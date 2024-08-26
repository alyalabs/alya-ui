import React from 'react'

import {
  Page
} from 'alya-ui'

import { Box, Home } from 'lucide-react'

export default function TabDefaultButtons(props) {
  return (
    <>
      <div className="dev">
        <div className="dev__row">
          <button className="alya-button alya-button_sm alya-button_uppercase">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
          <button className="alya-button alya-button_uppercase">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
          <button className="alya-button alya-button_lg alya-button_uppercase">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_sm">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
          <button className="alya-button">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
          <button className="alya-button alya-button_lg">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_sm">
            Button
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button">
            Button
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_lg">
            Button
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_sm">Button</button>
          <button className="alya-button">Button</button>
          <button className="alya-button alya-button_lg">Button</button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_sm" disabled>Button</button>
          <button className="alya-button" disabled>Button</button>
          <button className="alya-button alya-button_lg" disabled>Button</button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_sm alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_lg alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
        </div>


        <div className="dev__row">
          <button className="alya-button alya-button_secondary alya-button_sm">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
          <button className="alya-button alya-button_secondary">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
          <button className="alya-button alya-button_secondary alya-button_lg">
            <div className="alya-button__icon">
              <Home/>
            </div>
            Button
          </button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_secondary alya-button_sm">
            Button
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_secondary">
            Button
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_secondary alya-button_lg">
            Button
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_secondary alya-button_sm">Button</button>
          <button className="alya-button alya-button_secondary">Button</button>
          <button className="alya-button alya-button_secondary alya-button_lg">Button</button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_secondary alya-button_sm" disabled>Button</button>
          <button className="alya-button alya-button_secondary" disabled>Button</button>
          <button className="alya-button alya-button_secondary alya-button_lg" disabled>Button</button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_secondary alya-button_sm alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_secondary alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_secondary alya-button_lg alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
        </div>

        <div className="dev__row">
          <button className="alya-button alya-button_tertiary alya-button_sm">Button</button>
          <button className="alya-button alya-button_tertiary">Button</button>
          <button className="alya-button alya-button_tertiary alya-button_lg">Button</button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_tertiary alya-button_sm" disabled>Button</button>
          <button className="alya-button alya-button_tertiary" disabled>Button</button>
          <button className="alya-button alya-button_tertiary alya-button_lg" disabled>Button</button>
        </div>
        <div className="dev__row">
          <button className="alya-button alya-button_tertiary alya-button_sm alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_tertiary alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
          <button className="alya-button alya-button_tertiary alya-button_lg alya-button_only-icon">
            <div className="alya-button__icon">
              <Home/>
            </div>
          </button>
        </div>

      </div>
    </>
  )
}
