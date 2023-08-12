<script>
import BlogPost from '../components/BlogPost.vue';
export default {
    name: 'Quick example build on the card title',
    components: {
        BlogPost
    },
    data () {
        return {
            post: {
                    link: '/',
                    title: 'Quick example build on the card title',
                    image: '/src/assets/images/blog-1.jpg',
                    category: 'Quich Tips',
                    categoryLink: '/',
                    publishDate: '15 July 2023',
                    postView: '341'
                },
        }
    }
}
</script>
<template>
    <div class="row">
        <div class="col-12">
            <article class="el-blog-card card">
                <div class="el-blog-img">
                    <img :src="post.image" class="card-img-top">
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <router-link class="el-blog-category" :to="post.categoryLink">{{ post.category }}</router-link>
                        <div class="el-blog-meta">
                            <span class="el-blog-date"><fa :icon="['far', 'calendar-days']" /> {{ post.publishDate }}</span>
                            <span class="el-blog-view-count"><fa :icon="['far','eye']"/> {{ post.postView }}</span>
                        </div>
                    </div>
                    <h1 class="el-blog-title">{{ post.title }}</h1>
                    <div class="post-details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
.<style lang="scss" scoped>
@import '../assets/css/variables.scss';
.el-blog-card{
    .el-blog-title{
        color: $title-color;
        font-size: 2rem;
    }
    .post-details{
        margin-top: 1rem;
        border-top: 1px solid #ddd;
        p{
            margin: .6rem 0;
            color: $text-color;
            font-size: 1.3rem;
            line-height: 2rem;
        }
    }
}
</style>
