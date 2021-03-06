<template>
  <div
    v-if="mounted"
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import { Screen } from 'quasar'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  data() {
    return {
      isSidebarOpen: false,
      mounted: false
    }
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    this.mounted = true
    // console.log('pages: ', this.$site.pages)
    // console.log('page: ', this.$page)
    // console.log('screen: ', Screen)
    const min = Math.min(window.innerHeight, window.innerWidth)
    if (Screen.gt.sm) document.documentElement.style.fontSize = `${0.015 * min}px`
    // console.log('mounted: ', window.innerHeight, window.innerWidth, min, document.documentElement.style)
  },
  updated() {
    // replace all table with q-table instances
    const tables = document.getElementsByTagName('table')
    for (const tbl of tables) {
      // skip processed
      if (
        tbl.parentNode &&
        Array.from(tbl.parentNode.classList).includes('q-markup-table')
      )
        continue

      const tbl_ = tbl
      const parent = tbl.parentNode

      const qtable = document.createElement('div')
      qtable.classList.add(
        'q-markup-table',
        'q-table__container',
        'q-table__card',
        'q-table--horizontal-separator'
      )

      parent.replaceChild(qtable, tbl)
      tbl_.classList.add('q-table')
      qtable.appendChild(tbl_)
    }
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>