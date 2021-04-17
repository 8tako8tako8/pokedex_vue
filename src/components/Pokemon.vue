<template>
	<div class="body">
		<h1 class="p-3 mb-2 bg-secondary text-white">Pokedex</h1>
		<b-button pill variant="primary" class="ml-3 mt-2" v-on:click='goBack'>back</b-button>
		<br>
		<br>
		<br>
		<br>
		<br>
		<h2>{{ $route.params.item.id }}. {{ $route.params.item.name }}</h2>
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-xs-6">
					<b-img width=300px :src='$route.params.item.sprites.other["official-artwork"].front_default'></b-img>
				</div>
				<div class="col-sm-3 col-xs-6">
					<br>
					<br>
					<div class="container">
						<div class="rounded" style="width:220px;height:100px;background-color:white;">
							<div class="ml-3">
								<h4>TYPE:</h4>
								<div class="text-right mr-5" v-for='(type, index) in $route.params.item.types' :key='index'>
									<h4>{{ type.type.name }}</h4>
								</div>
							</div>
						</div>
					</div>
					<br>
					<div class="container">
						<div class="rounded" style="width:220px;height:250px;background-color:white;">
							<div class="ml-3">
								<h3>base stats</h3>
								<h4>HP: {{ $route.params.item.stats[0].base_stat }}</h4>
								<h4>attack: {{ $route.params.item.stats[1].base_stat }}</h4>
								<h4>defense: {{ $route.params.item.stats[2].base_stat }}</h4>
								<h4>special-attack: {{ $route.params.item.stats[3].base_stat }}</h4>
								<h4>speed: {{ $route.params.item.stats[4].base_stat }}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		methods: {
			goBack () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.body {
		background-image: url("../assets/nc204756.png");
		background-size: cover;
	}
	h2 {
		text-align: center;
		padding: 1rem 2rem;
		color: #fff;
		background-image: -webkit-gradient(linear, left top, right top, from(#fa709a), to(#fee140));
		background-image: -webkit-linear-gradient(left, #fa709a 0%, #fee140 100%);
		background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
	}
</style>