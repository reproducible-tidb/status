<template>
  <v-col cols="12" md="6" lg="4" sm="6">
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          style="overflow: hidden"
          class="transition-swing rounded-lg"
          :class="`elevation-${hover ? 4 : 1}`"
          @click="card_click"
          :id="'infocard-' + pkg.name"
          :loading="loading"
          outlined
        >
          <v-icon large class="dashboard-icon">mdi-{{ icon }}</v-icon>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4" style="flex: unset">test</div>
              <v-spacer style="flex: unset" />
              <v-chip
                class="overline mb-4"
                style="flex: unset"
                :color="statusChip.color"
                small
                >{{ statusChip.text }}</v-chip
              >

              <v-list-item-title class="headline mb-2"
                ><v-icon left>mdi-{{ icon }}</v-icon
                >{{ pkg.name }}</v-list-item-title
              >
              <v-list-item-subtitle v-if="loading"
                >加载中...</v-list-item-subtitle
              >
              <v-list-item-subtitle v-else
                >最近构建：{{ statusInfo }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>
    </v-hover>
  </v-col>
</template>
<script>
import { DateParser } from "@/utils/DateUtil";
import sitedata from "@/assets/data.json";
import demodata from "@/assets/demo.json";

export default {
  props: ["pkg", "active", "toggle"],
  data: () => ({
    loading: true,
    demodata: demodata,
    datalist: [],
  }),
  methods: {
    card_click: function () {
      this.$router.push("/pkginfo/" + this.pkg.pkgname);
    },
  },
  computed: {
    is_failed: function () {
      if (this.pkg.status != null) return this.pkg.status[0] === "F";
      else return false;
    },
    icon: function () {
      if (typeof this.pkg.icon != "undefined") {
        return this.pkg.icon;
      } else {
        return "package-variant-closed";
      }
    },
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
    statusInfo: function () {
      let timestamp = -1;
      this.datalist.forEach((builder) => {
        if (builder.result.timestamp > timestamp)
          timestamp = builder.result.timestamp;
      });
      if (timestamp == -1) return "未有构建";
      return DateParser(new Date(timestamp * 1000));
    },
  },
  mounted: function () {
    setTimeout(() => {
      sitedata.builders.forEach((builder) => {
        builder.result = demodata;
        this.datalist.push(builder);
      });
      this.loading = false;
    }, 1500);
  },
};
</script>
<style lang="scss" scoped>
.dashboard-icon {
  position: absolute !important;
  right: 0;
  bottom: -10px;
  font-size: 100px !important;
  opacity: 0.25;
}
</style>
