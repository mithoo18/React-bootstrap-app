import React from 'react';
import VMC from './inc/Vmc';

function Aboutus(){
return (
    <div className="container">
        <section className="py-4 big-info">
            <div className="row">
                <div className="col-md-4 my-auto">
                    <h4>About Us</h4>
                </div>
                <div className="col-md-4 my-auto">
                    <h6 className="float-end">
                        Home / About Us
                    </h6>
                </div>
            </div>
        </section>
        <section className="section border-bottom">
            <div className="container">
                <h5 className="main-heading">Our Company</h5>
                <div className="underline"></div>
                <p>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
            </div>
        </section>
   {/*Our Vision & Mission */}
   <VMC/>
    </div>
);
}

export default Aboutus;