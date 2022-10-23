<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Badge from '../components/InfoBadge.vue'

const EROGE_WIKI = 'https://en.wikipedia.org/wiki/Eroge';
const LEGUI_SETTINGS = 'https://imgur.com/tZZMLor';
const LEGUI_EXAMPLE = 'https://imgur.com/2Mhosrp';
const ALT_TUT = 'https://www.336gamereviews.com/how-to-play-japanese-games-on-windows-10/';
const NTLEA_EXAMPLE = 'https://imgur.com/jjzR3Fx';
const TEXTR_TUT = 'https://www.youtube.com/watch?v=eecEOacF6mw';
const XUNITY_INST = 'https://github.com/bbepis/XUnity.AutoTranslator#installation';

const LINK_WINRAR = 'https://www.win-rar.com/';
const LINK_7ZIP = 'https://www.7-zip.org/';
const LINK_LE = 'https://pooi.moe/Locale-Emulator/';
const LINK_NTLEA = 'https://github.com/zxyacb/ntlea/releases';
const LINK_TEXTR = 'https://github.com/Artikash/Textractor/releases';
const LINK_XUNITY = 'https://github.com/bbepis/XUnity.AutoTranslator/releases/tag/v5.2.0';
const LINK_RTP = 'https://www.rpgmakerweb.com/run-time-package';
</script>

