<script setup>
import Header from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
import BlogPost from '../components/Blogs.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Header/>
  <main>
    <section class="el-hero-section">
      <Carousel/>
    </section>
    <section class="el-blog-section">
      <div class="el-section-title">
        <h1>Our Journal</h1>
        <p>Here are the latest company news from our blog that got the most attention.</p>
      </div>
      <div class="container">
        <BlogPost />
      </div>
    </section>
    <section class="el-team-section">
      <div class="el-section-title">
        <h1>Our Team</h1>
        <p>Start working with us we can provide everything you need to generate awareness.</p>
        <div class="container"></div>
      </div>
    </section>
  </main>
  <Footer/>
</template>
<style lang="scss">
@import '../assets/css/main.scss';
</style>
