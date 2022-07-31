<template>
    <div @click="addPoint">{{ point }}</div>
</template>

<script lang="ts">
import { Player } from '@/constant/player';
import { checkBoard } from '@/observable/board.observable';
import { BoardStore } from '@/store/board.store';
import { BoardPosition } from '@/type/board.type';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
    name: 'SquarePoint',
    props: {
        position: {
            type: Object as PropType<BoardPosition>,
            required: true,
        },
    },
    setup(props) {
        const point = ref('');
        const checked = ref(false);
        const board = BoardStore();

        const addPoint = () => {
            if (true === checked.value) {
                return;
            }

            point.value = board.currentPlayer;
            checked.value = true;
            Player.X === board.currentPlayer ? board.addXPos(props.position) : board.addOPos(props.position);
            checkBoard();
        };

        return {
            point,
            addPoint,
        };
    },
});
</script>
