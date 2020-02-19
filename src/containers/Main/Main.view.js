import React, {Component} from 'react';
import Board from '../Board/Board.view'
import {connect}    from 'react-redux'

class Main extends Component {

    render() {
        return (
            <div>
                <p /><p /><p /><p /><p /><p />
                <Board />
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
