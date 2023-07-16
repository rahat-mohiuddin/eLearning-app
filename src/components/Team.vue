<script setup></script>
<template>
    <div class="row">
        <div class="col-sm-3">
            <div class="card el-team-card">
                <div class="el-team-img">
                    <div class="el-team-overlay">
                        <ul class="el-team-social">
                            <li>
                                <a href="#"><fa :icon="['fab','facebook']"/></a>
                            </li>
                            <li>
                                <a href="#"><fa :icon="['fab','whatsapp']"/></a>
                            </li>
                            <li>
                                <a href="#"><fa :icon="['fab','github']"/></a>
                            </li>
                        </ul>
                    </div>
                    <router-link to="#">
                        <img src="../assets/images/team1.png" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-member-name" to="#">Kudrot Ali Khan</router-link>
                    <p class="el-member-designation">Web Developer</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card el-team-card">
                <div class="el-team-img">
                    <div class="el-team-overlay">
                            <ul class="el-team-social">
                                <li>
                                    <a href="#"><fa :icon="['fab', 'facebook']"/></a>
                                </li>
                                <li>
                                    <a href="#"><fa :icon="['fab', 'whatsapp']"/></a>
                                </li>
                                <li>
                                    <a href="#"><fa :icon="['fab', 'github']"/></a>
                                </li>
                            </ul>
                        </div>
                    <router-link to="#">
                        <img src="../assets/images/team2.jpg" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-member-name" to="#">Abdul Jabbar</router-link>
                    <p class="el-member-designation">UI/UX Designer</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card el-team-card">
                <div class="el-team-img">
                    <div class="el-team-overlay">
                            <ul class="el-team-social">
                                <li>
                                    <a href="#"><fa :icon="['fab', 'facebook']"/></a>
                                </li>
                                <li>
                                    <a href="#"><fa :icon="['fab', 'whatsapp']"/></a>
                                </li>
                                <li>
                                    <a href="#"><fa :icon="['fab', 'github']"/></a>
                                </li>
                            </ul>
                        </div>
                    <router-link to="#">
                        <img src="../assets/images/team3.png" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-member-name" to="#">Aklima Khatun</router-link>
                    <p class="el-member-designation">QA Engineer</p>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card el-team-card">
                <div class="el-team-img">
                    <div class="el-team-overlay">
                            <ul class="el-team-social">
                                <li>
                                    <a href="#"><fa :icon="['fab', 'facebook']"/></a>
                                </li>
                                <li>
                                    <a href="#"><fa :icon="['fab', 'whatsapp']"/></a>
                                </li>
                                <li>
                                    <a href="#"><fa :icon="['fab', 'github']"/></a>
                                </li>
                            </ul>
                        </div>
                    <router-link to="#">
                        <img src="../assets/images/team4.png" class="card-img-top">
                    </router-link>
                </div>
                <div class="card-body">
                    <router-link class="el-member-name" to="#">Sokina Begum</router-link>
                    <p class="el-member-designation">Graphic Designer</p>
                </div>
            </div>
        </div>
    </div>
</template>