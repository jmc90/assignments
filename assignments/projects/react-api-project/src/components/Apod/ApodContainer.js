import React, { Component } from 'react'
import { withApod } from '../../context/ApodProvider'
import ApodCard from './ApodCard'
import ApodDateInput from './ApodDateInput'


class ApodContainer extends Component {
    componentDidMount() {
        this.props.getData()
    }

  render() {
    return (
        <div className="container apod-container">
            <ApodDateInput />
            <ApodCard />
       
      </div>
    )
  }
}

export default withApod(ApodContainer)