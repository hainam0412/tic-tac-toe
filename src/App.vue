<template>
    <component :is="renderScreen" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { ScreenStore } from '@store/screen.store';
import PlayScreen from '@screen/PlayScreen.vue';

export default defineComponent({
    name: 'App',
    setup() {
        const screenStore = ScreenStore();
        const renderScreen = computed(() => {
            switch (screenStore.screen) {
                case 'Play':
                    return PlayScreen;
                default:
                    return PlayScreen;
            }
        });

        return {
            renderScreen,
        };
    },
});
</script>
