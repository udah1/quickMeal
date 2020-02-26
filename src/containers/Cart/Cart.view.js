import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem.view'


class Cart extends Component {

    render() {
        const {items, totalPrice} = this.props;
        return (
            <div className="shopping-cart">
                <div className="wrap cf">
                    <div className="heading cf">
                        <h1>ההזמנה שלי</h1>
                        <a href="#" className="continue">חזרה לתפריט</a>
                    </div>
                    <div className="cart">
                        <ul className="cartWrap">
                            <span>
                             {items.map((item, index) =>
                                 (<CartItem product={item} key={index}/>)
                             )}
                            </span>
                        </ul>
                        total : {totalPrice}
                    </div>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {}
}

function mapStateToProps(state) {
    return {...state.reducer.cart}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
