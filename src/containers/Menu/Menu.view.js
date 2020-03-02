import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Tooltip from "@material-ui/core/Tooltip";
import {Button} from "@material-ui/core";
import {AddCircleOutline} from "@material-ui/icons";
import AddToCartModal from './AddToCartModal/AddToCartModal.view'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    toggleModal = (item) => {
        this.setState({
            showModal: !this.state.showModal,
            itemToShow: item
        });
    };


    render() {
        const {classes, foods} = this.props;
        const categories = foods.filter(food => food.position && food.name && food.items).sort((a, b) => a.position - b.position);

        return (
            <div className="row game-row">
                <span />
                <div className="text-center menu-container">
                    {categories.map((category, i) => {
                        const foodItems = category.items.sort((a, b) => a.position - b.position);
                        return (
                            <div className="menu-category" key={"category-" + i}>
                                <h2>{category.name}</h2>

                                {foodItems.map((food, j) => (
                                    <div className="menu-grid row justify-content-center" key={"row" + j}>
                                        <div className="col-lg-1">
                                            <MuiThemeProvider theme={redTheme}>
                                                <Tooltip title="הוסף להזמנה">
                                                    <Button color="primary" className={classes.button} onClick={() => this.toggleModal(food)}>
                                                        <AddCircleOutline />
                                                    </Button>
                                                </Tooltip>
                                            </MuiThemeProvider>
                                        </div>
                                        {food.image && <div className="col-lg-1">
                                            <img src={food.image} alt="" className="itemImg" />
                                        </div>}
                                        <div className="right col-lg-4">{`${food.name} - ${food.description}`}</div>
                                        <div className="col-lg-1">{`${food.price}`}</div>
                                    </ div>
                                ))}
                            </div>
                        )
                    })}
                    <p />
                </div>
                {this.state.showModal && <AddToCartModal close={this.toggleModal} item={this.state.itemToShow} />}
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
const redTheme = createMuiTheme({
    palette: {
        primary: red
    },
    typography: {
        useNextVariants: true
    }
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Menu))
