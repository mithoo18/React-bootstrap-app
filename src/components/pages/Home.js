import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/nw_images.jpg';



function Home(){
return (
    <div>
        <Slider/>
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="main-heading"> Our Company</h3>
                    <div className ="underline mx-auto"></div>
                <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <Link to ="/about" className ="btn-btn-warning shadow">Read More</Link>
                </div>
            </div>            
        </div>
    </section>
    {/*Our Vision & Mission */}
    <VMC/>
    
    {/*Our Service*/}
    <section className="section border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 ">
                    <h3 className="main-heading">Our Services</h3>
                    <div className ="underline mx-auto"></div>
                    </div>
                    
                    <div className ="col-md-4">
                        <div className = "card shadow">
                            <img src = {Service1} className="w-100 border bottom" alt ="Services"/>
                            <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                            <p>It is a long established fact that a reader will be distracted.</p>
                            <Link to="/services" className="btn btn-link">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className ="col-md-4">
                        <div className = "card shadow">
                            <img src = {Service1} className="w-100 border bottom" alt ="Services"/>
                            <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                            <p>It is a long established fact that a reader will be distracted.</p>
                            <Link to="/services" className="btn btn-link">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className ="col-md-4">
                        <div className = "card shadow">
                            <img src = {Service1} className="w-100 border bottom" alt ="Services"/>
                            <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                            <p>It is a long established fact that a reader will be distracted.</p>
                            <Link to="/services" className="btn btn-link">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
}

export default Home;