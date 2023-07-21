<template>
    <div class="el-cta-card">
        <h1>Join <span>7,500+</span> Learner in Our Course</h1>
        <h2>Subscribe to Our Newsletter</h2>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Email..">
            <button class="el-btn el-btn-sm el-btn-light" type="button">Subscribe</button>
        </div>
        <p class="text-muted py-2">We update our all course day by day</p>
    </div>
    <div class="el-topic-card">
        <h1>Popular Topics</h1>
        <ul>
            <li>
                <router-link to="#">Cloud Computing</router-link>
            </li>
            <li>
                <router-link to="#">Website Security</router-link>
            </li>
            <li>
                <router-link to="#">Web Development</router-link>
            </li>
            <li>
                <router-link to="#">Web Designing</router-link>
            </li>
            <li>
                <router-link to="#">Internet Technology</router-link>
            </li>
            <li>
                <router-link to="#">Google API</router-link>
            </li>
            <li>
                <router-link to="#">Deep Learning</router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
.el-cta-card{
    padding: 1rem;
    border-radius: 3px;
    background-color: #2ee4f8;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    >h1{
        font-size: 1.5rem;
        margin-bottom: 2rem;
        span{
            font-size: 2rem;
            font-weight: 600;
            color: #fff;
        }
    }
    >h2{
        text-align: center;
        margin-bottom: 1rem;
    }
}
.el-topic-card{
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 3px;
    background-color: #fff;
    >h1{
        padding-bottom: 1rem;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 1rem;
    }
    ul{
        li{
            border-bottom: 1px solid #e6e6e6;
            a{
                padding: .5rem 0;
                display: inline-block;
            }
            &:hover{
                color: #07dd80;
            }
        }
    }
}
</style>