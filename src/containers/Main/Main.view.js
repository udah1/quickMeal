import React, {Component} from 'react';
import Menu from '../Menu/Menu.view'
import {connect} from 'react-redux'
import Cart from '../Cart/Cart.view.js'

class Main extends Component {
    constructor(props) {
        super();
        this.foods = require('../../assets/foods.json');
    }

    render() {
        return (
            <div>
                <p /><p /><p /><p /><p /><p />
                <Menu foods={this.foods}/>
                <Cart/>
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
