<template>
	<div class="body">
		<div class="sticky-content">
			<h1 class="p-3 mb-2 bg-secondary text-white">Pokedex</h1>
		</div>
		<br>
		<div class='itemContainer' v-if='loaded'>
			<div class="container">
				<div class="row">
					<div v-for='(item, index) in list' :key='index'>
						<div class="col-sm-3 col-xs-6">
							<div class="rounded-circle">
								<div class="router-link">
									<router-link :to="{name:'pokemon', params: {id:item.id,item:item}}">
										<img width="200" :src='item.sprites.other["official-artwork"].front_default'>
										<h4>{{ item.id }}. {{ item.name }}</h4>
									</router-link>
								</div>
							</div>
							<br>
						</div>
					</div>
				</div>
			</div>
		</div>
		<infinite-loading @infinite="infiniteHandler" spinner="spiral">
			<div slot="spinner">Loading...</div>
			<div slot="no-more">Completed</div>
		</infinite-loading>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'pokedex',
		data () {
			return {
				list: [],
				url: 'https://pokeapi.co/api/v2/pokemon/',
				loaded: true,
				page: 1,
				error: false,
				errorMessage: ''
			}
		},
		methods: {
			infiniteHandler($state) {
				axios
					.get(this.url + (this.page))
					.then(response => {
						if (this.page < 898) {
							this.list.push(response['data']);
							this.page += 1;
							$state.loaded();
						} else {
							$state.complete();
						}
					})
			},
		}
	}
</script>
<style scoped>
	.sticky-content {
		position: sticky;/*固定する*/
		top: 0;/*ブラウザの上からの距離はゼロ*/
		z-index: 2;
	}
	.body {
		background-image: url("../assets/nc140077.png");
		background-size: cover;
	}
	.rounded-circle {
		position:relative;
		width:300px;
		height:300px;
		background-color:lightcyan;
		z-index: 1;
	}
	.router-link {
		position: absolute;
		top: 5%;
		width :300px;
		text-align:center;
		
	}
</style>