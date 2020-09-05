import React, {Component} from 'react';
import className from 'classnames';
import Light from '../Light/Light';
import './TraficLight.css';
import ButtonControl from '../ButtonControl/ButtonControl'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TraficLight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentColor: RED,
            isLoop: true,
            isRender: false,
            active: false,
            radioChecked: null
        }

        this.controlLight = this.controlLight.bind(this);

        this.onChangeButton = this.onChangeButton.bind(this);

        setInterval(() => {
            this.setState({
                currentColor: this.nextColor(this.state.currentColor)
            })
        }, 1000);

    }

    nextColor(color) {
        switch (color) {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    controlLight() {
        this.setState({
            radioChecked: null,
            isLoop: !this.state.isLoop,
            isRender: !this.state.isRender
        })
    }

    onChangeButton(event) {
        this.setState({
            radioChecked: parseInt(event.target.value)
        })
    }

    render() {
        let buttonControlClass = className({
            ButtonControl: true,
            active: this.state.active
        })

        return(
            <div className='TraficLight'>
                <div className="boxlight">
                    <Light stateLight={{color: 'red', active: this.state.currentColor === RED, isLoop: this.state.isLoop, isChecked: this.state.radioChecked === RED}}></Light>
                    <Light stateLight={{color: 'orange', active: this.state.currentColor === ORANGE, isLoop: this.state.isLoop, isChecked: this.state.radioChecked === ORANGE}}></Light>
                    <Light stateLight={{color: 'green', active: this.state.currentColor === GREEN, isLoop: this.state.isLoop, isChecked: this.state.radioChecked === GREEN}}></Light>
                </div>
                <div className="control">
                    <button className='buttonSwitch' onClick={this.controlLight}>Switch</button>
                    {
                        this.state.isRender ? 
                        <div onChange={this.onChangeButton} className='formRadioButton'>
                            <ButtonControl stateButton={{color: 'button-red', currentColor: RED}}></ButtonControl>
                            <ButtonControl stateButton={{color: 'button-orange', currentColor: ORANGE}}></ButtonControl>
                            <ButtonControl stateButton={{color: 'button-green', currentColor: GREEN}}></ButtonControl> 
                        </div> : ''
                    }           
                </div>
            </div>
        )
    }
}

export default TraficLight;