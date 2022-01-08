<template>
  <v-row no-gutters>
    <v-col cols="12" md="9">
      <v-col
        style="user-select: text; cursor: default"
        class="d-flex align-self-start"
      >
        <v-card width="100%" elevation="2" class="rounded-lg" outlined>
          <v-card-title class="headline justify-center pt-8">
            Reproducible Builds
          </v-card-title>
          <v-card-text class="text-center pb-8">
            <div class="pb-1">
              使 tidb
              以及周边组件能够可重现地构建。即任何人都能够从相同的源码库中构建出完全相同的二进制。
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pt-0">
        <v-item-group v-model="selected">
          <v-row>
            <v-item
              v-for="package_item in packages"
              :key="package_item.pkgname"
              v-slot:default="{ active, toggle }"
            >
              <PkgInfo :pkg="package_item" :active="active" :toggle="toggle" />
            </v-item>
          </v-row>
        </v-item-group>
      </v-col>
    </v-col>
    <v-col cols="12" md="3"> testx </v-col>
  </v-row>
</template>
<script>
import PkgInfo from "@/components/Home/PkgInfo";
import sitedata from "@/assets/data.json";

export default {
  components: {
    PkgInfo,
  },
  data: () => ({
    selected: null,
    status: null,
    packages: sitedata.packages,
  }),
};
</script>
