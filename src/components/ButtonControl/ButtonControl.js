import React, { Component } from 'react';
import className from 'classnames';
import './ButtonControl.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class ButtonControl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'ButtonControl ' + this.props.stateButton.color}>
                <input
                    type='radio' 
                    name='button-control' 
                    value={this.props.stateButton.currentColor}>
                </input>
            </div>
        )
    }
}

export default ButtonControl;