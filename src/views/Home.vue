<script setup lang="ts">
import { ref } from 'vue'

const EROGE_WIKI = 'https://en.wikipedia.org/wiki/Eroge'

let fun = true
const funMsg = ref('Fun Zone')

const toggleFun = () => {
    fun = !fun
    funMsg.value = (fun) ? 'Fun Zone' : 'Cum Zone'
    console.log(`Switched to the ${fun ? 'regular' : 'real'} fun ~`)
}
</script>

<template>
    <main class="page">
        <div class="left-aligned text-wrapper">
            <span class="unselectable title">
                Welcome to the <span class="red bold" @click="toggleFun">{{ funMsg }}</span>
            </span>
            <span class="text">
                Although chances are high you already know why you're here, I'll explain what this is all about once more, just in case.
                This site is targetted to those who are interested starting with so-called <a :href=EROGE_WIKI target="_blank" rel="noopener norefferer">Eroge</a> (エロゲ, Erotic Game): Japanese games that feature explicit content, mainly graphics of sexual nature, inside them.
                Unfortunately, many of them are hardly accessible to the average person, especially if you live outside of Japan, which is why I felt compelled to write something that helps you to navigate through this — frankly speaking — absolute mess.
            </span>
            <span class="text">
                If you already know everything and feel comfortable enough getting what you need without this guide, feel free to skip this entire segment by either scrolling down and clicking on the "Recommend Me Something" button, or by clicking <router-link to="/eroge">here</router-link>. 
                If you feel like you're still unsure, I suggest you stick around and give this bit a read.
                It might seem long, but I'll try to entertain you as much as I can on your journey to peek degeneracy.<br>
                So buckle up buckaroo, cuz' this is gonna be quite the wild ride.
            </span>
        </div>
    </main>
</template>

<style scoped lang="scss">
    @import '../assets/design.scss'
</style>