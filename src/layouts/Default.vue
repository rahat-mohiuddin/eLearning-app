<script>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Header,
        Footer
    },
    setup() {
        const route = useRoute();
        const currentRouteName = route.name;
        return {
            currentRouteName
        }
    }
}
</script>
<template>
    <Header />
    <main>
        <div class="el-title">
            <h1>{{ currentRouteName }}</h1>
        </div>
        <div class="container-fluid py-3">
            <div class="row">
                <div class="col-sm-3">
                    <aside class="el-sidebar">

                    </aside>
                </div>
                <div class="col-sm-9">
                    <router-view/>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>