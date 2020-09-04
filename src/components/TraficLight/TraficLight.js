import React, {Component} from 'react';
import className from 'classnames';
import Light from '../Light/Light';
import './TraficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TraficLight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentColor: RED
        }

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

    render() {
        return(
            <div className='TraficLight'>
                <Light stateLight={{color: 'red', active: this.state.currentColor === RED}}></Light>
                <Light stateLight={{color: 'orange', active: this.state.currentColor === ORANGE}}></Light>
                <Light stateLight={{color: 'green', active: this.state.currentColor === GREEN}}></Light>
            </div>
        )
    }
}

export default TraficLight;