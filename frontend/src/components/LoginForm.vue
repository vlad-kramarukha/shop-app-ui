<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ErrorObject, useVuelidate } from '@vuelidate/core'
import { email, helpers, minLength, required } from '@vuelidate/validators'
import useAuthService from '../services/auth-service'
import { omit } from 'lodash'

const { withMessage } = helpers

export type FormMode = 'reg' | 'log'

interface Fields {
	nickname: string
	email: string
	password: string
}

interface LoginFormProps {
	mode: FormMode
}

interface LoginFormEmits {
	(event: 'update:mode', value: string): void
}

const props = defineProps<LoginFormProps>()

const emit = defineEmits<LoginFormEmits>()

const { authentication, registration } = useAuthService()

const loadingForm = ref(false)

const fields = reactive<Fields>({
	nickname: '',
	email: '',
	password: ''
})

const formMode = computed({
	get() {
		return props.mode
	},
	set(newValue) {
		v$.value.$reset()
		emit('update:mode', newValue)
	}
})

const isLogin = computed(() => formMode.value === 'log')

const rules = {
	nickname: {
		required: withMessage('Обязательное поле', required)
	},
	email: {
		email: withMessage('Невалидная почта', email),
		required: withMessage('Обязательное поле', required)
	},
	password: {
		minLength: withMessage('Пароль должен быть не меньше 8 символов', minLength(8)),
		required: withMessage('Обязательное поле', required)
	}
}

const computedRules = computed(() => (isLogin.value ? omit(rules, 'nickname') : rules))

const v$ = useVuelidate(computedRules, fields)

const form = ref<HTMLFormElement>()

const titleText = computed(() => (isLogin.value ? 'Вход в аккаунт' : 'Регистрация аккаунта'))
const changeFromModeBtnText = computed(() => (isLogin.value ? 'Создать аккаунт' : 'Уже есть аккаунт'))
const actionBtnText = computed(() => (isLogin.value ? 'Войти' : 'Создать'))

const errorMessage = computed(() => {
	return (field: string) => v$.value[field].$errors.map((e: ErrorObject) => e.$message)
})

function changeFormMode() {
	formMode.value = isLogin.value ? 'reg' : 'log'
}

async function onSubmit() {
	const isValid = await v$.value.$validate()

	if (isValid) {
		loadingForm.value = true

		if (isLogin.value) {
			const { email, password } = fields
			await authentication({ email, password })
		} else {
			await registration(fields)
		}

		loadingForm.value = false
	}
}
</script>

<template>
	<VCard color="primary" :loading="loadingForm" flat class="drop-shadow w-96 rounded-lg px-4 py-4">
		<VCardTitle>{{ titleText }}</VCardTitle>
		<VCardText>
			<VForm @keydown.enter.prevent="onSubmit" ref="form">
				<VRow no-gutters>
					<VCol cols="12">
						<VSlideYTransition hide-on-leave>
							<VTextField
								v-if="!isLogin"
								v-model:model-value.trim="fields.nickname"
								density="compact"
								label="Имя пользователя"
								:error-messages="errorMessage('nickname')"
								variant="outlined"
							>
								<template #prepend-inner>
									<VIcon icon="mdi-account" />
								</template>
							</VTextField>
						</VSlideYTransition>
					</VCol>

					<VCol cols="12">
						<VTextField
							v-model:model-value.trim="fields.email"
							label="Почта"
							:error-messages="errorMessage('email')"
							density="compact"
							variant="outlined"
						>
							<template #prepend-inner>
								<VIcon icon="mdi-email" />
							</template>
						</VTextField>
					</VCol>

					<VCol cols="12">
						<VTextField
							v-model:model-value.trim="fields.password"
							label="Пароль"
							:error-messages="errorMessage('password')"
							density="compact"
							variant="outlined"
							type="password"
						>
							<template #prepend-inner>
								<VIcon icon="mdi-lock" />
							</template>
						</VTextField>
					</VCol>
				</VRow>
			</VForm>
		</VCardText>
		<VCardActions>
			<VRow no-gutters justify="space-between" class="px-2">
				<VCol cols="auto">
					<VBtn @click="changeFormMode">{{ changeFromModeBtnText }}</VBtn>
				</VCol>

				<VCol cols="auto">
					<VBtn class="shadow" @click="onSubmit">{{ actionBtnText }}</VBtn>
				</VCol>
			</VRow>
		</VCardActions>
	</VCard>
</template>

<style scoped></style>