import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cube from '../Cube/Cube.view'
import PropTypes from 'prop-types'
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Sync, Check, RemoveRedEye} from '@material-ui/icons'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import green from '@material-ui/core/colors/green';

class Board extends Component {
    constructor(props) {
        super(props);
        this.gamePlainGrid = [
            [undefined, 2, 3, undefined, undefined, 0, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, 3, undefined, 2, undefined, undefined, 6],
            [undefined, undefined, 5, undefined, 5, 3, undefined, 5, 7, 4],
            [undefined, 4, undefined, 5, undefined, 5, undefined, 6, undefined, 3],
            [undefined, undefined, 4, undefined, 5, undefined, 6, undefined, undefined, 3],
            [undefined, undefined, undefined, 2, undefined, 5, undefined, undefined, undefined, undefined],
            [4, undefined, 1, undefined, undefined, undefined, 1, 1, undefined, undefined],
            [4, undefined, 1, undefined, undefined, undefined, 1, undefined, 4, undefined],
            [undefined, undefined, undefined, undefined, 6, undefined, undefined, undefined, undefined, 4],
            [undefined, 4, 4, undefined, undefined, undefined, undefined, 4, undefined, undefined]
        ];
        this.gameSolution = [
            [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
            [0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ];
        this.state = {
            activity: 'play'
        }
    }

    cubeClickCallback = () => {
        this.changeActivity('play');
        this.setState({
            allDone: false
        })
    }

    changeActivity = (activity) => {
        this.setState({
            allDone: false,
            activity: activity
        });
    }

    checkBoard = () => {
        let allDone = true;
        let anyErrors = false;
        this.gamePlainGrid.forEach((row, i) => {
            row.forEach((number, j) => {
                const error = number !== undefined && this.doesCellHasErrors(i, j);
                anyErrors = anyErrors || error;
                if (this.props.cubes.gameGrid[i][j] === 2) {
                    allDone = false;
                }
            });
        });

        this.setState({
            allDone,
            anyErrors,
            activity: 'check'
        })
    }

    doesCellHasErrors = (i, j) => {
        const {gameGrid} = this.props.cubes;
        let hasError = false;
        const max = this.gameSolution.length - 1;
        if (!gameGrid[i]) {
            return hasError;
        }

        if (i > 0 && j > 0) {
            hasError = hasError || (gameGrid[i - 1][j - 1] !== 2 && gameGrid[i - 1][j - 1] !== this.gameSolution[i - 1][j - 1]);
        }
        if (i > 0) {
            hasError = hasError || (gameGrid[i - 1][j] !== 2 && gameGrid[i - 1][j] !== this.gameSolution[i - 1][j]);
        }
        if (i > 0 && j < max) {
            hasError = hasError || (gameGrid[i - 1][j + 1] !== 2 && gameGrid[i - 1][j + 1] !== this.gameSolution[i - 1][j + 1]);
        }

        if (j > 0) {
            hasError = hasError || (gameGrid[i][j - 1] !== 2 && gameGrid[i][j - 1] !== this.gameSolution[i][j - 1]);
        }
        hasError = hasError || (gameGrid[i][j] !== 2 && gameGrid[i][j] !== this.gameSolution[i][j]);
        if (j < max) {
            hasError = hasError || (gameGrid[i][j + 1] !== 2 && gameGrid[i][j + 1] !== this.gameSolution[i][j + 1]);
        }

        if (i < max && j > 0) {
            hasError = hasError || (gameGrid[i + 1][j - 1] !== 2 && gameGrid[i + 1][j - 1] !== this.gameSolution[i + 1][j - 1]);
        }
        if (i < max) {
            hasError = hasError || (gameGrid[i + 1][j] !== 2 && gameGrid[i + 1][j] !== this.gameSolution[i + 1][j]);
        }
        if (i < max && j < max) {
            hasError = hasError || (gameGrid[i + 1][j + 1] !== 2 && gameGrid[i + 1][j + 1] !== this.gameSolution[i + 1][j + 1]);
        }
        return hasError;
    }

    render() {
        const {classes} = this.props;
        let anyErrors = false;
        return (
            <div className="row game-row">
                <div className="text-center game-container">
                    <h1>Fill a pix</h1>
                    <br />
                    <Tooltip title="Restart game">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.changeActivity('restart')}>
                            <Sync />
                        </Button>
                    </Tooltip>
                    <MuiThemeProvider theme={this.state.activity === 'check' && !this.state.anyErrors ? greenTheme : blueTheme}>
                        <Tooltip title="Check game">
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => this.checkBoard()}>
                                <Check />
                            </Button>
                        </Tooltip>
                    </MuiThemeProvider>
                    <Tooltip title="Solve">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.changeActivity('solve')}>
                            <RemoveRedEye />
                        </Button>
                    </Tooltip>
                    <table id="game" className="game-grid" cellPadding="0" cellSpacing="0">
                        <tbody>
                        {this.gamePlainGrid.map((row, i) => (
                            <tr key={"tr-" + i}>
                                {row.map((number, j) => {
                                    const error = number !== undefined && this.doesCellHasErrors(i, j);
                                    anyErrors = anyErrors || error;
                                    return (
                                        <Cube key={"cube-" + i + j} number={number} index={{i: i, j: j}} solution={this.gameSolution[i][j]}
                                              activity={this.state.activity} cubeClickCallback={this.cubeClickCallback} error={error} />
                                    )
                                })}
                            </ tr>
                        ))}
                        </tbody>
                    </table>
                    <p />
                    <span>
                        {this.state.allDone && !anyErrors &&
                        <h1>WOOOOW Well done!!</h1>
                        }
                        &copy; Uda &#128515;
                    </span>

                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {}
}

function mapStateToProps(state) {
    return {
        ...state.reducer.board,
        cubes: {...state.reducer.cube}
    }
}

Board.propTypes = {
    classes: PropTypes.object.isRequired
};

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});
const greenTheme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: {
        useNextVariants: true
    }
});

const blueTheme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Board))
