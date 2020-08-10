import React from 'react';
import '../styles/index.css';
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity';

const Cart = (props) => {
    
    return(
        
        <div className="list-product">
            
            {props.basketProps.cart.map(item => (
                <div className="col-xl-3 col-sm-12 col-md-6 product">
                    <div className="item-product">
                        <img src={item.image} className="img-product" />
                        <p className="title-product">{item.name}</p>
                        <p className="price">Price : <strong>${item.price}</strong></p>
                        <p className="quantity">
                            <p>Quantity :</p> 
                            <span >
                                <ion-icon rel={item.id} name="remove-outline" onClick={() => props.productQuantity('DOWN_PRODUCT' , item.id)} ></ion-icon>
                            </span> 
                            <i>{item.quantity}</i>
                            <span >
                                <ion-icon name="add-outline" onClick={() => props.productQuantity('UP_PRODUCT' , item.id)} ></ion-icon>
                            </span>
                        </p>
                    </div>
                </div>
            ))}       
            

        </div>
    );
}
const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps, {productQuantity})(Cart);