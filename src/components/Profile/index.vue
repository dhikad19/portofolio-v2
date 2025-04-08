<template>
  <div>
    <div class="content">
      <h1 class="profile-heading" to="/">Dwi Andika</h1>
      <h3 class="profile-profession">Front End Engineer</h3>
      <p class="profile-description">
        I craft seamless, 
        user-friendly web interfaces with a focus on detail and accessibility.
      </p>
    </div>
    <Navigation class="navigation" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'AboutComponent',
  components :{
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>