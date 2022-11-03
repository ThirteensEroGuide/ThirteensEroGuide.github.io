<script setup lang="ts">
import { onBeforeMount, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import Badge from '../components/BadgeComponent.vue';

import type { Game } from '../types/type_definitions';

let game: Ref<Game> = ref({ } as Game);

onBeforeMount(() => {
    parseGameData();
    sortTags();
});

const parseGameData = () => {
    const route = useRoute();
    game.value = JSON.parse(atob(route.params.gameData as string));
}

const sortTags = () => {
    game.value.tags.sort();
}

const useImage = (url: string) => {
    return new URL(url, import.meta.url).href;
};
</script>

<template>
    <main class="page">
        <div class="game-wrapper" v-if="game">
            <div class="info-wrapper">
                <div class="info-item info-image">
                    <section>
                        <div class="container">
                            <div class="carousel">
                                <input type="radio" name="slides" v-for="image in game.images" :key="image" :id=image>
                                
                                <ul class="carousel-slides">
                                    <li class="carousel-slide" v-for="url in game.images" :key="url">
                                        <figure>
                                            <div>
                                                <img :src=url alt="">
                                            </div>
                                        </figure>
                                    </li>
                                </ul>    

                                <ul class="carousel-thumbnails">
                                    <li v-for="url in game.images" :key="url">
                                        <label :for=url><img :src=url alt=""></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="info-item metadata">
                    <div class="title-wrapper">
                        <span class="g-title">{{ game.name }}</span>
                        <div class="badges-wrapper">
                            <div class="unselectable tooltip">
                                <img src="../assets/icons/beginner.png" class="badges" v-if="game.stags?.includes('Beginner')" />
                                <span>Suggested for Beginners</span>
                            </div>
                            <div class="unselectable tooltip">
                                <img src="../assets/icons/extreme.png" class="badges" v-if="game.stags?.includes('Extreme')" />
                                <span>Contains Extreme Fetishes</span>
                            </div>
                            <div class="unselectable tooltip">
                                <img src="../assets/icons/approved.png" class="badges" v-if="game.stags?.includes('Approved')" />
                                <span>Thirteen's Favorite</span>
                            </div>
                        </div>
                    </div>
                    <span class="g-dev">by 
                        <span v-for="dev in game.dev" :key="dev.name">
                            <a :href=dev.url target="_blank" rel="noopener norefferer" class="g-subtitle">{{ dev.name }}</a><span class="">{{ (dev.name === game.dev[game.dev.length - 1].name) ? '' : ' & '}}</span>
                        </span>
                    </span>

                    <div class="half-sep-space"></div>
                    <div class="separator"><hr /></div>
                    <div class="sep-space"></div>

                    <span class="bold g-subtitle">INFO</span>
                    <span class="g-date"><span class="bold">Release Date:</span> {{ game.date }}</span>
                    <span class="g-platform"><span class="bold">Language:</span> {{ game.lang.status }} {{ game.lang.patch ? ' (Patch Available!)' : ''}}</span>
                    <span class="g-cen"><span class="bold">Censored:</span> {{ game.censored.status ? 'Yes' : 'No' }} {{ game.censored.patch ? ' (Patch Available!)' : ''}}</span>
                    <span class="g-status"><span class="bold">Status:</span> {{ game.status }}</span>

                    <div class="half-sep-space"></div>

                    <div v-if="game.tags.length > 0">
                        <span class="bold g-subtitle">TAGS</span>
                        <section class="g-tags">
                        <div v-for="tag in game.tags" :key="tag" class="tag">
                            <Badge :content="tag" class="badge-bgc"></Badge>
                        </div>
                    </section>
                    </div>

                    <div class="half-sep-space"></div>
                    <span class="bold g-subtitle">DOWNLOADS</span>

                    <div class="downloads">
                        <div v-for="dl in game.dl" :key="dl.name">
                            <a :href="dl.url" target="_blank" rel="noopener norefferer"><span class="bold g-subtitle">{{ dl.name }}</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sep-space"></div>

            <div class="description info-item">
                <span v-html=game.description></span>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/design.scss';
    @import '../assets/carousel.scss';


    /* GAME DATA */
    .g-title {
        font-size: 32px;
        color: white;
        opacity: .9;
        font-weight: 800;
    }

    .g-tags {
        display: flex;
        flex-wrap: wrap;
        background-color: #262626;
        padding: 0.5em;
        border-radius: 10px;
    }

    .tag .badge {
        margin: 0.2em;
    }

    /* MISC */

    .game-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 2em;
        place-items: center;
    }

    .info-wrapper {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, minmax(300px, 1fr));
        justify-content: center;
        grid-gap: 1em;

        .metadata {
            display: flex;
            flex-direction: column;
        }

        @media screen and (max-width: 1249.98px) {
            grid-template-columns: 1fr;
            grid-template-rows: 2fr;
        }
    }

    .info-item {
        background-color: #2f2f2f;
        border-radius: 10px;
        padding: 1em;
        
        @media screen and (max-width: 1249.98px) {
            width: 100%;
            max-width: 600px;
            justify-self: center;
        }
    }

    .description {
        min-height: 5em;
        color: white;
        opacity: .9;
        font-size: 18px;
    }

    .badge-bgc {
        background-color: grey;
    }

    .g-subtitle {
        color: white;
        opacity: .8;
    }

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .badges {
        height: 3em;
        margin: 0 0.5em;
        filter: drop-shadow(0px 0px 5px #131313);

        @media screen and (max-width: 575.98px) {
            height: 2em;
        }

        cursor: pointer;
    }

    .tooltip > span {
        position: absolute;
        opacity: 0;

        transform: translate(-70%, -133%);
        z-index: 999;

        white-space: nowrap;
        padding: 10px;
        border-radius: 10px;
        background: #0a0a0a;
        transition: .2s opacity;

        color: white;
        font-size: 12px;
    }
 
    .tooltip:hover span {
        opacity: 1;
    }

    .badges-wrapper {
        display: flex;
    }
</style>