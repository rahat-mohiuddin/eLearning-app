<script>
import BlogPost from '../components/BlogPost.vue';
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
            <div class="mb-4">
                <BlogPost
                :link="blog.link"
                :image="blog.image"
                :title="blog.title"
                :category="blog.category"
                :categoryLink="blog.categoryLink"
                :publishDate="blog.publishDate"
                :postView="blog.postView"
            />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
            </nav>
        </div>
    </div>
</template>
<style></style>
