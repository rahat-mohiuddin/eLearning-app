<script setup></script>
<template>
    <footer>
        <div class="container-fluid">
            <div class="row">
            <div class="col-sm-6">
                <p>&copy; 2023 Dataaxes. Design with <fa icon="heart"/> by <span>Mohiuddin Rahat</span></p>
            </div>
            <div class="col-sm-6">
                <ul class="el-social-icon text-end">
                    <li><a href="#"><fa :icon="['fab', 'facebook']"/></a></li>
                    <li><a href="#"><fa :icon="['fab', 'twitter']"/></a></li>
                    <li><a href="#"><fa :icon="['fab', 'instagram']"/></a></li>
                    <li><a href="#"><fa :icon="['fab', 'youtube']"/></a></li>
                    <li><a href="#"><fa :icon="['fab', 'behance']"/></a></li>
                    <li><a href="#"><fa :icon="['fab', 'dribbble']"/></a></li>
                    <li><a href="#"><fa :icon="['fab', 'github']"/></a></li>
                </ul>
            </div>
        </div>
        </div>
    </footer>
</template>
<style lang="scss">
@import '../assets/css/variables.scss';
footer{
    padding: 1.5rem;
    color: $light-color;
    background-color: $dark-color;
    p{
        line-height: 33px;
    }
    .el-social-icon{
        li{
            display: inline-block;
            margin: 0 .5rem;
            height: 32px;
            width: 32px;
            line-height: 30px;
            text-align: center;
            border: 1px solid $light-color;
            border-radius: 5px;
            transition: all 0.4s ease;
            overflow: hidden;
            position: relative;
            &:hover{
                background-color: $brand-color;
            }
        }
    }
}
</style>