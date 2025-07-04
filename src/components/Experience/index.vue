<template>
  <div class="container experience" id="experience">
    <div class="content">
      <div class="title-mobile">
        <h4 class="title">Experience</h4>
      </div>
      <div class="list-container">
        <div v-for="(item, i) in experienceData" :key="i">
          <a :href="item.url" target="_blank" class="experience-card">
            <div class="experience-times">
              <span>{{ item.date }}</span>
              <p v-if="item.note" class="experience-note">{{ item.note }}</p>
            </div>
            <div class="experience-description">
              <div class="experience-times-mobile">
                <p class="experience-note">
                  {{ item.date }} <b v-if="item.note">( {{ item.note }} )</b>
                </p>
              </div>
              <div class="experience-header">
                <span class="experience-title">
                  {{ item.role }}
                </span>
              </div>
              <p class="experience-content">
                {{ item.description }}
              </p>
              <div v-if="item.project">
                <div
                  v-for="(project, j) in item.project"
                  :key="j"
                  class="project-link">
                  <a
                    :href="project.url"
                    target="_blank"
                    style="text-decoration: none">
                    <div class="project-item" @click="handleProjectLink(i, j)">
                      <svg
                        style="margin-bottom: 12px;"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512">
                        <path
                          d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                      </svg>
                      <p style="margin-right: 20px">{{ project.name }}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="experience-tech" v-if="item.tech">
                <div class="tech-list" v-for="list in item.tech" :key="list">
                  {{ list }}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        style="
          text-decoration: none;
          color: #ff7800;
          display: flex;
          align-items: center;
        ">
        <p class="full-resume">View Full Résumé</p>
        <svg style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExperienceComponent",
    data() {
      return {
        experienceData: [
          {
            date: "2022 — Present",
            note: "",
            role: "Frontend Engineer, PT.Kali Besar Raya Utama",
            description:
              "Develop and maintain key components for both the front office and back office (dashboard) of the Jagain.com insurance website. Work closely with cross-functional teams, including developers, designers, and product managers, to create seamless, user-friendly experiences for both customers and internal users. Advocate for best practices in web accessibility, performance, and security across the entire platform.Also contributed to SmartPremi, a PHP-based B2B insurance platform, by developing dynamic insurance forms tailored to business clients. Ensured scalability, maintainability, and optimal user experience in form creation and data handling processes.",
            tech: ["Javascript", "PHP", "Nuxt", "Vue", "React", "HTML & SCSS"],
            url: "https://www.kbru.co.id/",
            project: [
              {
                name: "jagain.com",
                url: "https://jagain.com",
              },
              {
                name: "smartpremi.com",
                url: "https://smartpremi.com",
              },
            ],
          },
          {
            date: "2020",
            note: "Apprenticeship",
            role: "Computer Engineering, Gardanet Solusindo",
            description:
              "Provide technical support and troubleshooting for internal systems and end users as part of the IT support team. Assist in maintaining hardware, software, and network infrastructure to ensure smooth day-to-day operations. Collaborate with developers, system administrators, and other teams to support system updates, resolve technical issues, and enhance overall IT performance. Promote best practices in system security, accessibility, and efficient technical workflows across the organization.",
            tech: ["IT Support"],
          },
        ],
      };
    },
    methods: {
      handleProjectLink(i, j) {
        window.open(this.experienceData[i].project[j].url, "_blank");
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
