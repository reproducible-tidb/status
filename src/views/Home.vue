<template>
  <div>
    <v-container fluid>
      <PrimaryView />
    </v-container>
  </div>
</template>

<script>
import PrimaryView from "@/components/Home/PrimaryView";

export default {
  name: "Home",
  components: { PrimaryView },
};
</script>
<style lang="scss" scoped></style>
