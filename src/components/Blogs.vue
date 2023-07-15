<script setup></script>
<template>
    <div class="row">
        <div class="col-sm-4">
            <article class="el-blog-card card">
                <div class="el-blog-img">
                    <div class="el-blog-overlay">
                        <button class="btn">Read Blog</button>
                    </div>
                    <router-link to="#">
                        <img src="../assets/images/blog-1.jpg" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-blog-category" to="#">Quich Tips</router-link>
                    <router-link class="el-blog-title" to="#">Quick example build on the card title</router-link>
                    <div class="el-blog-meta">
                        <span class="el-blog-date"><fa :icon="['far', 'calendar-days']" /> 15 July 2023</span>
                        <span class="el-blog-view-count"><fa :icon="['far','eye']"/> 341</span>
                    </div>
                </div>
            </article>
        </div>
        <div class="col-sm-4">
            <article class="el-blog-card card">
                <div class="el-blog-img">
                    <div class="el-blog-overlay">
                        <button class="btn">Read Blog</button>
                    </div>
                    <router-link to="#">
                        <img src="../assets/images/blog-2.jpg" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-blog-category" to="#">Quich Tips</router-link>
                    <router-link class="el-blog-title" to="#">Quick example build on the card title</router-link>
                    <div class="el-blog-meta">
                        <span class="el-blog-date"><fa :icon="['far', 'calendar-days']" /> 15 July 2023</span>
                        <span class="el-blog-view-count"><fa :icon="['far','eye']"/> 341</span>
                    </div>
                </div>
            </article>
        </div>
        <div class="col-sm-4">
            <article class="el-blog-card card">
                <div class="el-blog-img">
                    <div class="el-blog-overlay">
                        <button class="btn">Read Blog</button>
                    </div>
                    <router-link to="#">
                        <img src="../assets/images/blog-3.jpg" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-blog-category" to="#">Quich Tips</router-link>
                    <router-link class="el-blog-title" to="#">Quick example build on the card title</router-link>
                    <div class="el-blog-meta">
                        <span class="el-blog-date"><fa :icon="['far', 'calendar-days']" /> 15 July 2023</span>
                        <span class="el-blog-view-count"><fa :icon="['far','eye']"/> 341</span>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="text-center my-3">
                <router-link class="btn el-button-primary" to="/blog">More Blog</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>