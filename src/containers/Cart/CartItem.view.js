import React from 'react';
import {Button, withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
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
                    <div className="prodTotal cartSection">
                        <p>&#8362;{product.price}</p>
                    </div>
                    <div className="cartSection removeWrap">
                        <Button onClick={() => alert('יא בישגדה מה אתה לוחץ????')}>
                            <DeleteIcon />
                        </Button>
                    </div>
                    <div className="cartSection">
                        <img src="https://www.learnenglish1-2-1.com/wp-content/uploads/2018/11/20-Ways-to-say-Hello-in-Other-Languages.jpeg" alt="" className="itemImg"/>
                        <h3>{product.name}</h3>

                        <p> {product.description}</p>
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
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
