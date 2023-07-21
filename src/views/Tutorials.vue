<script>
import TutorialCard from '../components/TutorialCard.vue'
import LectureImg from '@/assets/images/angular-tutorials-for-beginners.jpg'
export default {
    components: {
        TutorialCard
    },
    data () {
        return {
            LectureImg: LectureImg,
            tutorialItems: [
                {
                    link: '/tuto/1',
                    title: 'Angular Tutorials for Beginners',
                    image: '/src/assets/images/angular-tutorials-for-beginners.jpg',
                    hours: '5.2 Hours',
                    leactures: '37 Leactures'
                },
                {
                    link: '/tuto/2',
                    title: 'ReactJS Tutorials for Beginners',
                    image: '/src/assets/images/react-js-tutorials-for-beginners.jpg',
                    hours: '4.7 Hours',
                    leactures: '63 Leactures'
                },
                {
                    link: '/tuto/3',
                    title: 'React Redux for Beginners',
                    image: '/src/assets/images/react-redux-category.jpeg',
                    hours: '2.5 Hours',
                    leactures: '21 Leactures'
                },
                {
                    link: '/tuto/4',
                    title: 'Nodejs Tutorials for Beginners',
                    image: '/src/assets/images/Nodejs-tutorials-for-beginners.jpg',
                    hours: '5.2 Hours',
                    leactures: '37 Leactures'
                },
                {
                    link: '/tuto/5',
                    title: 'MongoDB Courses for Beginners',
                    image: '/src/assets/images/mongodb-courses.jpeg',
                    hours: '4.7 Hours',
                    leactures: '63 Leactures'
                },
                {
                    link: '/tuto/6',
                    title: 'Mysql All You Need to Know',
                    image: '/src/assets/images/mysql-quiz-online.png',
                    hours: '2.5 Hours',
                    leactures: '21 Leactures'
                },
            ]
        }
    }
}
</script>
<template>
    <div class="row">
        <div class="col-sm-4" v-for="item in tutorialItems">
            <TutorialCard
            :link="item.link"
            :title="item.title"
            :image="item.image"
            :hours="item.hours"
            :lectures="item.leactures"
            />
        </div>
    </div>
</template>
<style></style>
