<script setup lang="ts"></script>

<template>
	<VCol cols="auto">
		<VTooltip text="Личный кабинет" location="bottom">
			<template #activator="{ props }">
				<VBtn :="props" icon="mdi-account-outline" />
			</template>
		</VTooltip>
	</VCol>

	<VCol cols="auto">
		<VTooltip text="Избранное" location="bottom">
			<template #activator="{ props }">
				<VBtn :="props" icon="mdi-heart-outline" />
			</template>
		</VTooltip>
	</VCol>

	<VCol cols="auto">
		<VTooltip text="Корзина" location="bottom">
			<template #activator="{ props }">
				<VBtn :="props" icon="mdi-cart-outline" />
			</template>
		</VTooltip>
	</VCol>
</template>

<style scoped></style>