import React from 'react'
import image from '../Assets/double_phone_image.svg'
import productImg1 from '../Assets/product_img1.svg'
import productImg2 from '../Assets/product_img2.svg'
import productImg3 from '../Assets/product_img3.svg'

const Product = () => {
    return (
        <div className="product-section">
            <img className="image" src={image} alt="phones"/>
            <div className="line"></div>
            <div className="product-subheading">How the app works</div>
            <div className="out-product-container">
                <img className="prod_img" src={productImg1} alt="first"/>
                <div className="prod_img_content">
                    <div className="subtitle">Create an account</div>
                    <div className="firstContent">Create/login to an existing account to get started</div>
                    <div className="secondContent">An account is created with your email and existing password</div>
                </div>
            </div>
            
            <div className="out-product-container">
                <div className="prod_img_content middle_content">
                    <div className="subtitle">Explore varieties</div>
                    <div className="firstContent">Shop for your favorites meal as e dey hot.</div>
                    <div className="secondContent">Shop for your favorite meals or drinks and enjoy while doing it.</div>
                </div>
                <img src={productImg2} alt="second"/>
            </div>

            <div className="out-product-container">
                <img className="prod_img" src={productImg3} alt="third"/>
                <div className="prod_img_content">
                    <div className="subtitle">Checkout</div>
                    <div className="firstContent">When you done check out and get it delivered.</div>
                    <div className="secondContent">When you done check out and get it delivered with ease.</div>
                </div>
            </div>   
        </div>
    )
}

export default Product
