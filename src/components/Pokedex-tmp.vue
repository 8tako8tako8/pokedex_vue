<template>
	<div class="body">
		<h1 class="p-3 mb-2 bg-secondary text-white">Pokedex</h1>
		<br>
		<div class='loader' v-if='!loaded && !error'><h2>Loading...</h2></div>
		<div class='error' v-if='error'>{{ errorMessage }}</div>
		<div class='itemContainer' v-if='loaded'>
			<div class="container">
				<div class="row">
					<div v-for='item in info' :key='item.id'>
						<div class="col-sm-3 col-xs-6">
							<div style="width:150px;height:150px;background-color:lightcyan;text-align:center;line-height:55px;" class="rounded-circle">
								<img :src='item.sprites.front_default'><br>
								<router-link :to="{name:'pokemon', params: {id:item.id,item:item}}">{{ item.id }}. {{ item.name }}</router-link>
							</div>
							<br>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				info: [],
				limit: 151,
				offset: 0,
				url: 'https://pokeapi.co/api/v2/pokemon/',
				loaded: false,
				error: false,
				errorMessage: ''
			}
		},
		methods: {
			async get_monsters_name () {
				if (this.limit < 0 || this.offset < 0)
				{
					this.loaded = true;
					this.error = true;
					this.errorMessage = 'Invalid value (limit, offset)';
					return ;
				}				
				for (let i = this.offset; i < this.offset + this.limit; i++) {
					await axios
						.get(this.url + (i + 1))
						.then(response => {
							this.info.push(response['data']);
						})
						.catch(error => {
							this.error = true;
							this.errorMessage = error;
						})
					if (this.error === true) {
						break;
					}
				}
				if (this.info.length === this.limit)
					this.loaded = true;
			}
		},
		created() {
			this.get_monsters_name();
		}
	}
</script>
<style scoped>
	.body {
		background-image: url("../assets/nc140077.png");
		background-size: cover;
	}
</style>
