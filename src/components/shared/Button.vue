<template>
	<!-- Button -->
	<button v-if="tagName === 'button'" :type="type" :class="[ size ? `size_${size}` : 'size', radius ? `radius_${radius}` : '' ]" class="button">
		<slot></slot>
	</button>

	<!-- Link -->
	<RouterLink v-if="tagName === 'link'" :to="path" class="button" :class="[ size ? `size_${size}` : 'size', radius ? `radius_${radius}` : '' ]">
		<slot></slot>
	</RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

type Props = {
	tagName?: 'button' | 'link'
	path?: string,
	size?: 's' | 'm',
	type?: 'button' | 'submit'
	radius?: 's' | 'm',
}

const props = defineProps<Props>();
const { path, tagName, type = 'button', size, radius = "s" } = props;
</script>

<style lang="scss" scoped>
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 11px 16px;
		background-color: var(--color-complementary);
		color: var(--color-white);
		
		border: none;
		font-weight: 600;
	}

	.radius {
		&_s {
			border-radius: var(--border-radius-s);
		}

		&_m {
			border-radius: var(--border-radius-m);
		}
	}

	.size {
		width: max-content;

		&_s {
			width: 150px;
		}
		&_m {
			width: 250px;
		}
	}
</style>