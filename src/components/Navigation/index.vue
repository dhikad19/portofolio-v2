<template>
  <div class="navigation">
    <div
      class="navigation-item"
      v-for="item in navigationData"
      :key="item.val"
      @click="handleClick(item.val)"
    >
      <div :class="item.active ? 'navigation-line-active' : 'navigation-line'"></div>
      <p :class="item.active ? 'navigation-text-active' : 'navigation-text'">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import { useNavigationStore } from '../../stores/navigation';
import { mapState } from 'pinia';
export default {
  name: 'NavigationComponent',
  data() {
    return {
      isScrolling: false,
    };
  },
  computed: {
    ...mapState(useNavigationStore, ['navigationData'])
  },
  methods: {
    setActive(val) {
      const navigationStore = useNavigationStore();
      navigationStore.setActive(val);
    },

    handleClick(val) {
      if (this.isScrolling) return;

      const section = document.getElementById(val);
      if (section) {
        this.isScrolling = true;
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          this.isScrolling = false;
        }, 500);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>