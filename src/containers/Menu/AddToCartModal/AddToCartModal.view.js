import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import {addItemToCart} from '../../Cart/Cart.actions'

class AddToCartModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: this.props.show
        }
    }

    render() {
        const {item, close, addToCart} = this.props;
        return item ? (
            <Modal isOpen={true} toggle={close} centered={true}>
                <ModalHeader>{item.name}</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div>
                            <h6>{item.description}</h6>
                            <ul>
                                {item.ingredients && item.ingredients.map((ingredient, key) => (
                                    <li key={"ingredient_" + key}>

                                        <FormControlLabel
                                            control={
                                                <Checkbox title={ingredient.name}
                                                          name={ingredient.name}
                                                          onClick={(event) => {
                                                              console.log(item.name)
                                                          }}
                                                />
                                            }
                                            label={ingredient.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        addToCart(item);
                        close();
                    }}>הוסף להזמנה</Button>{'  '}
                    <Button color="secondary" onClick={close}>סגור</Button>
                </ModalFooter>
            </Modal>
        ) : null;
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToCart: item => dispatch(addItemToCart(item))
    }
}

function mapStateToProps(state, props) {
    return {}
}

Modal.propTypes = {
    centered: PropTypes.bool
}
export default connect(mapStateToProps, mapDispatchToProps)(AddToCartModal)
