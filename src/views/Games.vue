<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';

type Tag = 'Pixel Art' | 'Monster Girls' | 'Static CG' | 'Animated CG' | 'Battle Fuck' | 'Loli' | 'VN' | 'Shota';

type Game = {
    "name": string,
    "url": string,
    "dev": string,
    "tags": Tag[],
    "dl-url": string[], // first official, then inofficial
    "description": string
}

type GameWrapper = {
    "default": Game;
}

let gamesLoaded = ref(false);
let games: Ref<Game[]> = ref([]);
let shownGames: Ref<Game[]> = ref([]);

onMounted(async () => {
    gamesLoaded.value = await loadAllGames();
    console.log(shownGames.value);
});

const loadAllGames = async (): Promise<boolean> => {
    const glob = import.meta.glob('../assets/games/*.json');

    let fetched: Game[] = [];
    const paths = Object.values(glob);
    for (let path of paths) {
        const o = await path();
        fetched.push((o as GameWrapper).default);
    }
    
    fetched = fetched.filter(g => g.name !== 'Example');

    games.value = fetched;
    shownGames.value = fetched;

    return games.value.length > 0;
}

const filter = () => {
    // TODO
}

const search = () => {
    // TODO
}
</script>

<template>
    <main class="page">
        <div class="info-bar">
            <div>
                <img class="info-icon" src="../assets/icons/help.svg" />
            </div>
            <div class="search-wrapper">
                Filter/Search TODO
            </div>
        </div>

        <div v-if="gamesLoaded" class="game-grid">
            <div v-for="game of shownGames" :key="game.name">
                <div class="game-wrapper">
                    <img class="header" :src=game.url />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/design.scss';

    .page {
        display: flex;
        flex-direction: column;
    }

    .info-bar {
        padding: 3em 0;
        height: 2em;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .search-wrapper {
        margin-right: 5em;
    }

    .game-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: center;
        grid-gap: 1em;
    }

    .game-wrapper {
        background-color: blue;
        height: 140px;
        border-radius: 10px;
        box-shadow: 0 7px #131313;
        cursor: pointer;
    }

    .game-wrapper:hover {
        transition: .3s;
        scale: 1.05;
    }

    .header {
        width: 300px;
        height: 140px;
        border-radius: 10px;
    }

    .info-icon {
        width: 50px;
        height: 50px;
        margin-left: 5em;
        color: white;
        opacity: 0.8;
        cursor: pointer;
    }

    .info-icon:hover {
        opacity: 1;
        transition: .35s;
    }
</style>
