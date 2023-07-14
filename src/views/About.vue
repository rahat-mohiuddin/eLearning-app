<script>
import { useRoute } from 'vue-router';
export default {
    setup(){
        const route = useRoute();
        const currentRouteName = route.name;
        return {
            currentRouteName
        }
    }
}
</script>
<template>
    <div class="el-title">
        <h1>{{ currentRouteName }}</h1>
    </div>
 <p>this is about page</p>
</template>
<style>
</style>
