<template>
  <div class="container" id="projects">
    <div class="content">
      <div class="title-mobile">
        <h4 class="title">Projects</h4>
      </div>
      <div class="list-container">
        <div v-for="(item, i) in projectsData" :key="i">
          <a :href="item.url" target="_blank" class="projects-card">
            <img :src="item.img" class="img-project" />
            <div class="projects-right">
              <div class="projects-description">
                <div class="projects-header">
                  <span class="projects-title">
                    {{ item.name }}
                  </span>
                </div>
                <p class="projects-description">{{ item.description }}</p>
              </div>
              <div class="projects-tech" v-if="item.tech">
                <div class="tech-list" v-for="list in item.tech" :key="list">
                  {{ list }}
                </div>
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
    name: "AboutComponent",
    data() {
      return {
        projectsData: [
          {
            name: "Jagain",
            description:
              "Jagain.com is a modern insurance marketplace built with Nuxt.js, designed to help users easily discover, compare, and choose the right insurance products. Whether you're looking for health, life, vehicle, or property insurance, Jagain.com simplifies the process by offering a user-friendly platform with up-to-date information from various providers. With a focus on speed, accessibility, and seamless experience, Jagain.com empowers users to make informed insurance decisions—all in one place.",
            url: "https://jagain.com/",
            img: "/assets/projects/jagain.png",
            tech: ["Nuxt", "Vuetify", "Rest API"],
          },
          {
            name: "Foxinest",
            description:
              "Simple and intuitive to-do list app built with React, designed to boost personal productivity. It lets users easily add, edit, and delete tasks, with all data stored in the browser’s localStorage—ensuring tasks persist even after refreshing or closing the browser. With a clean, responsive design and no need for external databases or logins, Foxinest helps you stay organized effortlessly.",
            url: "https://foxi-todo.netlify.app/",
            img: "/assets/projects/foxinest.png",
            tech: ["React", "Material UI", "Netlify"],
          },
          {
            name: "Muze",
            description:
              "Modern and responsive landing page created for a music streaming app. Designed with a focus on clean visuals and smooth layout, Muze showcases the look and feel of a music app without any backend or download functionality. It serves as a front-end presentation, ideal for portfolios or concept demos.",
            url: "https://muzemusic.netlify.app/",
            img: "/assets/projects/muze.png",
            tech: ["React", "Netlify"],
          },
          {
            name: "Portfolio V1",
            description:
              "A portfolio website developed using Next.js, showcasing my work, skills, and experiences as a web developer. It serves as a central hub for clients, collaborators, and recruiters to learn more about me and view my past projects.",
            url: "https://foxi-code.netlify.app/",
            img: "/assets/projects/porto.png",
            tech: ["Next", "Material UI", "Netlify"],
          },
          {
            name: "Simply",
            description:
              "Simply is a modern, stylish, and responsive landing page for an online fashion store, crafted using React. Designed to provide a seamless and engaging user experience.",
            url: "https://simply-eshop.netlify.app/",
            img: "/assets/projects/simply.png",
            tech: ["React", "Netlify"],
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
