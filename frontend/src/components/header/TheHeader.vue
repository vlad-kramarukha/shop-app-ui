<script setup lang="ts">
import NavBar from './NavBar.vue'
import ActionsBar from './ActionsBar.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
</script>

<template>
	<VLayout>
		<VAppBar density="compact" color="primary" elevation="0" class="shadow">
			<template #title>Shop</template>

			<template #default>
				<VRow no-gutters align="center">
					<VCol cols="8">
						<NavBar />
					</VCol>
					<VCol cols="4">
						<VRow no-gutters justify="end" align="center">
							<ThemeSwitcher />
							<ActionsBar />
						</VRow>
					</VCol>
				</VRow>
			</template>

			<template #append>
				<VAvatar
					class="ml-6"
					image="https://sun9-20.userapi.com/impg/Xyzdg3QBtgId57iZNNlInLyMPxm3VVwGB5IVcA/Qnt6V0ioDHU.jpg?size=166x226&quality=96&sign=19d57273827624238025d0da7bbe12ca&type=album"
					color="surface-variant"
				></VAvatar>
			</template>
		</VAppBar>
	</VLayout>
</template>

<style scoped></style>
