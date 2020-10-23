<template>
	<div class="wrapper">
		<Loader v-if="loading" />
		<div class="tables" v-else>
			<div class="bid">
				<Table :data="bids" />
			</div>
			<div class="ask">
				<Table :data="asks" />
			</div>
		</div>
	</div>
</template>

<script>
import Table from "@/components/Table.vue";
import Loader from "@/components/Loader.vue";
export default {
	name: "Courses",
	components: {
		Table,
		Loader,
	},
	data() {
		return {
			symbols: ["BTCUSDT", "BNBBTC", "ETHBTC"],
			snapshot: {},
			loading: true,
			bids: [],
			asks: [],
		};
	},
	computed: {
		symbol() {
			return this.$store.getters.symbol;
		},
		depth() {
			return this.$store.getters.depth;
		},
	},
	watch: {
		async symbol() {
			await this.setSnapshot();
		},
		depth() {
			this.asks = [...this.depth.asks.reverse(), ...this.asks];
			this.bids = [...this.depth.bids.reverse(), ...this.bids];
		},
	},
	async mounted() {
		await this.setSnapshot();
		this.$subscribe(this.symbol, this.$store);
	},
	methods: {
		async setSnapshot() {
			this.loading = true;
			this.snapshot = await this.$getBinanceBody(this.symbol, this.$store);
			this.bids = this.snapshot.bids;
			this.asks = this.snapshot.asks;
			this.loading = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	flex: 1;
	overflow: hidden;
	display: flex;
}

.tables {
	display: flex;
	overflow: hidden;
	flex: 1;
	padding-bottom: 28px;
}

.bid,
.ask {
	display: flex;
	flex: 1;
}
</style>
