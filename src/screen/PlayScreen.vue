<template>
    <div class="play-screen">
        <div v-for="(row, rowIndex) in squareOy" :key="'row-' + rowIndex" class="row">
            <square-point v-for="(square, squareIndex) in squareOx" :key="rowIndex + 'x' + squareIndex" class="square" :position="{ oy: rowIndex, ox: squareIndex }" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import SquarePoint from '@/component/SquarePoint.vue';
import { boardSetup } from '@/setup/board.setup';
import { BoardStore } from '@/store/board.store';

export default defineComponent({
    name: 'PlayScreen',
    components: {
        SquarePoint,
    },
    setup() {
        const { squareOy, squareOx, squareStyle } = boardSetup();
        const board = BoardStore();

        watchEffect(() => {
            board.setOy(squareOy.value);
            board.setOx(squareOx.value);
        });

        return {
            squareOy,
            squareOx,
            squareStyle,
        };
    },
});
</script>

<style scoped lang="scss">
.play-screen {
    @apply w-full h-full overflow-hidden select-none;

    .row {
        @apply flex;

        .square {
            width: v-bind(squareStyle);
            height: v-bind(squareStyle);
            border: 1px solid black;
            @apply grid place-items-center;
        }
    }
}
</style>
