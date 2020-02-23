import React, {Component} from 'react';
import Board from '../Board/Board.view'
import {connect} from 'react-redux'

class Main extends Component {
    constructor(props) {
        super();
        this.foods = require('../../assets/foods.json');
    }

    render() {
        return (
            <div>
                <p /><p /><p /><p /><p /><p />
                <Board foods={this.foods}/>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch, ownProps) {
    return {}
}

function mapStateToProps(state) {
    return {
        ...state.reducer.main
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
