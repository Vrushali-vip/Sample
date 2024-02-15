import React from 'react'

function contactus() {
  return (
   <div>
   <div className="container mt-5 py-5 ">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h4>Contact Us</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label for="username">Username:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
                        </div>
                        <div className="form-group mb-2">
                            <label for="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                        </div>
                        <div className="form-group mb-2">
                        <label for="message">Message:</label>
                            <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-dark btn-block mb-2 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>


  )
}

export default contactus;
