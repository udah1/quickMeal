import React from 'react';
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {addItemToCart} from '../Cart/Cart.actions'


class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    render(){
        const { product } = this.props;
        return (
            <div className="card" style={{ marginBottom: "10px"}}>
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                    <h5 className="card-text"><small>price: </small>${product.price}</h5>
                    <span className="card-text"><small>Available Quantity: </small>{product.available_quantity}</span>

                    { product.available_quantity > 0 ?
                        <div>
                            <button className="btn btn-sm btn-warning float-right" onClick={() => this.props.addToCart(product)}>Add to cart</button>
                            <input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
                        </div> :
                        <p className="text-danger"> product is out of stock </p>
                    }

                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addItemToCart(item))
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {}
}

export default withStyles()(connect(mapStateToProps, mapDispatchToProps)(ProductItem))

