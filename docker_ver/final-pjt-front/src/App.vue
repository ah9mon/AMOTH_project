<template>
  <v-app id="background">
    <v-main>
      <router-view/>
      <!-- menu button -->
      <MenuButton/>
    </v-main>
  </v-app>
</template>
<script>
import MenuButton from './components/MenuButton.vue';
import backgroundURL from '@/assets/Background.jpg'

export default {
  name: 'App',
  components: {
    MenuButton
  },
  computed: {
    profile_picture() {
      return this.$store.state.profile_picture
    },
		isDark() {
			return this.$vuetify.theme.dark
		}
  },
	watch: {
		isDark() {
      this.changeBackground()
		}
	},
  methods: {
		applyDarkMode() {
			this.$vuetify.theme.dark = this.$store.state.darkmode
		},
    changeBackground() {
      const lightBackground = `background-image: url(${backgroundURL});`
      const darkBackground = `background: ${this.$vuetify.theme.themes.dark.background};`
      const background = this.isDark ? darkBackground : lightBackground
      document.querySelector('#background').setAttribute('style', background)
    }
  },
  mounted() {
    this.applyDarkMode()
    this.changeBackground()
  }
};
</script>

<style>
.container {
  max-height: 90vh;
  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  width: 0.5em; /* 스크롤바 너비 */
}

.container::-webkit-scrollbar-track {
  background-color: transparent; /* 스크롤바 트랙 배경색 */
}

.container::-webkit-scrollbar-thumb {
  background-color: rgba(120, 120, 120, 0.5); /* 스크롤바 색상 */
}
</style>