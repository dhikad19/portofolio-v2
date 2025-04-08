import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    navigationData: [
      { name: "About", val: "about", active: true },
      { name: "Experience", val: "experience", active: false },
      { name: "Projects", val: "projects", active: false },
    ],
  }),
  actions: {
    setActive(val) {
      // Reset all items to inactive
      this.navigationData.forEach((item) => (item.active = false));
      // Set the clicked item to active
      const item = this.navigationData.find((item) => item.val === val);
      if (item) {
        item.active = true;
      }
    },
  },
});
