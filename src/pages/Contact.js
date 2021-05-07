import React from 'react'

function Contactus() {
return(
    <div>
        <section className="py-4 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                       <h4>Contact Us</h4>
                    </div>

                    <div className="col-md-8 my-auto">
                       <h6 className="float-end">
                           Home / Contact Us
                       </h6>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
           <div className="container">
               <div className="card shadow">
                 <div className="card-body">
                   <div className="row">
                       <div className="col-md-6">
                           <h6>Contact Form</h6>
                           <hr />
                           <div className="form-group">
                               <label className="">Full Name</label><br />
                               <input type="text" name="" placeholder="Enter Full Name" />
                           </div>

                           <div className="form-group">
                               <label className="mt-3">Phone Number</label><br />
                               <input type="text" name="" placeholder="Enter Phone Number" />
                           </div>

                           <div className="form-group">
                               <label className="mt-3">Email Address</label><br />
                               <input type="text" name="" placeholder="Enter Email Address" />
                           </div>

                           <div className="form-group">
                               <label className="mt-3">Message</label><br />
                               <textarea rows="3" className="form-control" placeholder="Type your message...."></textarea>
                           </div>

                           <div className="form-group py-3">
                               <button type="button" className="btn btn-warning shadow w-100">Send Message</button>
                           </div>
                       </div>

                       <div className="col-md-6 border-start">
                           <h5 className="main-heading">Address Information</h5>
                           <div className="underline"></div>
                           <p>No1a Hughes Avenue, Alogomeji Yaba. Lagos</p>
                           <p>Phone: +23480845855**</p>
                           <p>Email: victorbiyi2010@gmail.com</p>
                       </div>


                   </div>
                </div>
               </div>
           </div>
      </section>
        
    </div>
)
}

export default Contactus;