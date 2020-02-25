import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {AddCircleOutlined} from "@material-ui/icons";

class Menu extends Component {
    constructor(props) {
        super(props);

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


    render() {
        const {classes, foods} = this.props;
        let anyErrors = false;
        const categories = foods.filter(food => food.position && food.name && food.items).sort((a, b) => a.position - b.position);

        return (
            <div className="row game-row">
                <span />
                <div className="text-center menu-container">
                    {categories.map((category, i) => (
                        <div className="menu-category" key={"category-" + i}>
                            <h2>{category.name}</h2>
                            <table id="game" className="menu-grid" cellPadding="0" cellSpacing="0">
                                <tbody>
                                {category.items.map((food, j) => (
                                    <tr key={"tr-" + j + "-" + i}>
                                        <td>{`${food.price}`}</td>
                                        <td>{`${food.name} - ${food.description}`}</td>
                                        <td>
                                            <Tooltip title="add">
                                                <Button variant="contained" color="primary" className={classes.button} onClick={() => this.changeActivity('solve')}>
                                                    <AddCircleOutlined />
                                                </Button>
                                            </Tooltip>
                                        </td>
                                    </ tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                    <p />

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
        ...state.reducer.menu,
        cubes: {...state.reducer.cube}
    }
}

Menu.propTypes = {
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Menu))
