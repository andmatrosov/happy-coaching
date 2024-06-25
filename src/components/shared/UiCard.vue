<template>
	<div class="card">
		<div class="card__icon">
			<UiIcons :name="data.icon" />
		</div>
		<h3 class="card__title">
			{{ data.title }}
		</h3>
		<p class="card__description">{{ data.description }}</p>
	</div>
</template>

<script lang="ts" setup>
import UiIcons from '@/components/icons/UiIcons.vue'
import { type UiIconsType } from '@/types/UiIconsType'

type Props = {
	data: {
		icon: UiIconsType,
		title: string,
		description: string
		bordered?: boolean
	}
}

const props = defineProps<Props>();
const { data } = props;
</script>


<style lang="scss" scoped>
.card {
	padding: 40px;
	background-color: var(--color-white);

	&__icon {
		--icon-size: 72px;
		width: var(--icon-size);
		height: var(--icon-size);
		margin-bottom: 32px;
	}

	&__title {
		font-size: 24px;
		margin-bottom: 16px;
		color: var(--color-gray-900);
	}

	&__description {
		color: var(--color-gray-800);
		font-size: 16px;
		line-height: 1.5;
	}
}
</style>
