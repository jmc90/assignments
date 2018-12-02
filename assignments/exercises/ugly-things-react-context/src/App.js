import React, { Component } from 'react'
import { withUglyThings } from './UglyThingsProvider'
import UglyThing from './UglyThing'
import UglyForm from './UglyForm'

class App extends Component {
    componentDidMount(){
        // call the getUglyThings function from the UglyThingsProvider
        // We have access to this method because of the `withUglyThings(App)` on our export
        this.props.getUglyThings()
    }

    render(){
        return (
            <div>
              <UglyForm />
                {/* 
                    We have access to the uglyThings array from our Provider,
                    so we can map over them just as if they were in this 
                    component's state
                */}
              { this.props.uglyThings.map(thing => <UglyThing {...thing} key={thing._id}/>) }
            </div>
        )
    }
}

            // withUglyThings is called when this file is used, and fills the <App />
            // component with all the props from the UglyThingsProvider 
export default withUglyThings(App)