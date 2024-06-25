<template>
	<svg v-if="name === 'logo'" xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
		<path
			d="M16.262 0a4.59 4.59 0 0 1 3.968 2.282l3.87 6.656a4.59 4.59 0 0 1 0 4.615l-3.87 6.655a4.59 4.59 0 0 1-3.968 2.283H8.46a4.59 4.59 0 0 1-3.968-2.283l-3.87-6.655a4.59 4.59 0 0 1 0-4.615l3.87-6.656A4.59 4.59 0 0 1 8.461 0z"
			fill="#20AD96" />
		<path d="m7.832 16.466 2.519-2.519h5.878a.84.84 0 0 0 .84-.84V8.07a.84.84 0 0 0-.84-.84H8.671a.84.84 0 0 0-.84.84z"
			stroke="#fff" stroke-width="1.606" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
	<svg v-if="name === 'waves'" xmlns="http://www.w3.org/2000/svg" width="101" height="17" viewBox="0 0 101 17"
		fill="none">
		<path
			d="M26.2609 4.32287L38.3456 17L50.5232 4.32287L62.6544 17L74.7391 4.32287L86.8702 17L101 2.23427L98.8155 0L86.8702 12.4828L74.925 0L74.7391 0.194298L74.5996 0L62.6544 12.4828L50.6627 0L50.5232 0.194298L50.3373 0L38.3456 12.4828L26.4004 0L26.2609 0.194298L26.075 0L14.1298 12.4828L2.18454 0L0 2.23427L14.1298 17L26.2609 4.32287Z"
			fill="currentColor" />
	</svg>
	<svg v-if="name === 'vue'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664 644">
		<path fill="none" stroke-width="0" d="M-6468-1678H9532V8322H-6468z" />
		<path d="M151.9 62.1h111.4l69.2 117.4 69.9-117.4h110.4l-180.3 317z" fill="#435466" fill-rule="evenodd" />
		<path d="m33.1 62.1 299.4 523.1L634.1 62.1H512.8l-180.3 317-180.6-317z" fill="#4dba87" />
	</svg>
	<svg v-if="name === 'target'" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"
		fill="none">
		<g clip-path="url(#clip0_508_5823)">
			<path
				d="M39.5497 16.4507C45.9283 22.8292 45.9283 33.1709 39.5497 39.5495C33.1712 45.928 22.8295 45.928 16.4509 39.5495C10.0724 33.1709 10.0724 22.8292 16.4509 16.4507C22.8295 10.0721 33.1712 10.0721 39.5497 16.4507Z"
				stroke="#20AD96" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			<path
				d="M31.2995 24.7001C33.122 26.5225 33.122 29.4773 31.2995 31.2998C29.4771 33.1222 26.5223 33.1222 24.6998 31.2998C22.8774 29.4773 22.8774 26.5225 24.6998 24.7001C26.5223 22.8776 29.4771 22.8776 31.2995 24.7001"
				stroke="#333461" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M28 49.0001V39.6667" stroke="#20AD96" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M28 7V16.3333" stroke="#20AD96" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M16.3333 28H7" stroke="#20AD96" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M49.0003 28H39.667" stroke="#20AD96" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<defs>
			<clipPath id="clip0_508_5823">
				<rect width="56" height="56" fill="white" />
			</clipPath>
		</defs>
	</svg>

	<svg v-if="name === 'notebook'" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"
		fill="none">
		<path d="M27 12v54m-9-54h33a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H18a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3" stroke="#3F3A64"
			stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M39 24h6m-6 12h6" stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
	</svg>

	<svg v-if="name === 'conversation'" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"
		fill="none">
		<path
			d="M62.25 45.5L52.5 35.75H29.75C28.888 35.75 28.0614 35.4076 27.4519 34.7981C26.8424 34.1886 26.5 33.362 26.5 32.5V13C26.5 12.138 26.8424 11.3114 27.4519 10.7019C28.0614 10.0924 28.888 9.75 29.75 9.75H59C59.862 9.75 60.6886 10.0924 61.2981 10.7019C61.9076 11.3114 62.25 12.138 62.25 13V45.5Z"
			stroke="#3F3A64" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M39.5 48.75V55.25C39.5 56.112 39.1576 56.9386 38.5481 57.5481C37.9386 58.1576 37.112 58.5 36.25 58.5H13.5L3.75 68.25V35.75C3.75 34.888 4.09241 34.0614 4.7019 33.4519C5.3114 32.8424 6.13805 32.5 7 32.5H13.5"
			stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
	</svg>

	<svg v-if="name === 'group'" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"
		fill="none">
		<path
			d="M21 21C24.3137 21 27 18.3137 27 15C27 11.6863 24.3137 9 21 9C17.6863 9 15 11.6863 15 15C15 18.3137 17.6863 21 21 21Z"
			stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M15 66V51L12 48V36C12 35.2044 12.3161 34.4413 12.8787 33.8787C13.4413 33.3161 14.2044 33 15 33H27C27.7956 33 28.5587 33.3161 29.1213 33.8787C29.6839 34.4413 30 35.2044 30 36V48L27 51V66"
			stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M51 21C54.3137 21 57 18.3137 57 15C57 11.6863 54.3137 9 51 9C47.6863 9 45 11.6863 45 15C45 18.3137 47.6863 21 51 21Z"
			stroke="#3F3A64" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M45 66V54H39L45 36C45 35.2044 45.3161 34.4413 45.8787 33.8787C46.4413 33.3161 47.2044 33 48 33H54C54.7956 33 55.5587 33.3161 56.1213 33.8787C56.6839 34.4413 57 35.2044 57 36L63 54H57V66"
			stroke="#3F3A64" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
	</svg>

</template>

<script lang="ts" setup>
import { type UiIconsType } from '@/types/UiIconsType'

type Props = {
	name: UiIconsType
}

const props = defineProps<Props>();
const { name } = props;
</script>