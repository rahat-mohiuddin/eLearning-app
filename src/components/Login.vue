<script setup></script>
<template>
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center" style="height: 100vh;">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h1 class="text-center">Login</h1>
                    </div>
                    <div class="card-body">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button class="el-btn block el-btn-primary el-btn-sm mt-2">Login</button>
                        <router-link class="d-block text-center mt-3" to="/">Back to Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>