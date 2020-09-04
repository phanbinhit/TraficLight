import React, {Component} from 'react';
import className from 'classnames';
import './Light.css';

class Light extends Component {
    render() {
        let lightClass = className({
            Light,
            'active': this.props.stateLight.active
        })
        return(
            <div className={lightClass + ' ' + this.props.stateLight.color}></div>
        )
    }
}

export default Light;