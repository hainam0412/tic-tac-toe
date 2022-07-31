import { defineStore } from 'pinia';

interface ScreenState {
    screen: string;
}

export const ScreenStore = defineStore('screen', {
    state: (): ScreenState => {
        return {
            screen: '',
        };
    },
    actions: {
        setScreen(screen: string): void {
            this.screen = screen;
        },
    },
});
