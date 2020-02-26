import React from 'react';
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";

class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    render() {
        const {product, index} = this.props;
        const evenClass = index%2 === 0 ? 'even' : 'odd'
        return (
            <li className={`items ${evenClass}`}>
                <div className="infoWrap">
                    <div className="cartSection">
                        <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className="itemImg"/>
                        <h3>{product.name}</h3>

                        <p> {product.description}</p>
                    </div>

                    <div className="prodTotal cartSection">
                        <p>&#8362;{product.price}</p>
                    </div>
                    <div className="cartSection removeWrap">
                        <a href="#" className="remove">x</a>
                    </div>
                </div>
            </li>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

function mapStateToProps(state) {
    console.log(state);
}


export default withStyles()(connect(mapStateToProps, mapDispatchToProps)(CartItem))
