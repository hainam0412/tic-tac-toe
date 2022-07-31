import { Player } from '@/constant/player';
import { BoardPosition } from '@/type/board.type';
import { defineStore } from 'pinia';

interface BoardState {
    currentPlayer: Player;
    xPos: BoardPosition[];
    oPos: BoardPosition[];
    ox: number;
    oy: number;
}

export const BoardStore = defineStore('board', {
    state: (): BoardState => {
        return {
            currentPlayer: Player.X,
            ox: 0,
            oy: 0,
            xPos: [],
            oPos: [],
        };
    },
    actions: {
        addXPos(pos: BoardPosition) {
            this.xPos.push(pos);
            this.currentPlayer = Player.O;
        },
        addOPos(pos: BoardPosition) {
            this.oPos.push(pos);
            this.currentPlayer = Player.X;
        },
        setOx(ox: number) {
            this.ox = ox;
        },
        setOy(oy: number) {
            this.oy = oy;
        },
    },
});
