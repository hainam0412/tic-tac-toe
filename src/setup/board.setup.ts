import { SQUARE_SIZE } from '@/constant/board';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

export const boardSetup = () => {
    const { width, height } = useWindowSize();
    const squareStyle = computed(() => `${SQUARE_SIZE}px`);
    const squareOx = computed<number>(() => {
        return Math.floor(width.value / SQUARE_SIZE);
    });

    const squareOy = computed<number>(() => {
        return Math.floor(height.value / SQUARE_SIZE);
    });

    return {
        squareOy,
        squareOx,
        squareStyle,
    };
};
