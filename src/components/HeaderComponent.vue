<script lang="ts">
export default {
    name: "EroHeader",
    data() {
        return {
            menu: false
        }
    }
}
</script>

<template>
    <div class="header-wrapper reg">
        <RouterLink to="/guide" class="item">GUIDE</RouterLink>
        <RouterLink to="/home" class="title-wrapper">
            <span class="title-upper">Thirteen's</span>
            <div class="title-lower">
                <span>Ero</span>Guide
            </div>
        </RouterLink>
        <RouterLink to="/eroge" class="item">GAMES</RouterLink>
    </div>

    <div class="header-wrapper sm">
        <RouterLink to="/home" class="title-wrapper">
            <span class="title-upper">Thirteen's</span>
            <div class="title-lower">
                <span>Ero</span>Guide
            </div>
        </RouterLink>
        <button id="hamburger" @click="menu = !menu">
            <svg class="ham ham6" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
                <path
                    class="line top"
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
                <path
                    class="line middle"
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
                <path
                    class="line bottom"
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
                </svg>
        </button>
    </div>
    <div class="sm" v-bind:class="[menu ? 'collapse open' : 'collapse']">
        <RouterLink class="item" to="/guide">
            <span class="unselectable item-icon">📕</span><span class="item-text">GUIDE</span>
        </RouterLink>
        <RouterLink class="item" to="/eroge">
            <span class="unselectable item-icon">🕹️</span><span class="item-text">GAMES</span>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
    @media only screen and (max-width: 768px) {
        .reg {
            display: none !important;
        }

        /*.header-wrapper {
            justify-content: space-between !important;
        }*/

        .item {
            margin: 0 !important;
        }
    }

    @media only screen and (min-width: 768.1px) {
        .sm {
            display: none !important;
        }
    }

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .title-wrapper {
        text-align: center;
        color: white;
        color: rgba(255, 255, 255, 1);

        font-weight: 800;
        font-family: 'Bahiana', cursive;
        line-height: 1.0 !important;

        text-decoration: none;
    }

    .title-upper {
        font-size: 32px;
    }

    .title-lower {
        font-size: 60px;

        span {
            color: red;
            font-weight: 800;
        }
    }

    .collapse {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 0;
        transition: max-height .35s;
    }

    .collapse.open {
        max-height: 100px;
    }

    .item {
        margin: 0 7em;

        color: white;
        color: rgba(255, 255, 255, 0.8);
        font-size: 30px;
        font-family: 'Bahiana', cursive;
        text-decoration: none;

        text-align: center;

        .item-icon {
            font-size: 30px;
            /*float: left;*/
        }

        .item-text {
            font-weight: 500;
            opacity: 0.8;
            padding: 0 0.25em;
        }

        .item-text:hover {
            transition: .3s;
            opacity: 1;
        }
    }

    .separator {
        width: 100%;
        align-self: center;
    }

    /* Hamburger Design */
    #hamburger {
        background-color: transparent;
        text-decoration: none;
        border: none;
        scale: .75;
        opacity: .8;

        position: absolute;
        right: 0;
    }

    #hamburger:hover {
        transition: .35s;
        opacity: 1;
    }

    .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .hamRotate180.active {
        transform: rotate(180deg);
    }
    .line {
        fill: none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke: white;
        stroke-width: 4;
        stroke-linecap: round;
    }

    .ham6 .top {
        stroke-dasharray: 40 172;
    }
    .ham6 .middle {
        stroke-dasharray: 40 111;
    }
    .ham6 .bottom {
        stroke-dasharray: 40 172;
    }
    .ham6.active .top {
        stroke-dashoffset: -132px;
    }
    .ham6.active .middle {
        stroke-dashoffset: -71px;
    }
    .ham6.active .bottom {
        stroke-dashoffset: -132px;
    }
</style>