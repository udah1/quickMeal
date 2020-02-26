import React from 'react';
import ProductItemView from './ProductItem.view';
import {products} from '../../assets/productsData'
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        const productsList = products;
        this.setState({ products, productsList });
    }

    render() {
        const { products } =  this.state;
        return (
            <div className=" container">
                <h3 className="card-title">List of Available Products</h3>
                <hr/>
                {
                    products.map((product, index) => <ProductItemView product={product} key={index}/>)
                }
                <hr/>
                <br/><br/><br/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

function mapStateToProps(state) {
    console.log(state);
    return {}
}

export default withStyles()(connect(mapStateToProps, mapDispatchToProps)(ProductList))

