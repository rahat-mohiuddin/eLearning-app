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
        hours: {
            type: String,
            required: true
        },
        lectures: {
            type: String,
            required: true
        },

    }
}
</script>
<template>
    <div class="el-tutorial-card">
        <router-link :to="link">
            <div class="el-tutorial-img">
            <img :src="image" alt="">
            </div>
            <div class="el-tutorial-content">
                <h1 class="el-tutorial-title">{{ title }}</h1>
            </div>
        </router-link>
        <div class="el-tutorial-overlay">
            <p><fa :icon="['far','clock']"/><span>{{ hours }}</span></p>
            <p><fa :icon="['fas','list']"/><span>{{ lectures }}</span></p>
        </div>
    </div>
</template>
<style lang="scss">
    .el-tutorial-card{
        position: relative;
        width: 100%;
        height: auto;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 1rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        .el-tutorial-img{
            img{
                max-width: 100%;
                height: auto;
                display: block;
            }
        }
        .el-tutorial-content{
            padding: 1rem;
        }
        .el-tutorial-overlay{
            visibility: hidden;
            opacity: 0;
            color: #fff;
            position: absolute;
            bottom: 3.2rem;
            left: 0;
            padding: 1rem;
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(0, 0, 0, 0.694);
            transform: translateY(18px);
            transition: all .8s ease;
            span{
                margin-left: .5rem;
            }
        }
        &:hover{
            .el-tutorial-overlay{
                visibility: visible;
                opacity: 1;
                transform: none;
            }
        }
    }
</style>