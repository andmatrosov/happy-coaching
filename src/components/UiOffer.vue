<template>
	<section class="offer">
		<UiContainer class="offer__container">
			<IconWaves v-if="waves" class="offer__waves" />
			<div class="offer__content">
				<div class="offer__content-text">
					<p class="offer__subtitle">I can help you in these patricular areas.</p>

					<h1 class="offer__title">Live life at the <br /> full potential</h1>

					<p class="offer__description">
						I help people to discover their true potential and live a fulfilling life...
						Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using
						backed by science. Wanna transform your life?
					</p>

					<UiButton type="button" size="m">Get your free guide now</UiButton>
				</div>
				<div class="offer__content-image">

					<div class="offer__decorate-index">
						<IconTarget />
						<div class="offer__decorate-index__text">
							<b>100%</b>
							<p>Success rate this year</p>
						</div>
					</div>

					<picture>
						<img :src="offerIndex" class="offer__image" alt="Offer image">
					</picture>
				</div>
			</div>
		</UiContainer>
	</section>
</template>

<script lang="ts" setup>
import UiContainer from '@/components/shared/UiContainer.vue';
import UiButton from '@/components/shared/UiButton.vue';
import IconWaves from '@/components/icons/IconWaves.vue';
import IconTarget from '@/components/icons/IconTarget.vue';

import offerIndex from '@/assets/images/offer/offer-index.png';


type OfferProps = {
	waves?: boolean;
}
const props = defineProps<OfferProps>();
const { waves } = props;

</script>

<style lang="scss" scoped>
.offer {
	background-color: var(--color-accent-bg);

	&__container {
		position: relative;
	}

	&__waves {
		position: absolute;
		top: 55px;
		left: -51px;
		color: var(--color-complementary);
	}

	&__content {
		display: flex;
		padding-top: 140px;
		padding-bottom: 150px;

		&-text,
		&-image {
			width: 50%;
		}

		&-image {
			position: relative;
			display: flex;
			justify-content: center;

			picture {
				position: relative;
				margin-top: -40px;
				width: 462px;
			}
		}
	}

	&__subtitle {
		font-size: 16px;
		color: var(--color-gray-800);
		opacity: .4;
		margin-bottom: 6px;
	}

	&__title {
		color: var(--color-dark-blue);
		font-size: 72px;
		font-weight: 800;
		line-height: 1.2;
		margin-bottom: 18px;
		letter-spacing: -0.72px;
		max-width: 550px;
	}

	&__description {
		font-size: 18px;
		color: var(--color-gray-800);
		line-height: 1.6;
		margin-bottom: 18px;
		max-width: 550px;
	}


	&__image {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}

	&__decorate-index {
		position: absolute;
		top: calc(-45px - 40px);
		left: 0;
		display: flex;
		gap: 16px;
		padding: 24px;
		align-items: center;
		background-color: var(--color-white);
		z-index: 1;

		&:deep(svg) {
			width: 56px;
			height: 56px;
		}

		&__text {
			b {
				font-size: 24px;
				font-weight: 800;
				line-height: 1.3;
			}

			p {
				font-size: 12px;
				line-height: 2;
			}
		}
	}
}
</style>