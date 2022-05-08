import React from 'react';

const Services = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center'>Our Service</h1>
            <div className='mt-5 py-5 ' style={{ backgroundColor: "rgba(128,128,128,.2)" }}>
                <div className='container '>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <div className='text-center p-3 col-md-3'>
                                <img height="95px" src="https://www.redbubble.com/explore/client/f01e676e8ca41e6eddea4c637522b16a.svg" alt="" />
                                <h3>Worldwide Shipping</h3>
                                <p>Available as Standard or Express Delivery</p>
                            </div>
                            <div className='text-center p-3 col-md-3'>
                                <img height="95px" src="https://www.redbubble.com/explore/client/4399b2507b789bbd378c3fbe71e23b16.svg" alt="" />
                                <h3 className=''>Secure Payments</h3>
                                <p>100% Secure payment with 256-bit SSL Encryption</p>
                            </div>
                            <div className='text-center p-3 col-md-3'>
                                <img height="95px" src="https://www.redbubble.com/explore/client/d13bc377413e95979719bf36f522db21.svg" alt="" />
                                <h3>Free Return</h3>
                                <p>Exchange or money back guarantee for all orders</p>
                            </div>
                            <div className='text-center p-3 col-md-3'>
                                <img height="95px" src="https://www.redbubble.com/explore/client/bd7df1563ed67eaef3fc82b2a423dffd.svg" alt="" />
                                <h3>Local Support</h3>
                                <p>24/7 Dedicated support</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;