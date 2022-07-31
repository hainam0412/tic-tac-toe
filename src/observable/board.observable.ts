import { Player } from '@/constant/player';
import { BoardStore } from '@/store/board.store';
import { BoardPosition } from '@/type/board.type';

const WIN = 4;

const checkMove = (positions: BoardPosition[], player: Player) => {
    const length = positions.length;
    if (length <= WIN) return;

    let count = 0;
    console.log(player, positions);

    for (let i = 0; i < length; i++) {
        const pos = positions[i];
        const nextPos = positions[i + 1];

        if (
            (pos.ox === nextPos?.ox && pos.oy + 1 === nextPos?.oy) ||
            (pos.oy === nextPos?.oy && pos.ox + 1 === nextPos?.ox) ||
            (pos.ox + 1 === nextPos?.ox && pos.oy + 1 === nextPos?.oy)
        ) {
            count++;

            if (WIN === count) {
                break;
            }
        } else {
            count = 0;
        }
    }

    if (WIN === count) {
        alert(`${player} has won`);
    }

    // for (let i = 0; i < ox.length; i++) {
    //     if (ox[i] === ox[i + 1]) {
    //         countOx++;
    //         if (WIN === countOx) {
    //             break;
    //         }
    //     } else {
    //         countOx = 0;
    //     }
    // }

    // for (let i = 0; i < oy.length; i++) {
    //     if (oy[i] === oy[i + 1]) {
    //         countOy++;
    //         if (WIN === countOy) {
    //             break;
    //         }
    //     } else {
    //         countOx = 0;
    //     }
    // }

    // if (WIN === countOx || WIN === countOy) {
    //     alert(`${player} has won`);
    // }
};

const sort = (positions: BoardPosition[]): BoardPosition[] => {
    const ox = positions.map((pos) => pos.ox).sort((a, b) => a - b);
    const oy = positions.map((pos) => pos.oy).sort((a, b) => a - b);
    const result: BoardPosition[] = [];

    ox.forEach((pos, index) => {
        result.push({
            ox: pos,
            oy: oy[index],
        });
    });

    return result;
};

export const checkBoard = () => {
    const { xPos, oPos } = BoardStore();

    checkMove(sort(xPos), Player.X);
    checkMove(sort(oPos), Player.O);
};
