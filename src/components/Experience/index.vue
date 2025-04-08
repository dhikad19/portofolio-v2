<template>
  <div class="container experience" id="experience">
    <div class="content">
      <div class="title-mobile">
        <h4 class="title">Experience</h4>
      </div>
      <div class="experience-card" v-for="(item, i) in experienceData" :key="i">
        <div class="experience-times">
          <span>{{ item.date }}</span>
        </div>
        <div class="experience-description">
          <div class="experience-times-mobile">
            <span>{{ item.date }}</span>
          </div>
          <div class="experience-header">
            <span class="experience-title">
              {{ item.role }}
            </span>
          </div>
          <p class="experience-content">
            {{ item.description }}
          </p>
          <div class="experience-tech" v-if="item.tech">
            <div class="tech-list" v-for="list in item.tech" :key="list">
              {{ list }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceComponent',
  data() {
    return {
      experienceData: [
        {
          date: '2022 — Present',
          role: 'Frontend Engineer, PT.Kali Besar Raya Utama · Jagain.com',
          description: 'Develop and maintain key components for both the front office and back office (dashboard) of the Jagain.com insurance website. Work closely with cross-functional teams, including developers, designers, and product managers, to create seamless, user-friendly experiences for both customers and internal users. Advocate for best practices in web accessibility, performance, and security across the entire platform.',
          tech: ['Javascript', 'Nuxt', 'Vue', 'React', 'HTML & SCSS']
        },
        {
          date: '2022 — Present',
          role: 'Frontend Engineer, PT.Kali Besar Raya Utama · Jagain.com',
          description: 'Develop and maintain key components for both the front office and back office (dashboard) of the Jagain.com insurance website. Work closely with cross-functional teams, including developers, designers, and product managers, to create seamless, user-friendly experiences for both customers and internal users. Advocate for best practices in web accessibility, performance, and security across the entire platform.',
          tech: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>