<script setup lang="ts">
  import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom';
  import { useMouseInElement } from '@vueuse/core';
  import { Transition, computed, ref, watch } from 'vue';

  interface TooltipProps {
    content: string;
    placement: 'top' | 'bottom' | 'left' | 'right';
  }

  const props = defineProps<TooltipProps>();
  const floatingRef = ref<HTMLDivElement | null>(null);
  const targetRef = ref<HTMLDivElement | null>(null);
  const arrowRef = ref<HTMLDivElement | null>(null);
  const target = computed(() => targetRef.value);
  const tooltip = computed(() => floatingRef.value);
  const { isOutside } = useMouseInElement(targetRef);

  watch(
    () => floatingRef.value,
    async () => {
      if (tooltip.value !== null && target.value !== null && arrowRef.value !== null) {
        const { x, y, middlewareData, placement } = await computePosition(target.value, tooltip.value, {
          placement: props.placement,
          middleware: [offset(8), flip(), shift({ padding: 5 }), arrow({ element: arrowRef.value })],
        });

        Object.assign(tooltip.value.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        const { x: arrowX, y: arrowY } = middlewareData.arrow!;

        const opposedSide = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom',
        }[placement.split('-')[0]];

        Object.assign(arrowRef.value.style, {
          left: arrowX ? `${arrowX}px` : '',
          top: arrowY ? `${arrowY}px` : '',
          bottom: '',
          right: '',
          [opposedSide!]: '-4px',
        });
      }
    },
  );
</script>

<template>
  <div ref="targetRef" class="inline-block">
    <slot />
  </div>
  <transition
    name="fade"
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="!isOutside"
      ref="floatingRef"
      class="absolute top-0 left-0 z-50 bg-blue-200 text-gray-900 dark:bg-blue-600 text-sm dark:text-gray-100 px-3 py-1.5 rounded-md cursor-default whitespace-nowrap"
    >
      {{ content }}
      <div ref="arrowRef" class="absolute bg-blue-200 dark:bg-blue-600 h-[8px] w-[8px] rotate-45"></div>
    </div>
  </transition>
</template>
