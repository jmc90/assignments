import React, { Component } from 'react'
import Die from './Die'

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
            die1: 0,
            die2: 0,
            die3: 0,
            die4: 0,
            die5: 0,
            die1Selected: false,
            die2Selected: false,
            die3Selected: false,
            die4Selected: false,
            die5Selected: false,
            rollCount: 0
        }
    }

    generateDiceNumbers = () => {
        if(this.state.rollCount !== 3){
            // Generate 5 numbers between 1 - 6
            const num1 = Math.ceil(Math.random() * 6)
            const num2 = Math.ceil(Math.random() * 6)
            const num3 = Math.ceil(Math.random() * 6)
            const num4 = Math.ceil(Math.random() * 6)
            const num5 = Math.ceil(Math.random() * 6)

            // save numbers in state
                this.setState(prevState => {
                    return {
                        die1: this.state.die1Selected ? prevState.die1 : num1,
                        die2: this.state.die2Selected ? prevState.die2 : num2,
                        die3: this.state.die3Selected ? prevState.die3 : num3,
                        die4: this.state.die4Selected ? prevState.die4 : num4,
                        die5: this.state.die5Selected ? prevState.die5 : num5,
                        rollCount: prevState.rollCount + 1
                    }
                })
        } else {
            this.setState({
                die1: 0,
                die2: 0,
                die3: 0,
                die4: 0,
                die5: 0,
                die1Selected: false,
                die2Selected: false,
                die3Selected: false,
                die4Selected: false,
                die5Selected: false,
                rollCount: 0
            })
        }
    }

    selectDie = (selectedDie) => {
        if(selectedDie === "die1"){
            this.setState({ die1Selected: true })
        } else if(selectedDie === "die2"){
            this.setState({ die2Selected: true })
        } else if(selectedDie === "die3"){
            this.setState({ die3Selected: true })
        } else if(selectedDie === "die4"){
            this.setState({ die4Selected: true })
        } else if(selectedDie === "die5"){
            this.setState({ die5Selected: true })
        }
    }

    render(){
        return (
            <div>
                <Die dice={this.state.die1} selectDie={this.selectDie} name="die1"/>
                <Die dice={this.state.die2} selectDie={this.selectDie} name="die2"/>
                <Die dice={this.state.die3} selectDie={this.selectDie} name="die3"/>
                <Die dice={this.state.die4} selectDie={this.selectDie} name="die4"/>
                <Die dice={this.state.die5} selectDie={this.selectDie} name="die5"/>
                <button onClick={this.generateDiceNumbers}>Roll Dice</button>
                <p>RollCount: {this.state.rollCount}</p>
            </div>
        )
    }
}

export default DiceBox
