import { Player } from '@/constant/player';

export interface BoardPosition {
    ox: number;
    oy: number;
}

export interface BoardElement {
    position: BoardPosition;
    player: Player | null;
}
