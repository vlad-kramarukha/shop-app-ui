<script setup lang="ts"></script>

<template>
	<RouterView #component="component">
		<VScaleTransition>
			<Component :is="component"></Component>
		</VScaleTransition>
	</RouterView>
</template>

<style scoped></style>
