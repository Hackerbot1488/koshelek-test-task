<template>
<div class="table">
  <div class="table-header">
    <div class="table-row table-row_header">
      <div class="table-column">Amount</div>
      <div class="table-column">Price</div>
      <div class="table-column">Total</div>
    </div>
  </div>
  <div class="table-body">
    <div class="table-row" v-for="ask of data" :key="ask[0] + String(Math.random())">
      <div class="table-column">{{ ask[1] }}</div>
      <div class="table-column">{{ ask[0] }}</div>
      <div class="table-column">{{ ask[0] * ask[1] }}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  &-header {
    display: flex;
    flex-direction: column;
  }

  &-body {
    display: flex;
    flex-direction: column;
    /* overflow-y: scroll; */
    overflow-y: hidden;
    max-height: 100%;

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

      .table-row {
        max-width: 100%;
      }
    }
  }

  &-row {
    display: flex;
    transition: 0.5s;
    transition-property: background-color;
    cursor: pointer;
    max-width: calc(100% - 8px);

    &:hover {
      background-color: #b8b8b8;
    }

    &_header {
      /* max-width: 100% !important; */
      font-size: 20px;

      &:hover {
        background-color: #fff;
        cursor: default;
      }
    }
  }

  &-column {
    padding: 5px;
    text-align: center;
    flex: 1;
  }
}

@media (hover: none) and (pointer: coarse) {
  .table-body {
    overflow-y: auto;
  }

  .table-body:hover {
    overflow-y: scroll;
  }

  .table-row {
    max-width: 100%;
  }
}

@media (max-width: 1000px) {
  .table {
    &-column:last-child {
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .table {
    &-column {
      font-size: 10px;
    }
  }
}
</style>