<template>
    <main class="page">
        <div class="side-menu">
            
        </div>

        <div class="left-aligned text-wrapper">
            <span class="unselectable title">
                Welcome to the <span class="red bold">Fun Zone</span>
            </span>
            <span class="text">
                Although chances are high you already know why you're here, I'll explain what this guide is all about once more, just in case.
                This guide is targetted to those who are interested starting with so-called <a :href=EROGE_WIKI target="_blank" rel="noopener norefferer">Eroge</a> (エロゲ, Erotic Game): Japanese games that feature explicit content, mainly graphics of sexual nature, inside them.
                Unfortunately, many of them are hardly accessible to the average person, especially if you live outside of Japan, which is why I felt compelled to write something that helps you to navigate through this — frankly speaking — absolute mess.
            </span>
            <span class="text">
                If you already know everything and feel comfortable enough getting what you need without this guide, feel free to skip this entire segment by either scrolling down and clicking on the "Recommend Me Something" button, or by clicking <router-link to="/eroge">here</router-link>. 
                If you feel like you're still unsure, I suggest you stick around and give this bit a read.
                It might seem long, but I'll try to entertain you as much as I can on your journey to peek degeneracy.<br>
                So buckle up buckaroo, cuz' this is gonna be quite the wild ride.
            </span>
            <span class="disclaimer text">
                <span class="red bold">Disclaimer</span><br>
                This guide is mainly tailored for the Microsoft ecosystem (Windows 7 onwards to be precise), simply because we're dealing with a ton of <span class="code-fragment">.exe</span> files here.
                Compatability is a big factor too. I will mention how to set up things for non-Windows systems here and there, but I cannot guarantee that it'll work.
            </span>
            <div class="sep-space"></div>
            <div class="sep-space"></div>
            <span class="unselectable title">
                The <span class="red bold">Tools</span>
            </span>
            <span class="text">
                Before we can actually start with the fun stuff, we need to go through a list of tools you may or may not need in order to play those games.
                While some games were developed by english speaking folks or have an english localization due to popular demand, many do not, so in order for you to enjoy them we'll have to take a look at certain locale emulators, translation tools, and so on.
                I honestly highly recommend to download all of them, but I've also included a small badge next to each program, indicating how important it actually is to have.
            </span>
            <div class="app-wrapper">
                <span class="subtitle">1. WinRar / 7-Zip</span><Badge content="Required" class="bg-req"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_WINRAR target="_blank" rel="noopener norefferer">WinRar (Download)</a> <a :href=LINK_7ZIP target="_blank" rel="noopener norefferer">7-Zip (Download)</a></span>
            <span class="text">
                Bit of an obvious one, but in case you don't have an unzipping tool yet, now is the time.
                Most games you'll download ship in a <span class="code-fragment">.zip</span> or <span class="code-fragment">.rar</span> file.
                In order to open (to "unzip") these files, you'll need either WinRar or 7-Zip. Download <span class="bold">one</span> of the two.
                It doesn't really matter which of the two. WinRar infamously starts pesting you after the 40-day trial ends (don't worry, you will still be able to use it) — but really, it doesn't matter.
            </span>
            <div class="app-wrapper">
                <span class="subtitle">2. LEGUI</span><Badge content="Recommended" class="bg-rec"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_LE target="_blank" rel="noopener norefferer">LE (Download)</a></span>
            <span class="text">
                Or just LE, short for Locale Emulator, is a helpful tool allowing you to swindle whatever program you want to open into thinking that you're actually running it with a Japanese system.
                I have already teased at it before, but there aren't that many games (although, still more than you might expect) that have an english version available.
                If they don't, chances are high that they were only meant to be played by a Japanese audience, thus forcing you to join the ranks as an imposter. 
                There's also plenty of games that got translated by dedicated fans, in which case the same thing still applies however. And oddly enough, there are even a few with an official english translation that <i>still</i> require a Japanese system to run on.
                LE also helps to get rid of unicode issues by converting non-unicode codepages into the one you need, even if the game would run perfectly fine without any locale emulation.<br>
                <br>
                In any case, follow the installation steps as described in the link above. If you have no idea how to get stuff off of GitHub, just get the MEGA version. 
                Also, and that's important, install it at an appropriate location and keep it there. I have my LE stuff in a folder hidden 2 folders deep on my desktop. Do not delete it. <span class="bold">Do not move it</span>.
                If you chose a wrong install location, uninstall the entire thing as described on the LE page and start anew.<br>
                In case you're using Windows 11 by the way, don't worry, it works, even if they don't list it on their page.
            </span>
            <span class="disclaimer text">
                <span class="bold">Important</span>: LE only works for x86 (32-bit) applications. If the game you want to emulate is x64 (64-bit), you must install <span class="bold">NTLEA</span>.
            </span>
            <div class="sep-space"></div>
            <span class="text">
                After installing it, open the installation folder and double-click the <span class="code-fragment">LEGUI.exe</span>. You will hopefully be greeted by a small window with a few settings.
                In case you don't see anything, attempt starting the <span class="code-fragment">LEGUI.exe</span> as administrator. If that doesn't help, restart your PC. If you still don't see anything, uninstall the application and start anew.<br>
                <br>
                If everything is fine and you see the window, set it up as in the image seen <a :href=LEGUI_SETTINGS target="_blank" rel="noopener norefferer">here</a>.<br> 
                <br>
                Now click 'Save', close the <span class="code-fragment">LEGUI.exe</span> and restart your PC. If everything has worked correctly, when right-clicking 
                your x32 <span class="code-fragment">.exe</span> of choice (make sure it's x32, otherwise you won't see the option), you should be able to see a "Locale Emulator"
                option as visualized on the LE page (or <a :href=LEGUI_EXAMPLE target="_blank" rel="noopener norefferer">here</a>). When hovering over it, you can click <i>Run in Japanese</i> or <i>Run in Japanese (Admin)</i> to start the game in the required locale. Under Windows 11, the option is hidden behind the
                "Show More Options" tab when right-clicking your application.<br>
                <br>
                If nothing works or this is too complicated for you, you also have the option to change your system locale to Japanese and install a Japanese Language Pack as seen in <a :href=ALT_TUT target="_blank" rel="noopener norefferer">this tutorial</a>, in which case the LE and NTLEA installations become superfluous.
                However, I highly suggest to install LE (and NTLEA) instead, as changing your locale can come with certain, sometimes unwanted side effects.
            </span>
            <div class="app-wrapper">
                <span class="subtitle">3. NTLEA</span><Badge content="Recommended" class="bg-rec"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_NTLEA target="_blank" rel="noopener norefferer">NTLEA (Download)</a></span>
            <span class="text">
                As already mentioned in the LE segment, LE can only emulate x86 applications. Although I have noticed that there are more eroge shipped in x86 than in x64, you'll once in a while still get a x64 one, which is where NTLEA comes in handy.
                After clicking on the download link above, click on the <span class="code-fragment">ntleas046_x64.7z</span> and extract the archive to a place you can easily find.
                I have it in a folder next to my LE installation, do <span class="bold">not</span> extract it in any of your games' folders.<br>
                <br>
                Once extracted, double-click the <span class="code-fragment">ntleasWin.exe</span> and verify that the selected codepage is set to <i>Japanese (Shift-JIS)</i> and the selected locale is <i>Japanese</i>. Click on 'Save & Exit'.<br>
                <br>
                If you have done everything correctly, you'll see a 'Run With Ntleas' option after right-clicking a x64 program, as seen <a :href=NTLEA_EXAMPLE target="_blank" rel="noopener norefferer">here</a>. If you don't see anything, restart your PC or try to open NTLEA as administrator.
                In order to run your game, you'll have to click on 'Open Config Dialog', make sure that the just mentioned codepage and locale settings are set to Japanese and click on 'Save & Run' at the bottom.
            </span>
            <div class="app-wrapper">
                <span class="subtitle">4. Textractor</span><Badge content="Optional" class="bg-opt"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_TEXTR target="_blank" rel="noopener norefferer">Textractor (Download)</a></span>
            <span class="text">
                Unless you're one of the 130 million-ish people that are able to speak Japanese, chances are high you'll want a tool that helps you with translating moon runes.
                Fortunately enough, there is a small yet dedicated fan base actively translating the better games into english, but once in a while you'll still come across a game that doesn't have a translation because
                it's either very niche or very new, in which case Textractor might come in useful.<br>
                <br>
                After downloading Textractor (I recommend using the <span class="code-fragment">Textractor-5.X.X-Setup.exe</span>) the installation folder will contain a x64 and a x86 folder. Depending on whether the game
                is x86 or x64, you'll have to open the corresponding folder, scroll down, and double-click the <span class="code-fragment">Textractor.exe</span> to run the auto-translation software.
            </span>
            <span class="disclaimer text">
                I highly recommend watching <a :href=TEXTR_TUT target="_blank" rel="noopener norefferer">this short video</a> made by the creator of Textractor to understand how to properly use it.
            </span>
            <div class="sep-space"></div>
            <span class="text">
                Don't worry about picking the wrong instruction set — if you try to run a x86 game with the x64 version, Textractor will just tell you to switch to the other one.
                Using Textractor overall is a bit hit or miss sadly. It is a bit hard to use and only works about 50% of the time depending on the game.
                But if it works it works, and it is definitely still your best all-round option to have.
            </span>
            <div class="app-wrapper">
                <span class="subtitle">5. XUnity Auto Translator</span><Badge content="Optional" class="bg-opt"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_XUNITY target="_blank" rel="noopener norefferer">XUnity Auto Translator (Download)</a></span>
            <span class="text">
                If the game you're about to play was made with Unity, you potentially have a better option than using Textractor. All you have to do in this case is go to the XUnity Auto Translator
                GitHub release page provided above, download the <span class="code-fragment">XUnity.AutoTranslator-ReiPatcher-5.X.X.zip</span>, extract it into the game folder next to the main <span class="code-fragment">.exe</span> file and run the 
                <span class="code-fragment">GameExe (Patch and Run).lnk</span>. From that point forward you'll be able to launch the already translated game from the main <span class="code-fragment">.exe</span> file.
            </span>
            <span class="disclaimer text">
                <span class="bold">Important</span>: If the game is using a plugin manager like BepInEx, please refer to the <a :href=XUNITY_INST target="_blank" rel="noopener norefferer">installation section</a> of the GitHub repository. You should avoid using the Standalone version in that case and
                follow the instructions for the corresponding plugin manager. For example, if the game is using BepInEx, the game folder will contain a BepInEx folder. In that case, refer to the <i>BepInEx Plugin</i> section.
            </span>
            <div class="sep-space"></div>
            <div class="app-wrapper">
                <span class="subtitle">6. RPG Maker RTP</span><Badge content="Optional" class="bg-opt"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_RTP target="_blank" rel="noopener norefferer">RPG Maker RTP (Download)</a></span>
            <span class="text">
                Occasionally, some japanese games made in RPG Maker require you to download the so-called <i>RPG Maker Run Time Package</i> (RTP) in order to run them. Unlike the actual RPG Maker tools, the RTP is completely free and used
                to minimize the file size in which games need to be shipped out. Out of all the games I have downloaded I only needed it twice so far, but if you want to avoid any complications with that altogether, click on the link above and download the RTP for <span class="bold">VX Ace</span>.
                Depending on the RPG Maker game (and thus the age of the game) you might require another version, but so far I only needed the VX Ace one.
            </span>
            <span class="unselectable title">
                Where to find <span class="red bold">The Goods</span>
            </span>
        </div>
    </main>
