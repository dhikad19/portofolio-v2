<template>
  <div 
    class="cursor"
    :style="{
      left: cursorPosition.x + 'px', 
      top: cursorPosition.y + 'px',
      transform: 'translate(-50%, -50%)'
    }">
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursorPosition: {
        x: 0,
        y: 0
      }
    };
  },
  name: 'CursorComponent',
  methods: {
    updateCursorPosition(event) {
      this.cursorPosition.x = event.clientX;
      this.cursorPosition.y = event.clientY;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.updateCursorPosition);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateCursorPosition);
  }
};
</script>

<style scoped lang="scss">
  @import './style.scss'
</style>
