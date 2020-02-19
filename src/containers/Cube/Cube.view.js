import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggle_status, update_status} from './Cube.actions'

/* 0 - X
 * 1 - Black
 * 2- blank */

class Cube extends Component {

    componentDidUpdate(prevProps, prevState) {
        const {index, updateStatus, activity, solution} = this.props;
        if (prevProps.activity !== activity) {
            switch (activity) {
                case 'restart':
                    updateStatus(2, index);
                    break;
                case 'solve':
                    updateStatus(solution, index);
                    break;
                default:
                    return;
            }
        }
    }

    constructor(props) {
        super(props);
        this.props.updateStatus(2, this.props.index);
    }

    handleClick = () => {
        const {cubeClickCallback, toggleStatus, activity} = this.props;
        if (activity === 'solve') {
            return;
        }
        cubeClickCallback();
        toggleStatus(this.props.index)
    }

    render() {
        const {index, number, gameGrid, activity, error} = this.props;
        const {i,j} = index;
        const status = gameGrid[i] && gameGrid[i][j] !== undefined ? gameGrid[i][j] : 2;
        const errClass = activity === 'check' && error ? ' error' : '';
        return (
            <td className={'grid-' + status + errClass} id={'cube-' + i + j} onClick={() => this.handleClick()} >
                {number !== undefined ? number : ''}
            </td>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        toggleStatus: (index) => dispatch(toggle_status(index)),
        updateStatus: (newStatus, index) => dispatch(update_status(newStatus, index))
    }
}

function mapStateToProps(state) {
    return {
        ...state.reducer.cube
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cube)
