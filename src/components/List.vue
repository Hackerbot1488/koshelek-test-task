<template>
<div class="list" ref="list">
  <div class="list__item" v-for="event of events" :key="event + String(Math.random())">
    <span>Symbol: {{ event.s }}</span>
    <span>Time(ms): {{ event.E }}</span>
    <span>Bids: {{ event.b.length }}</span>
    <span>Asks: {{ event.a.length }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  max-width: 400px;
  max-height: 500px;
  flex: 1;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  overflow-y: hidden;
  height: 100%;

  &::-webkit-scrollbar {
    background: #f1f1f1;
    border-radius: 10px;
    height: 8px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;

    &:hover {
      background-color: #555;
    }
  }

  &:hover {
    overflow-y: scroll;

    .list__item {
      max-width: 100%;
    }
  }

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    text-align: left;
    transition: 0.5s;
    transition-property: background-color;
    cursor: pointer;
    max-width: calc(100% - 8px);
    border-bottom: 1px solid #ccc;

    &:hover {
      background-color: #b8b8b8;
    }
  }
}

@media (hover: none) and (pointer: coarse) {
  .list {
    overflow-y: scroll;
  }

  .list:hover {
    overflow-y: scroll;
  }

  .list__item {
    max-width: 100%;
  }
}
</style>
