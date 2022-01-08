<template>
  <v-autocomplete
    v-model="searched"
    return-object
    flat
    :items="packages"
    item-text="name"
    item-value="name"
    :solo-inverted="!this.$vuetify.theme.dark"
    :solo="this.$vuetify.theme.dark"
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="label"
    class="hidden-sm-and-down"
    style="user-select: none"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>{{ $t("search.notFound") }}</v-list-item-title>
      </v-list-item>
    </template>
    <template v-slot:item="{ item }">
      <v-list-item-avatar
        color="primary"
        class="headline font-weight-light white--text"
      >
        <v-icon dark>mdi-{{ icon(item.icon) }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </v-list-item-action>
    </template>
  </v-autocomplete>
</template>
<script>
import data from "@/assets/packages.json";

export default {
  data: () => ({
    searched: null,
    packages: data.packages,
  }),
  methods: {
    icon: function (icon) {
      if (typeof icon != "undefined") {
        return icon;
      } else {
        return "package-variant-closed";
      }
    },
  },
  watch: {
    searched() {
      this.$router.push("/pkginfo/" + this.searched.pkgname);
    },
  },
};
</script>
