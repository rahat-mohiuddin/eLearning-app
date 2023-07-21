<script>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    components: {
        Header,
        Footer,
        Sidebar
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
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">
                    <aside class="el-sidebar">
                        <Sidebar />
                    </aside>
                </div>
                <div class="col-sm-9 py-3">
                    <router-view/>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>