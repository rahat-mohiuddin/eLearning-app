<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        categoryLink: {
            type: String,
            required: true
        },
        publishDate: {
            type: String,
            required: true
        },
        postView: {
            type: String,
            required: true
        },
        customClass: {
            type: String,
            required: false
        }

    }
}
</script>
<template>
    <article class="el-blog-card card" :class="customClass">
        <div class="el-blog-img">
            <router-link :to="link">
                <img :src="image" class="card-img-top">
            </router-link>
        </div>
        <div class="card-body">
            <router-link class="el-blog-category" :to="categoryLink">{{ category }}</router-link>
            <router-link class="el-blog-title" :to="link">{{ title }}</router-link>
            <div class="el-blog-meta">
                <span class="el-blog-date"><fa :icon="['far', 'calendar-days']" />{{ publishDate }}</span>
                <span class="el-blog-view-count"><fa :icon="['far','eye']"/>{{ postView }}</span>
            </div>
        </div>
    </article>
</template>