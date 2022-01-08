<template>
  <v-container fluid>
    <v-card class="mb-4 pa-4 pb-0">
      <v-card-title class="text-h3"
        ><v-icon x-large left>mdi-{{ icon }}</v-icon> {{ pkginfo.name }}
      </v-card-title>
      <v-card-subtitle class="text-h5">
        Checksum 检查状态：
        <v-chip :color="statusChip.color">{{
          statusChip.text
        }}</v-chip></v-card-subtitle
      >
      <v-card-actions>
        <v-spacer />
        <span class="grey--text">构建更新时间: {{ last_updated }}</span>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-list>
        <v-skeleton-loader v-if="loading" type="list-item-avatar" />
        <v-list-item v-for="builder in builders" :key="builder.ciname">
          <v-list-item-avatar>
            <v-icon color="success" dark> mdi-check </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ builder.name }}</v-list-item-title>

            <v-list-item-subtitle
              >SHA256:
              c38a445858dfc331dfc95fcaaa653d0125cc5ccdedf03eb075b9644218b02375</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { DateParser } from "@/utils/DateUtil";
import sitedata from "@/assets/data.json";
import demodata from "@/assets/demo.json";

export default {
  data: () => ({
    builders: [],
    loading: true,
  }),
  mounted: function () {
    setTimeout(() => {
      sitedata.builders.forEach((builder) => {
        builder.result = demodata;
        this.builders.push(builder);
      });
      this.loading = false;
    }, 1500);
  },
  computed: {
    statusChip: function () {
      if (this.loading)
        return {
          color: "default",
          text: "加载中",
        };
      return {
        color: "success",
        text: "成功 (2/2)",
      };
    },
    last_updated: function () {
      if (this.loading) return "加载中...";
      let timestamp = -1;
      this.builders.forEach((builder) => {
        if (builder.result.timestamp > timestamp)
          timestamp = builder.result.timestamp;
      });
      if (timestamp == -1) return "未有构建";
      return DateParser(new Date(timestamp * 1000));
    },
    pkginfo: function () {
      return sitedata.packages.find((pkg) => {
        return this.$route.params.pkgname == pkg.pkgname;
      });
    },
    icon: function () {
      if (typeof this.pkginfo.icon != "undefined") {
        return this.pkginfo.icon;
      } else {
        return "package-variant-closed";
      }
    },
  },
};
</script>
