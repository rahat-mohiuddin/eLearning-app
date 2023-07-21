<script>
import BlogPost from './BlogPost.vue';
export default {
    components: {
        BlogPost
    },
    data () {
        return {
            blogPosts: [
                {
                    link: '/',
                    title: 'Quick example build on the card title',
                    image: '/src/assets/images/blog-1.jpg',
                    category: 'Quich Tips',
                    categoryLink: '/',
                    publishDate: '15 July 2023',
                    postView: '341'
                },
                {
                    link: '/',
                    title: 'Artificial Intelligence (AI) Revolution',
                    image: '/src/assets/images/blog-2.jpg',
                    category: 'Tech World',
                    categoryLink: '/',
                    publishDate: '06 July 2023',
                    postView: '5037'
                },
                {
                    link: '/',
                    title: '8 Advantages of Online Communication',
                    image: '/src/assets/images/blog-3.jpg',
                    category: 'Business & Communication',
                    categoryLink: '/',
                    publishDate: '21 March 2023',
                    postView: '9711'
                },
            ]
        }
    }
}
</script>
<template>
    <div class="row">
        <div class="col-sm-4" v-for="blog in blogPosts">
            <article class="el-blog-card card">
                <div class="el-blog-img">
                    <router-link :to="blog.link">
                        <img :src="blog.image" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-blog-category" :to="blog.categoryLink">{{ blog.category }}</router-link>
                    <router-link class="el-blog-title" :to="blog.link">{{ blog.title }}</router-link>
                    <div class="el-blog-meta">
                        <span class="el-blog-date"><fa :icon="['far', 'calendar-days']" />{{ blog.publishDate }}</span>
                        <span class="el-blog-view-count"><fa :icon="['far','eye']"/>{{ blog.postView }}</span>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="text-center my-3">
                <router-link class="el-btn el-btn-primary" to="/blog">More Blog</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>