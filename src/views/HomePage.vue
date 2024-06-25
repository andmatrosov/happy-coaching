<template>
  <main>
    <UiOffer waves />
    <section class="competitions">
      <UiContainer class="competitions__container">
        <div class="competitions__content">
          <div class="competitions__decorate">
            <UiIcons name="waves" />
          </div>
          <div class="competitions__content-text">
            <h2 class="competitions__title">I can help you in these particular areas.</h2>
            <div class="competitions__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua minim veniam.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>
          </div>
          <div class="competitions__items">
            <UiCard v-for="item in competitions" :data="item" :key="item.title" />
          </div>
        </div>

      </UiContainer>
    </section>
  </main>
</template>

<script lang="ts" setup>
import UiContainer from '@/components/shared/UiContainer.vue'
import UiOffer from '@/components/UiOffer.vue'
import UiIcons from '@/components/icons/UiIcons.vue'
import UiCard from '@/components/shared/UiCard.vue'
import { type UiIconsType } from '@/types/UiIconsType'

type Competitions = {
  icon: UiIconsType,
  title: string,
  description: string
}

const competitions: Competitions[] = [
  {
    icon: 'notebook',
    title: '1:1 Coaching',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'
  },
  {
    icon: 'conversation',
    title: 'Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'
  },
  {
    icon: 'group',
    title: 'Group Coaching Sessions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'
  },
]

</script>

<style lang="scss" scoped>
.competitions {
  padding-top: 140px;
  padding-bottom: 60px;

  &__container {}

  &__decorate {
    position: absolute;
    top: -16px;
    left: 38px;
    transform: translateY(-100%);
  }

  &__content {
    position: relative;
    padding-left: 38px;
    padding-right: 38px;

    &-text {
      display: flex;
      gap: 74px;
      margin-bottom: 16px;
    }
  }

  &__title {
    margin-top: 16px;
    width: 45%;
    flex-shrink: 0;
    font-size: 48px;
    font-weight: 800;
  }

  &__description {
    max-width: 470px;

    p {
      font-size: 17px;
      line-height: 1.5;

      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }

  &__items {
    display: flex;
    padding-left: 38px;
    padding-right: 38px;
  }
}
</style>