import React from 'react'
import ReactDOM from 'react-dom/client'
import { MeterChart } from '@carbon/charts-react'
import data from './data.js'
import options from './options.js'
import '@carbon/charts-react/styles.css'

class App extends React.Component {
  state = {
    data,
    options,
  }

  render = () => (
    <MeterChart
      data={this.state.data}
      options={this.state.options}
    ></ MeterChart>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)
