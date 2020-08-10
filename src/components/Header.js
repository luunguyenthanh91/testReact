import React, { useEffect } from 'react';
import '../styles/header.css';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { getNumbers } from '../actions/getAction';


const Header = (props) => {
    
    useEffect(() => {
        getNumbers();
    }, []);
    const [open, setOpen] = React.useState(false);
    return(
        <div className="header">
            <div className="col-xl-3 col-sm-6 col-md-3 logo">
                <img src={logo} className="logoHeader" />
            </div>
            <ion-icon name="menu-outline" class="menuOpen" onClick={() => { setOpen(!open); }}></ion-icon>
            <div className="col-xl-9 col-sm-6 col-md-9 menuHeader" style={{display:open ? "block" : "none" }}>
                <ion-icon name="close-outline" class="menuClose" onClick={() => { setOpen(!open); }} ></ion-icon>
                <ul className="listMenu">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                </ul>
            </div>

            <a href="/cart" className="cartLogo">
                <ion-icon name="cart-outline" ></ion-icon>
                <p className="countCart">{props.basketProps.basketNumber}</p>
            </a>
            
            
        </div>
    );
}
const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps, {getNumbers})(Header);