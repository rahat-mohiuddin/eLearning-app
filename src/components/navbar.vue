<template>
  <nav class="el-nav-menu">
    <ul>
      <li v-for="(item, index) in navItems" :key="index" @mouseover="openDropdown(index)" @mouseleave="closeDropdown(index)">
        <router-link class="nav-link" :to="item.url">{{ item.label }}</router-link>
        <ul class="el-dropdown" v-if="item.dropdownItems && item.dropdownItems.length" :class="{ 'show-dropdown': item.showDropdown }">
          <li v-for="(dropdownItem, dropdownIndex) in item.dropdownItems" :key="dropdownIndex">
            <router-link class="nav-link" :to="dropdownItem.url">{{ dropdownItem.label }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'About',
          url: '/about',
          dropdownItems: []
        },
        {
          label: 'Our Team',
          url: '/our-team',
          dropdownItems: []
        },
        {
          label: 'Blog',
          url: '/blog'
        },
        {
          label: 'Services',
          url: '/services',
          dropdownItems: [
            {
              label: 'Cource',
              url: '/services/course'
            },
            {
              label: 'Tutorial',
              url: '/services/tutorial'
            },
            {
              label: 'Application',
              url: '/application'
            }
          ]
        },
        {
          label: 'Contact',
          url: '/contact'
        }
      ]
    };
  },
  methods: {
    openDropdown(index) {
      this.navItems[index].showDropdown = true;
    },
    closeDropdown(index) {
      this.navItems[index].showDropdown = false;
    }
  }
};
</script>
