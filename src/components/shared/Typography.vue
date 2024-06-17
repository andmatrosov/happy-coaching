<template>
  <component :is="props.tagName"
    :class="['typography', size ? `size_${size}` : '', bold ? 'bold' : '', `tag_${tagName}`]">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
interface Props {
  tagName: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  bold?: boolean
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.typography {
  font-style: normal;
  line-height: 1.5;
}

.bold {
  font-weight: 800;
}

.size {
  &_xs {
    font-size: 12px;
  }

  &_s {
    font-size: 16px;
  }

  &_m {
    font-size: 18px;
  }

  &_l {
    font-size: 24px;
  }

  &_xl {
    font-size: 36px;
  }
}

.tag {
  &_h1 {
    font-size: 64px;
  }

  &_h2 {
    font-size: 48px;
  }

  &_h3 {
    font-size: 36px;
  }

  &_h4 {
    font-size: 24px;
  }

  &_h5 {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .size {
    &_xs {
      font-size: 8px;
    }

    &_s {
      font-size: 12px;
    }

    &_m {
      font-size: 14px;
    }

    &_l {
      font-size: 20px;
    }

    &_xl {
      font-size: 32px;
    }
  }

  .tag {
    &_h1 {
      font-size: 48px;
    }

    &_h2 {
      font-size: 36px;
    }

    &_h3 {
      font-size: 24px;
    }

    &_h4 {
      font-size: 20px;
    }

    &_h5 {
      font-size: 16px;
    }
  }
}
</style>