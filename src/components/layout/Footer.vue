<template>
  <v-footer color="primary" dark inset class="pt-3 pb-3">
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn
          text
          icon
          @click="openLink('https://github.com/reproducible-tidb')"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-col>
      <v-divider class="ma-1" />
      <v-col cols="12">
        Reproducible Builds &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    openLink: function (url) {
      window.open(url, "_blank");
    },
  },
};
</script>
