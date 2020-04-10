import React, {Component} from 'react';

export default class LandingPage extends Component {
    constructor(props){
        super(props);
    }
    handleClick = () => {
        
    }
    render(){
        return(
            <div className='landing-page' onClick={this.handleClick}>
                <div className='landing-page-text'>
                    <h1>SP Development</h1>
                    <h5>Click to enter</h5>
                </div>
            </div>
        )
    }
}