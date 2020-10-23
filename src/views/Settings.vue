<template>
<div class="settings">
  <div class="settings-column">
    <select @change="changeSymbol" v-model="selected">
      <option value="BTCUSDT">BTCUSDT</option>
      <option value="BNBBTC">BNBBTC</option>
      <option value="ETHBTC">ETHBTC</option>
    </select>
  </div>
  <div class="settings-column">
    <List :events="events" />
  </div>
</div>
</template>

<script>
import List from "@/components/List.vue";
export default {
  name: "Settings",
  data() {
    return {
      selected: "",
      events: [],
    };
  },
  computed: {
    depth() {
      return this.$store.getters.diff;
    },
  },
  watch: {
    depth() {
      console.log(this.depth);
      this.events.push(this.depth);
    },
  },
  methods: {
    async changeSymbol(e) {
      this.$store.commit("setSymbol", this.selected);
      this.$unsubscribe();
    },
  },
  mounted() {
    this.selected = this.$store.getters.symbol;
  },
  components: {
    List,
  },
};
</script>

<style lang="scss">
.settings {
  display: flex;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px;

  &-column {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .settings {
    flex-direction: column;

    &-column:first-child {
      padding-bottom: 10px;
    }
  }
}
</style>
