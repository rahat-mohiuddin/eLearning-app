<script></script>
<template>
    <div class="el-tutorial-card">
        <div class="el-tutorial-img">
            <img src="../assets/images/angular-tutorials-for-beginners.jpg" alt="">
        </div>
        <div class="el-tutorial-content">
            <h1 class="el-tutorial-title">Angular Tutorials For Beginners</h1>
        </div>
        <div class="el-tutorial-overlay">
            <p><fa :icon="['far','clock']"/><span>4.5 Hours</span></p>
            <p><fa :icon="['fas','list']"/><span>Lectures</span></p>
        </div>
    </div>
</template>
<style lang="scss">
    .el-tutorial-card{
        position: relative;
        width: 100%;
        height: auto;
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