</template>

<style scoped lang="scss">
    /* Text Formatting */
    .title {
        font-size: 60px;
        font-weight: 800;
        text-transform: uppercase;
        font-family: 'Bahiana', cursive;
        padding: 0.1em;
        color: white;
        text-align: center !important;
    }

    .subtitle {
        font-size: 36px;
        font-weight: 600;
        color: white;
        opacity: 0.95;
    }

    .text {
        font-size: 18px;
        font-weight: normal;
        color: white;
        opacity: 0.9;
        padding-bottom: 1.5em;
    }

    .disclaimer {
        background-color: #131313;
        border-radius: 5px;
        padding: 1em;
        place-items: center;
    }

    .code-fragment {
        font-family: Consolas, monaco, monospace;
        border-radius: 5px;
        background-color: #0e0e0e;
    }

    .red {
        color: red;
    }

    .bg-req {
        background-color: red;
    }

    .bg-rec {
        background-color: #18864a;
    }

    .bg-opt {
        background-color: rgb(0, 148, 168);
    }

    .semi-bold {
        font-weight: 600;
    }

    .bold {
        font-weight: 800;
    }

    .dl {
        opacity: 0.6;
    }

    .image-wrapper {
        img {
            border-radius: 5px;
        }
    }

    /* Page Alignment */
    .left-aligned {
        text-align: left;
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
    }

    .sep-space {
        height: 1em;
        width: 100%;
    }

    .app-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    /* Side Menu */
    .side-menu {
        position: absolute;
        /* TODO */
    }

    /* Link Hover */
    a {
        color: inherit;
        text-decoration: none;
    }

    a {
    background:
        linear-gradient(
            to right,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 1)
        ),
        linear-gradient(
            to right,
            rgba(255, 0, 0, 1),
            rgba(255, 0, 180, 1),
            rgba(0, 100, 200, 1)
        );
        background-size: 100% 1px, 0 1px;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 350ms;
    }
    a:hover {
        background-size: 0 1px, 100% 1px;
    }
</style>