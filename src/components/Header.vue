<script setup>
import navbar from './navbar.vue';
</script>
<template>
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2">
            <div class="brand">
              <router-link to="/">
                Data<span>axes</span>
              </router-link>
            </div>
          </div>
          <div class="col-sm-8">
            <navbar />
          </div>
          <div class="col-sm-2">
            <div class="el-login-btn">
              <div>
                <router-link class="el-btn el-btn-light el-btn-sm me-2" to="/user/login">Login</router-link>
                <router-link class="el-btn el-btn-sm el-btn-primary" to="/user/signup">Registration</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>
<style lang="scss">
@import '../assets/css/header.scss'
</style>