<script setup></script>
<template>
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center" style="height: 100vh;">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <div class="el-form-signup">
                            <div class="mb-3">
                                <h3 class="mb-1 text-uppercase">Register Today</h3>
                                <small class="text-muted">Fill in the data below.</small>
                            </div>
                            <form class="requires-validation">
                                <div class="col-md-12 mb-3">
                                    <input class="form-control" type="text" name="name" placeholder="Full Name" required>
                                    <div class="valid-feedback">Username field is valid!</div>
                                    <div class="invalid-feedback">Username field cannot be blank!</div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <input class="form-control" type="phone" name="phone" placeholder="Mobile Number" required>
                                    <div class="valid-feedback">Phone Number field is valid!</div>
                                    <div class="invalid-feedback">Phone Number field cannot be blank!</div>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <input class="form-control" type="email" name="email" placeholder="E-mail Address" required>
                                    <div class="valid-feedback">Email field is valid!</div>
                                    <div class="invalid-feedback">Email field cannot be blank!</div>
                                </div>
                            <div class="col-md-12 mb-3">
                                <input class="form-control" type="password" name="password" placeholder="Password" required>
                                <div class="valid-feedback">Password field is valid!</div>
                                <div class="invalid-feedback">Password field cannot be blank!</div>
                            </div>
                            <div class="col-md-12 mt-3 mb-3">
                                    <label class="mb-3 me-1" for="gender">Gender: </label>
                                    <input type="radio" class="btn-check" name="gender" id="male" autocomplete="off" required>
                                    <label class="btn btn-sm btn-outline-secondary me-1" for="male">Male</label>
                                    <input type="radio" class="btn-check" name="gender" id="female" autocomplete="off" required>
                                    <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>
                                    <div class="valid-feedback mv-up">You selected a gender!</div>
                                    <div class="invalid-feedback mv-up">Please select a gender!</div>
                                </div>
                                <div class="form-button mt-3">
                                    <button id="submit" type="submit" class="el-btn el-btn-primary el-btn-sm w-100">Register</button>
                                </div>
                            </form>
                            <router-link class="d-block text-center mt-3 text-muted" to="/user/login">Click here to Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>