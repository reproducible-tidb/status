<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        {{ $route.name }} | Reproducible Builds</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-btn icon target="https://github.com/reproducible-tidb">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
