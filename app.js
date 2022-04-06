const app = Vue.createApp({})
  .component("alert-notification", {
    template: "#alert-notification-template",
    props: {
      type: String,
      header: String,
    },
    data() {
      return {
        isShow: true,
      };
    },
    methods: {
      close() {
        this.isShow = false;
      },
    },
  })
  .mount("#app");
