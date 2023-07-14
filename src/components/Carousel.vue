<template>
    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in sliderItems" :key="slide.id">
        <div class="carousel__item">
            <div class="el-carousel" :style="{'background': slide.bgColor}">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="el-slide-text">
                            <h1 class="el-slide-title">{{ slide.title }}</h1>
                            <h4 class="el-slide-sub-title">{{ slide.subTitle }}</h4>
                            <p class="el-slide-disc">{{ slide.discription }}</p>
                        </div>
                        <div class="el-slide-btn">
                            <router-link class="btn text-light" :style="{'background': slide.btnColor}" :to="slide.btnLink">{{ slide.btnText }}</router-link>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <img class="el-slide-img" :src="slide.image">
                    </div>
                </div>
            </div>
        </div>
      </Slide>
  
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </template>
  
<script>
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default{
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data () {
        return {
            sliderItems: [
            {
                id: 1,
                title: 'Employer: Find the perfect match for your team',
                subTitle: '',
                discription: 'Need a smart Developer? Hire extremely hardworking, quick learners and ready to contribute. We trained them months after months to build the growth and learning mindset in them.',
                btnText: 'Explore More',
                btnLink: '',
                btnColor: '#05c34b',
                image: 'src/assets/images/employer.svg',
                bgColor: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
            },
            {
                id: 2,
                title: 'Learn Web development to get a job',
                subTitle: '',
                discription: 'Come and enjoy unlimited coding support, daily concept clear sessions, real-world projects, job placement service, and many more. And 70% of our successful students get hired internationally.',
                btnText: 'Go to Job Portal',
                btnLink: '',
                btnColor: '#5326d1',
                image: `src/assets/images/startup.svg`,
                bgColor: 'linear-gradient(38deg, rgba(91,174,255,1) 0%, rgba(140,236,255,1) 100%)'
            },
            {
                id: 2,
                title: 'Startup: Form your cost effective software',
                subTitle: 'Development team for your team',
                discription: 'Come and enjoy unlimited coding support, daily concept clear sessions, real-world projects, job placement service, and many more. And 70% of our successful students get hired internationally.',
                btnText: 'Start Now',
                btnLink: '',
                btnColor: '#f5d440',
                image: `src/assets/images/startup.svg`,
                bgColor: '#fff2b8'
            }
        ]
        }
    }
  }
</script>
  