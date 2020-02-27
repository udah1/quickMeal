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
                    </div>

                    <div className="subtotal cf">
                        <ul>
                            <div className="totalRow final">
                                <span className="value">&#8362; {totalPrice}</span>
                                <span className="label">סה"כ</span>
                            </div>

                            <div className="totalRow final">
                                <span className="value">&#8362; {totalPrice}</span>
                                <span className="label">משלוח</span>
                            </div>

                            <div className="totalRow final">
                                <span className="value">&#8362; {totalPrice}</span>
                                <span className="label">סה"כ לתשלום</span>
                            </div>
                            <div className="totalRow">
                                <a href="#" className="btn continue">המשך לתשלום</a></div>
                        </ul>
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
