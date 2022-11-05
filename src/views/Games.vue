<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import type { Game, GameWrapper, Tag } from '../types/type_definitions';
import { genre, art, setting, misc, engine } from '../types/type_definitions';

let games: Ref<Game[]> = ref([]);
let shownGames: Ref<Game[]> = ref([]);

let gamesLoaded = ref(false);
let searchInput = ref('');
let filterActive = ref(false);

let headersLoadedCount = ref(0);
let headersLoaded = ref(false);

let happyKao = ref('');
let sadKao = ref('');

let infoActive = ref(false);

type PTag = {
    tag: Tag,
    checked: boolean
}

const headers = ['Genre', 'Art Style', 'Setting', 'Misc.', 'Engine'];
let tags: Ref<Record<string, PTag[]>> = ref({});

onMounted(async () => {
    happyKao.value = __randomKaomoji(true);
    sadKao.value = __randomKaomoji(false);
    __prepTags();
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

const updateGames = () => {
    let gamesList = games.value;
    gamesList = __filter(gamesList);
    gamesList = __search(gamesList);
    shownGames.value = gamesList;
}

const updateHeaderStatus = () => {
    headersLoadedCount.value++;
    if (headersLoadedCount.value === games.value.length) {
        headersLoaded.value = true;
    }
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

const __prepTags = () => {
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

const __randomKaomoji = (happy: boolean) => {
    const kaomojis = happy
        ? ['ヽ(・∀・)ﾉ', '＼(￣▽￣)／', '<(￣︶￣)>', '°˖✧◝(⁰▿⁰)◜✧˖°', '┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴']
        : ['(╥﹏╥)', '┐(‘～` )┌', '｡ﾟ･ (>﹏<) ･ﾟ｡', '(｡•́︿•̀｡)', '(πーπ)'];

    return kaomojis[Math.floor(Math.random() * kaomojis.length)];
}
</script>

<template>
    <div v-show="infoActive" class="blur" @click="infoActive = false"></div>
    <main class="page">
        <div v-show="infoActive" class="about-embed">
            <div class="about-bar">
                <span class="subtitle">ABOUT</span>
                <img src="../assets/icons/close.svg" @click="infoActive = false" />
            </div>
            <span class="about-text">
                In order to make the entry into the ero-world a tiny bit more of a pleasant experience, this page contains some of the games I have already played.
                As taste (for better of for worse) can vary, I decided to not only include those I liked, but also those I deemed as not complete trash after giving them a try.
            </span>
            <img class="unselectable search-img" src="../assets/images/search_filter.png" />
            <span class="about-text">
                You can use the <span class="bold">search</span> and/or <span class="bold">filter</span> function located at the very top to look for games you may like, or just find a random one that catches your eye and give it a go by clicking on the image.
                The game pages themselves provide essentially everything you need, including links to places you can download the game at, tags, meta information and a short comment about the game by me.
                <br><br>
                You will also come across three different icons located at the top right corner of the game image and its corresponding game page.
                <br>
                <u>Here is what they mean:</u>
            </span>
            <div class="explainer">
                <img src="../assets/icons/beginner.png" />
                <span><span class="bold white">Beginner-Friendly</span> — This game serves as a nice starting point for players who are new to this genre</span>
            </div>
            <div class="explainer">
                <img src="../assets/icons/extreme.png" />
                <span><span class="bold white">Extreme Content</span> — This game contains and focuses around extreme content (e.g., rape, drugs, etc.)</span>
            </div>
            <div class="explainer">
                <img src="../assets/icons/approved.png" />
                <span><span class="bold white">Thirteen Approved</span> — This game is one of my personal favorites</span>
            </div>
            <div class="half-sep-space" />
            <span class="about-text">
                In case you disagree with me on the choice of games featured in this list, feel free to keep it to yourself. I'll update the list whenever I find a game that I feel like it should be in it or change my opinion regarding an already existing one.
            </span>
        </div>

        <div class="info-bar">
            <div class="flex-wrap">
                <img class="info-icon" src="../assets/icons/help.svg" @click="infoActive = true" />
            </div>
            
            <div class="flex-wrap">
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

                <div class="flex-down">
                    <div v-for="header in headers" :key="header">
                        <span class="bold unselectable f-cat-title">{{ header }}</span>
                        <div class="cat-wrapper">
                            <div class="nonshrink flex-wrap" v-for="value in tags[header]" :key="value.tag">
                                <input type="checkbox" :id=value.tag :name=value.tag v-model="value.checked" @click="value.checked = !value.checked" @change="updateGames" />
                                <label for=value.tag><span class="white">{{ value.tag }}</span><span class="op-50p"> ({{ findTagAmount(value.tag) }})</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sep-space"></div>
        </div>

        <div v-show="headersLoaded" class="game-grid-wrapper">
            <div v-if="gamesLoaded" class="game-grid">
                <div v-for="game of shownGames" :key="game.id">
                    <router-link :to="{ name: 'gameDetail', params: { name: game.id }}">
                        <div class="game-wrapper" role="link">
                            <img class="header" :src=game.url @load="updateHeaderStatus" @error="updateHeaderStatus" />
                            <div class="header-overlay">
                                <div>
                                    <div class="flex-wrap tooltip-bar">
                                        <div class="unselectable tooltip" data-tooltip="Beginner-Friendly">
                                            <img src="../assets/icons/beginner.png" class="badges" v-if="game.stags?.includes('Beginner')" />
                                        </div>
                                        <div class="unselectable tooltip" data-tooltip="Extreme Content">
                                            <img src="../assets/icons/extreme.png" class="badges" v-if="game.stags?.includes('Extreme')" />
                                        </div>
                                        <div class="unselectable tooltip" data-tooltip="Thirteen Approved">
                                            <img src="../assets/icons/approved.png" class="badges" v-if="game.stags?.includes('Approved')" />
                                        </div>
                                    </div>
                                </div>
                                <div class="name">
                                    <span>{{ game.name }}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="flex-down center" v-show="!shownGames || shownGames.length === 0">
                <span>No Games Found...</span>
                <span>{{ sadKao }}</span>
            </div>
        </div>
        <div v-show="!headersLoaded" class="heart-wrapper">
            <div class="lds-heart">
                <div></div>
            </div>
            <div class="half-sep-space"></div>
            <span class="unselectable">LOADING</span>
            <span class="unselectable">{{ happyKao }}</span>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/design.scss';
    @import '../assets/heartLoader.scss';

    .page .flex-down {
        display: flex;
        flex-direction: column;
    }

    .blur {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: -130px;
        height: calc(100% + 136px);
        width: 100%;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 100;
    }

    .about-embed {
        position: absolute;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        min-height: 500px;
        max-width: 800px;
        background-color: #181818;
        border-radius: 10px;
        z-index: 999;
        box-shadow: 0 0 10px #131313;
        padding: 1em 2em 2em;

        .about-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5em;

            img {
                height: 50px;
                cursor: pointer;
                opacity: .8;
                transition: .2s opacity;
            }

            img:hover {
                opacity: 1;
            }
        }

        .about-text {
            hyphens: auto;
            text-align: justify;
        }

        .search-img {
            pointer-events: none;
            border-radius: 15px;
            width: 250px;
            height: auto;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }

        .explainer {
            display: flex;
            align-items: center;
            margin-top: .5em;

            img {
                width: 32px;
                margin-right: .5em;
            }
        }
    }

    @keyframes fly-in {
        from {
            top: -500px;
        }
        to {
            top: 0px;
        }
    }

    .center {
        place-items: center;
    }

    .info-bar {
        padding: 3em 0;
        height: 2em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: 679px) {
            width: calc(2 * 300px + 1em);
        }

        @media screen and (min-width: 994px) {
            width: calc(3 * 300px + 2em);
        }
    }

    .nonshrink {
        flex-shrink: 0;
    }

    .flex-wrap {
        display: flex;
    }

    .inner-search-wrapper {
        display: flex;
        place-items: center;
    }

    .game-grid-wrapper {
        width: 100%;
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
        position: relative;
        transition: .2s;
    }

    .game-wrapper:hover {
        scale: 1.05;
    }

    .game-wrapper:hover .name {
        opacity: 1;
    }

    .header {
        width: 300px;
        height: 140px;
        border-radius: 10px;
    }

    .header-overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .info-icon, .filter-icon {
        width: 50px;
        height: 50px;
        opacity: 0.8;
        cursor: pointer;
        transition: .35s opacity;
        place-self: center;
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
        max-height: 460px;

        @media screen and (min-width: 679px) {
            max-height: 365px;
        }

        @media screen and (min-width: 994px) {
            max-height: 320px;
        }
    }

    .filter-top {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .f-cat-title {
        text-transform: uppercase;
        color: white;
        opacity: .8;
    }

    .cat-wrapper {
        display: flex;
        flex-flow: row wrap;
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

    .heart-wrapper {
        margin-top: 5em;
        display: flex;
        flex-direction: column;
        place-items: center;

        > span {
            font-size: 24px;
            font-weight: 600;
            color: white;
            opacity: .8;
        }
    }

    .badges {
        height: 1.8em;
        margin: 0 0.2em;
        filter: drop-shadow(0px 0px 2px #131313);

        cursor: pointer;
    }

    .tooltip-bar {
        padding: 5px;
        display: flex;
        justify-content: flex-end;
    }

    [data-tooltip] {
        position: relative;
        z-index: 99;
        cursor: pointer;
    }

    [data-tooltip]:before,
    [data-tooltip]:after {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    }

    [data-tooltip]:hover:before,
    [data-tooltip]:hover:after {
        visibility: visible;
        opacity: 1;
    }

    [data-tooltip]:before {
        position: absolute;
        bottom: 110%;
        left: -70%;
        width: max-content;
        border-radius: 10px;
        background: #0a0a0a;
        content: attr(data-tooltip);
        color: white;
        font-size: 10px;
        padding: 5px;
        white-space: nowrap;

        transition: .2s opacity;
    }

    [data-tooltip]:after {
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        width: 0;
        border-top: 5px solid #0a0a0a;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        content: " ";
        font-size: 0;
        line-height: 0;
    }

    .name {
        opacity: 0;
        background-color: white;
        background-color: #fff;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 0 0 10px 10px;
        padding: 1px 0.5em;
        transition: .3s opacity;

        > span {
            color: black;
            font-weight: 800;
            opacity: .9;
        }
    }
</style>
