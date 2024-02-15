import React from 'react';

function register() {
  return (
    <div>
      <div class="container mt-5 py-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h4>Register</h4>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group mb-2">
                            <label for="username">Username:</label>
                            <input type="text" class="form-control mb-2" id="username" placeholder="Enter your username"/>
                        </div>
                        <div class="form-group mb-2">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control mb-2" id="email" placeholder="Enter your email"/>
                        </div>
                        <div class="form-group mb-2">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control mb-2" id="password" placeholder="Enter your password"/>
                        </div>
                        <div class="form-group mb-2">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" class="form-control mb-2" id="confirmPassword" placeholder="Confirm your password"/>
                        </div>
                        <button type="submit" class="btn btn-outline-dark btn-block mb-2 ">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default register;
