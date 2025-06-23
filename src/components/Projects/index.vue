<template>
  <div class="container" id="projects">
    <div class="content">
      <div class="title-mobile">
        <h4 class="title">Projects</h4>
      </div>
      <div class="list-container">
        <div v-for="(item, i) in projectsData" :key="i">
          <a :href="item.url" target="_blank" class="projects-card">
            <div class="projects-description">
              <div class="projects-header">
                <span class="projects-title">
                  {{ item.name }}
                </span>
              </div>
            </div>
            <div class="projects-tech" v-if="item.tech">
              <div class="tech-list" v-for="list in item.tech" :key="list">
                {{ list }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
buat
<script>
export default {
  name: 'AboutComponent',
  data() {
    return {
      projectsData: [
        {
          name: 'Foxinest',
          description: '',
          url: 'https://foxi-todo.netlify.app/',
          img: '',
          tech: ['React', 'Material UI', 'Netlify']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>