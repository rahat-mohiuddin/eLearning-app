<template>
    <nav class="el-nav-menu">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <router-link class="nav-link" :to="item.link" @mouseover="toggleDropdown(item.id)" @mouseleave="closeDropdown(item.id)">{{ item.label }}</router-link>
            <ul class="el-dropdown" v-if="dropdowns[item.id]" @mouseover="cancelCloseDropdown(item.id)" @mouseleave="closeDropdown(item.id)">
              <li v-for="subItem in item.subItems" :key="subItem.id">
                <router-link class="nav-link" :to="subItem.link">{{ subItem.label }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
</template>
<script>
import { ref } from 'vue';
export default {
    // const siteUrl = import.meta.env.VITE_BUILD_ADDRESS;
    setup() {
        const navItems = [
            { id: 1, label: 'Home', link: '/' },
            { id: 2, label: 'Profile', link: '/profile' },
            { id: 3, label: 'About', link: '/about' },
            { id: 4, label: 'Services', link: '/services',
              subItems: [
                { id: 11, label: 'Course', link: '/course' },
                { id: 12, label: 'Tutorial', link: '/tutorial' },
                { id: 13, label: 'Application', link: '/application' },
                { id: 14, label: 'Blog', link: '/blog' }
              ]
            },
            { id: 5, label: 'Contact', link: '/contact' }
        ];
        const dropdowns = {};
        navItems.forEach(item => {
          dropdowns[item.id] = false;
        });

        const toggleDropdown = (itemId) => {
          dropdowns[itemId] = !dropdowns[itemId];
          console.log('warking')
        };

        const closeDropdown = (itemId) => {
          dropdowns[itemId] = false;
          console.log('warking too')
        };

        const cancelCloseDropdown = (itemId) => {
          console.log('warking three')
          clearTimeout(dropdownTimeouts[itemId]);
        };

        return {
          navItems,
          dropdowns,
          toggleDropdown,
          closeDropdown,
          cancelCloseDropdown,
        };
    },
}
</script>