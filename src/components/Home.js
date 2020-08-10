import React from 'react';
import '../styles/index.css';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    let listProduct = [
        {
            id: 1,
            name : "Product Electronic 1",
            image : "https://seal.deha.vn/wp-content/uploads/2017/08/products.jpg",
            sale : "1.200",
            price : "800",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id: 2,
            name : "Product Electronic 2",
            image : "https://vn.canon/media/migration/shared/live/products/EN/eos6d-mkii-ef-24-70m-l.png",
            sale : "1.100",
            price : "600",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id: 3,
            name : "Product Electronic 3",
            image : "https://elcopcbonline.com/var/photo/product/2000x4000/112/368/huf-converse-product-red-skidgrip-1.jpg",
            sale : "1.500",
            price : "1.000",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id: 4,
            name : "Product Electronic 4",
            image : "http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2-300x286.jpg",
            sale : "1.200",
            price : "500",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ];
    let [message, setMessage] = React.useState("");
    function setCart(id){
        let myCart = JSON.parse(localStorage.getItem('myCart'));
        let dataNew = {
            id : 0,
            name : '',
            image : '',
            quantity : 1,
            price : 0
        }
        listProduct.map(item => {
            if(item.id == id){
                dataNew.id = id;
                dataNew.name = item.name;
                dataNew.image = item.image;
                dataNew.price = item.price;
            }
        });
        if(myCart){
            let flag = 0;
            myCart.map(item => {
                if(item.id == id){
                    flag = 1;
                }
            });
            if(flag == 0){
                myCart.push(dataNew);
                localStorage.setItem('myCart', JSON.stringify(myCart));
                props.addBasket();
                setMessage('Add to cart success!');
            }else{
                setMessage('The product already exists in the shopping cart.');
            }
        }else{
            myCart = [];
            myCart.push(dataNew);
            localStorage.setItem('myCart', JSON.stringify(myCart));
            props.addBasket();
            setMessage('Add to cart success!');
        }
    }
    return(
        
        <div className="list-product">
            {message != '' ?
                <p className="alert alert-primary">{message}</p>
            :null
            }
            
            {listProduct.map(item => (
                <div className="col-xl-3 col-sm-12 col-md-6 product">
                    <div className="item-product">
                        <img src={item.image} className="img-product" />
                        <p className="title-product">{item.name}</p>
                        <p className="des-product">{item.description}</p>
                        <p className="price">Price : <del>${item.sale}</del><strong>${item.price}</strong></p>
                        <div className="row">
                            <div className="btn-product btn btn-success">
                                <ion-icon name="bookmark-outline" ></ion-icon>
                                <p>Bookmark</p>
                            </div>
                            <div onClick={()=> setCart(item.id)} className="btn-product btn btn-danger">
                                <ion-icon name="cart-outline" ></ion-icon>
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}       
            

        </div>
    );
}
export default connect(null, {addBasket})(Home);