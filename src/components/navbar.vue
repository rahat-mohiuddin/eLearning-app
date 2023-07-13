<template>
    <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <router-link :to="item.link">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
</template>
<script>
export default {
    // const siteUrl = import.meta.env.VITE_BUILD_ADDRESS;
    data() {
        return {
            menuItems: [
                { id: 1, label: 'Home', link: '/' },
                { id: 1, label: 'Profile', link: '/profile' },
                { id: 2, label: 'About', link: '/about' },
                { id: 3, label: 'Corse', link: '/course' },
                { id: 4, label: 'Contact', link: '/contact' }
            ]
        };
    }
}
</script>