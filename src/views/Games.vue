<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import type { Game, GameWrapper, Tag } from '../types/type_definitions';
import { genre, art, setting, misc, engine } from '../types/type_definitions';

let gamesLoaded = ref(false);
let games: Ref<Game[]> = ref([]);
let shownGames: Ref<Game[]> = ref([]);

let searchInput = ref("");
let filterActive = ref(false);

type PTag = {
    tag: Tag,
    checked: boolean
}

const headers = ['Genre', 'Art Style', 'Setting', 'Misc.', 'Engine'];
let tags: Ref<Record<string, PTag[]>> = ref({});

onMounted(async () => {
    prepTags();
    gamesLoaded.value = await loadAllGames();
    // console.log(shownGames.value);
});

const loadAllGames = async (): Promise<boolean> => {
    const glob = import.meta.glob('../assets/games/*.json');

    let fetched: Game[] = [];
    const paths = Object.values(glob);
    for (let path of paths) {
        const o = await path();
        fetched.push((o as GameWrapper).default);
    }
    
    fetched = fetched.filter(g => g.id !== null);

    games.value = fetched;
    shownGames.value = fetched;

    return games.value.length > 0;
}

const updateGames = () => {
    let gamesList = games.value;
    gamesList = __filter(gamesList);
    gamesList = __search(gamesList);
    shownGames.value = gamesList;
}

const __filter = (games: Game[]) => {
    let checkedTags: Tag[] = [];

    for (let key in tags.value) {
        const value = tags.value[key];
        value.forEach(t => {
            if (t.checked) {
                checkedTags.push(t.tag);
            }
        });
    }

    if (!checkedTags) {
        return games;
    }

    return games.filter(g => checkedTags.every(t => g.tags.includes(t)));
}

const __search = (games: Game[]) => {
    const input = searchInput.value;
    if (!input) {
        return games;
    }

    return games.filter(g => g.name.toLowerCase().includes(input.toLowerCase()));
}

const prepTags = () => {
    const convert = (array: Tag[]) => {
        return array.map(v => {
            return {
                tag: v,
                checked: false
            }
        });
    }

    let payload: Record<string, PTag[]> = { 
        'Genre': convert([...genre]),
        'Art Style': convert([...art]),
        'Setting': convert([...setting]),
        'Misc.': convert([...misc]),
        'Engine': convert([...engine])
    };

    tags.value = payload;
}

const findTagAmount = (tag: Tag) => {
    return games.value
        .filter(g => g.tags.includes(tag)).length
        .toString();
}

const changeAllTagsTo = (to: boolean) => {
    for (let key in tags.value) {
        const value = tags.value[key];
        value.forEach(t => t.checked = to);
    }

    shownGames.value = __filter(games.value);
}
</script>

<template>
    <main class="page">
        <div class="info-bar">
            <div>
                <img class="info-icon" src="../assets/icons/help.svg" />
            </div>
            
            <div class="search-wrapper">
                <div id="filter">
                    <img class="filter-icon" src="../assets/icons/filter.svg" @click="filterActive = !filterActive;" />
                </div>
                <div class="inner-search-wrapper">
                    <input v-model="searchInput" @input="updateGames" id="search" type="text" name="search" placeholder="Search..." />
                </div>
            </div>
        </div>

        <div v-bind:class="[filterActive ? 'collapse open' : 'collapse']">
            <div>
                <div class="filter-top">
                    <button class="btn" @click="changeAllTagsTo(true)">Select All</button>
                    <button class="btn" @click="changeAllTagsTo(false)">Deselect All</button>
                </div>

                <div class="filter-settings">
                    <div v-for="header in headers" :key="header">
                        <span class="bold unselectable f-cat-title">{{ header }}</span>
                        <div class="cat-wrapper">
                            <div v-for="value in tags[header]" :key="value.tag">
                                <input type="checkbox" :id=value.tag :name=value.tag v-model="value.checked" @click="value.checked = !value.checked" @change="updateGames" />
                                <label for=value.tag><span class="white">{{ value.tag }}</span><span class="op-50p"> ({{ findTagAmount(value.tag) }})</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sep-space"></div>
        </div>

        <div v-if="gamesLoaded" class="game-grid">
            <div v-for="game of shownGames" :key="game.id">
                <router-link :to="{ name: 'gameDetail', params: { name: game.id }}">
                    <div class="game-wrapper" role="link">
                        <img class="header" :src=game.url />
                    </div>
                </router-link>
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
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 300px;

        @media screen and (min-width: 679px) {
            width: calc(2 * 300px + 1em);
        }

        @media screen and (min-width: 994px) {
            width: calc(3 * 300px + 2em);
        }
    }

    .search-wrapper {
        display: flex;
    }

    .inner-search-wrapper {
        display: flex;
        place-items: center;
    }

    .game-grid {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: center;
        grid-gap: 1em;
    }

    .game-wrapper {
        background-color: #000;
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

    .info-icon, .filter-icon {
        width: 50px;
        height: 50px;
        opacity: 0.8;
        cursor: pointer;
        transition: .35s opacity;
    }

    .info-icon:hover, .filter-icon:hover {
        opacity: 1;
    }

    #search {
        font-size: 18px;
        width: 200px;
        border-radius: 10px;
        padding: 0.2em 0.5em;
        border: none;
        height: 2.5em;
        background-color: #131313;
        color: white;
        color: rgba(255, 255, 255, .8);
        box-shadow: inset 0 0 2px #000;
    }

    #search:focus, input:focus *:focus {
        outline: none;
    }

    #filter {
        display: flex;
        place-items: center;
        padding-right: 1em;
    }

    .collapse {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 0;
        transition: max-height .35s;

        width: 300px;

        @media screen and (min-width: 679px) {
            width: calc(2 * 300px + 1em);
        }

        @media screen and (min-width: 994px) {
            width: calc(3 * 300px + 2em);
        }
    }

    .collapse.open {
        max-height: 320px;
    }

    .filter-top {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .filter-settings {
        display: flex;
        flex-direction: column;
    }

    .f-cat-title {
        text-transform: uppercase;
        color: white;
        opacity: .8;
    }

    .cat-wrapper {
        display: flex;
        margin-bottom: 0.35em;

        div > label {
            margin-left: .2em;
            margin-right: .6em;
        }
    }

    .white {
        color: white;
        opacity: .8;
    }

    .op-50p {
        opacity: .5;
    }

    .btn {
        text-decoration: none;
        color: red;
        background: transparent;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        line-height: 1;
        text-transform: uppercase;

        border: 2px solid red;
        border-radius: 12px;

        padding: 0.5em 1em;
        margin: 0.25em;
        cursor: pointer;
        
        opacity: .8;
        transition: all .35s ease;
    }

    .btn:hover {
        color: #181818;
        border-color: red;
        background-color: red;
    }
</style>
