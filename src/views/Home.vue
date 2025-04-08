<template>
  <div class="home-container">
    <Cursor class="cursor" />
    <div class="container">
      <!-- <h1>{{ messageStore.message }}</h1>
      <button @click="changeMessage">Change Message</button> -->
      <div class="profile-container">
        <div class="profile">
          <Profile />
          <Social />
        </div>
      </div>
      <div class="content-container" ref="content" @scroll="onScroll">
        <About ref="about" />
        <Experience ref="experience" />
        <Projects ref="projects" />
      </div>
    </div>
  </div>
</template>

<script>
import About from '@/components/About'
import Experience from '@/components/Experience'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Social from '@/components/Social'
import Cursor from '@/components/Cursor'
import { useNavigationStore } from '@/stores/navigation';

export default {
  name: 'HomeView',
  components: {
    About,
    Experience,
    Profile,
    Social,
    Projects,
    Cursor
  },
  data() {
    return {
      aboutRef: null,
      experienceRef: null,
    }
  },
  methods: {
    onScroll() {
      const sections = [
        { name: 'about', ref: this.$refs.about },
        { name: 'experience', ref: this.$refs.experience },
        { name: 'projects', ref: this.$refs.projects },
      ];

      let activeSection = null;

      sections.forEach(section => {
        const rect = section.ref.$el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeSection = section.name;
        }
      });

      if (activeSection) {
        const navigationStore = useNavigationStore();
        navigationStore.setActive(activeSection);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media screen and (max-width: 1025px) {
    height: 100%;
  }
}

.cursor {
  @media screen and (max-width: 1025px) {
    display: none;
  }
}
</style>