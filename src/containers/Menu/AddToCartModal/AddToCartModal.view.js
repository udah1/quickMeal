import React, {Component} from 'react'
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
            <Modal isOpen={true} toggle={close}>
                <ModalHeader>{item.name}</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="room-list">
                            <h6 className="text-center">{item.description}</h6>
                            <ul className="nav nav-pills">
                                {item.ingredients && item.ingredients.map((ingredient, key) => (
                                    <li className="nav-item room-number" key={"ingredient_" + key}>

                                        <FormControlLabel
                                            control={
                                                <Checkbox className="nav-link active" title={ingredient.name}
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
                    <Button color="primary" onClick={() => addToCart(item)}>Do Something</Button>{'  '}
                    <Button color="secondary" onClick={close}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartModal)
