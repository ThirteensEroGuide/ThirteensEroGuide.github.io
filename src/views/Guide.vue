<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Badge from '../components/BadgeComponent.vue'

const EROGE_WIKI = 'https://en.wikipedia.org/wiki/Eroge'
const LEGUI_SETTINGS = 'https://imgur.com/tZZMLor'
const LEGUI_EXAMPLE = 'https://imgur.com/2Mhosrp'
const ALT_TUT = 'https://www.336gamereviews.com/how-to-play-japanese-games-on-windows-10/'
const NTLEA_EXAMPLE = 'https://imgur.com/jjzR3Fx'
const TEXTR_TUT = 'https://www.youtube.com/watch?v=eecEOacF6mw'
const XUNITY_INST = 'https://github.com/bbepis/XUnity.AutoTranslator#installation'
const yuuka = 'https://www.dlsite.com/home/work/=/product_id/RJ403038.html/?locale=en_US'

const LINK_WINRAR = 'https://www.win-rar.com/'
const LINK_7ZIP = 'https://www.7-zip.org/'
const LINK_QBIT = 'https://www.qbittorrent.org/download.php'
const LINK_LE = 'https://pooi.moe/Locale-Emulator/'
const LINK_NTLEA = 'https://github.com/zxyacb/ntlea/releases'
const LINK_TEXTR = 'https://github.com/Artikash/Textractor/releases'
const LINK_XUNITY = 'https://github.com/bbepis/XUnity.AutoTranslator/releases/tag/v5.2.0'
const LINK_RTP = 'https://www.rpgmakerweb.com/run-time-package'

const DLsite = 'https://www.dlsite.com/maniax/'
const nyaa = 'https://sukebei.nyaa.si/'
const f95 = 'https://f95zone.to/'
const itchio = 'https://itch.io/games/tag-adult'
const nutaku = 'https://www.nutaku.net/home/'
const johren = 'https://www.johren.net/'

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
        <div class="side-menu">
            
        </div>

        <div class="left-aligned text-wrapper">

            <!-- INTRO -->

            <span class="unselectable title">
                Welcome to the <span class="red bold" @click="toggleFun">{{ funMsg }}</span>
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

            <div class="separator"><hr /></div>
            <div class="sep-space"></div>
            <div class="sep-space"></div>
            
            <!-- TOOLS -->
            
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
                <span class="subtitle">2. qBittorrent</span><Badge content="Recommended" class="bg-rec"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_QBIT target="_blank" rel="noopener norefferer">qBittorrent (Download)</a></span>
            <span class="text">
                Any torrenting tool will do, but I personally prefer qBittorrent. If you already have one, skip this, but if not, just install the program like you would any other one and use it whenever you have a magnet link/torrent that you want to download.
            </span>
            <div class="app-wrapper">
                <span class="subtitle">3. LEGUI</span><Badge content="Recommended" class="bg-rec"></Badge>
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
                <span class="subtitle">4. NTLEA</span><Badge content="Recommended" class="bg-rec"></Badge>
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
                <span class="subtitle">5. Textractor</span><Badge content="Optional" class="bg-opt"></Badge>
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
                <span class="subtitle">6. XUnity Auto Translator</span><Badge content="Optional" class="bg-opt"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_XUNITY target="_blank" rel="noopener norefferer">XUnity Auto Translator (Download)</a></span>
            <span class="text">
                If the game you're about to play was made with Unity, you potentially have a better option than using Textractor. All you have to do in this case is go to the XUnity Auto Translator
                GitHub release page provided above, download the <span class="code-fragment">XUnity.AutoTranslator-ReiPatcher-5.X.X.zip</span>, extract it into the game folder next to the main <span class="code-fragment">.exe</span> file and run the 
                <span class="code-fragment">GameExe (Patch and Run).lnk</span>. From that point forward you'll be able to launch the game from the main <span class="code-fragment">.exe</span> file.
            </span>
            <span class="disclaimer text">
                <span class="bold">Important</span>: If the game is using a plugin manager like BepInEx, please refer to the <a :href=XUNITY_INST target="_blank" rel="noopener norefferer">installation section</a> of the GitHub repository. You should avoid using the Standalone version in that case and
                follow the instructions for the corresponding plugin manager. For example, if the game is using BepInEx, the game folder will contain a BepInEx folder. In that case, refer to the <i>BepInEx Plugin</i> section.
            </span>
            <div class="sep-space"></div>
            <div class="half-sep-space"></div>
            <div class="app-wrapper">
                <span class="subtitle">7. RPG Maker RTP</span><Badge content="Optional" class="bg-opt"></Badge>
            </div>
            <span class="dl text"><a :href=LINK_RTP target="_blank" rel="noopener norefferer">RPG Maker RTP (Download)</a></span>
            <span class="text">
                Occasionally, some japanese games made in RPG Maker require you to download the so-called <i>RPG Maker Run Time Package</i> (RTP) in order to run them. Unlike the actual RPG Maker tools, the RTP is completely free and used
                to minimize the file size in which games need to be shipped out. Out of all the games I have downloaded I only needed it twice so far, but if you want to avoid any complications with that altogether, click on the link above and download the RTP for <span class="bold">VX Ace</span>.
                Depending on the RPG Maker game (and thus the age of the game) you might require another version, but so far I only needed the VX Ace one.
            </span>

            <div class="separator"><hr /></div>
            <div class="sep-space"></div>
            <div class="sep-space"></div>

            <span class="unselectable title">
                Where to find <span class="red bold">The Goods</span>
            </span>
            <span class="text">
                Now that we're finally done with the tools and you hopefully picked up at least the Required and Recommended ones, I will introduce some sites that are incredibly useful for discovering and downloading eroge.
                A small disclaimer here: Keep in mind that we will be wading in somewhat dubious waters. Take appropriate precautions and ideally use a VPN.
            </span>
            <span class="subtitle"><a :href=DLsite target="_blank" rel="noopener norefferer">DLsite</a></span>
            <span class="text">
                DLsite is basically the Steam of Japanese multimedia, whether that is music, manga, doujinshi, or 1.47GB of Yuuka from Blue Archive doing sleeping ASMR for about $9.00 (<a :href=yuuka target="_blank" rel="noopener norefferer">no joke</a>).
                It is also the proper way of obtaining whatever eroge you want to play without having to resort to more dubious methods I will tell you about further below. Of course this costs you money, but if you want to support the creators, this is the
                way to go.<br>
                <br>
                For us the following two categories are relevant: The <i>'Doujin'</i> category and the <i>'H Games'</i> category. <br>
                Under the 'Doujin' category you will find games that were either made by a single person or by small, so-called circles.
                A circle is more or less the equivalent to a publisher; however, while some big companies like Yostar are registered as a circle on DLsite, circles themselves can sometimes be nothing more
                than a loose cooperation between certain programmers and artists working under a united banner to get a bigger audience for their indie games. There are some genuinely great games in this category
                (in fact, many of my recommendations will be from here), so don't sleep on it.<br>
                <br>
                The latter category features games by more established companies, such as Kiss and ALICE SOFT. You can expect to see prices more akin to proper video game releases on there, so typically between $20 - $60 USD.
                Suffice to say the games you'll find here are also significantly longer and arguably more polished than some of the games in the first category, which justifies the higher price. That of course is only relevant to
                you if you want to stay on the morally correct side of things. In case you are not, give the next two entries a read.
                
                <div class="unselectable image-wrapper">
                    <img src="../assets/images/dlsite.png" />
                </div>

                The nice thing about DLsite and its community is that many developers publish a demo version of their game you can try out for free before buying the actual game. This not only helps you in deciding whether you like
                a game or not, but also helps you figuring out if the game has any compatibility issues that need to be taken care of with the tools I have listed above.
            </span> 
            <span class="subtitle"><a :href=nyaa target="_blank" rel="noopener norefferer">sukebei.nyaa.si</a></span>
            <span class="text">
                Whenever people ask me about how to get into eroge, I tell them that they have two best friends when it comes to obtaining eroge in a more accessible way. Yeah, sukebei.nyaa.si is one of these friends.
                If you are into anime (high chance you are, let's be real) you might have come across nyaa.si — sukebei.nyaa.si is basically its R18 version.<br>
                <br>
                What we are mainly interested in here are the games, so head to the categories filter next to the search bar at the top, select 'Games' and click on the search button.
                You're now able to see the most recent uploads by the community. If you're interested in a specific game, you can obviously use the search bar too.

                <div class="unselectable image-wrapper">
                    <img src="../assets/images/nyaa_intro.gif" />
                </div>

                Once you have found a game you want to download, either click on the title and download the torrent file or use the provided magnet link. Main difference being that
                torrent files are downloaded from a webserver while magnet links allow you to directly download from seeds and leechers because the link already contains the calculated hash needed for the torrenting process. Without going into any further technical details
                (if you're interested, google is your friend), the first option will basically give you a <span class="code-fragment">.torrent</span> file that has to be opened with your torrenting tool of choice, while magnet links are typically opened automatically by your program.<br>
                Tl;dr: If you have the possibility using a magnet link, do so.

            </span>
            <span class="subtitle"><a :href=f95 target="_blank" rel="noopener norefferer">f95zone</a></span>
            <span class="text">
                Last but not least I'd like to mention the other best friend you'll have on your eroge journey, and believe me when I say that this site is an absolute gem. A bit reminiscent of old-school forums, f95zone 
                — or just f95 — is a community of absolute degenerates providing download links for almost any eroge imaginable, organizing fan translations (even if it's just a machine translation, also jokingly referred to as 'poetry'), 
                uploading uncensor patches, suggesting you games and so much more.<br>
                <br>
                The only downside is that the site requires you to have an account. But after you've done that, your entire search process will simply consist of typing '{Name of the Eroge} f95' into your google search and in 49/50
                times you'll find a forum entry with the game and installation instructions provided. More often than not the game thread will also feature mods, patches and comments/questions by other users commenting on 
                potential issues.<br>
            </span>
            <span class="disclaimer text">
                Please be aware that f95zone does not allow any loli or shota content on its site. For that refer to sukebei.nyaa.si.
            </span>
            <div class="half-sep-space"></div>
            <span class="disclaimer text">
                <span class="bold">Important</span>: The name of the game on DLsite and the name of the game for the game thread on f95zone can sometimes vary greatly. Don't be immediately discouraged when you don't find a game thread, sometimes it's just named differently.
                Try searching with the japanese game name instead (you can toggle the language on DLsite in the top right corner) or only use certain keywords of the title + f95 in your google search.
            </span>
            <div class="sep-space"></div>
            <div class="half-sep-space"></div>
            <span class="subtitle" style="font-weight: normal">Honorable Mentions:</span>
            <span class="text">
                <a :href=itchio target="_blank" rel="noopener norefferer">itch.io</a> — Actually a site for indie devs to publish their games on. You can filter for R18 stuff and find some explicit non-Japanese games on there.<br>
                <a :href=nutaku target="_blank" rel="noopener norefferer">Nutaku</a> — Probably the most known western publisher for eroge. Unfortunately a lot of junk you have to dig through.<br>
                <a :href=johren target="_blank" rel="noopener norefferer">Johren</a> — Similar to Nutaku but slightly different product range.<br>
            </span>

            <div class="separator"><hr /></div>
            <div class="sep-space"></div>
            <div class="sep-space"></div>

            <span class="unselectable title">
                An <span class="red bold">Example</span>
            </span>

            <div class="separator"><hr /></div>
            <div class="sep-space"></div>
            <div class="sep-space"></div>

            <span class="unselectable title">
                What to do if you're on <span class="red bold">Linux/Mac</span>
            </span>

            <div class="separator"><hr /></div>
            <div class="sep-space"></div>
            <div class="sep-space"></div>

            <span class="unselectable title">
                <span class="red bold">Tl;dr</span>
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
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 1.5em;
        padding-bottom: 1.5em;

        img {
            border-radius: 5px;
            max-width: 100%;
            pointer-events: none;
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

    .separator {
    padding-top: 2.5em;
    width: 100%;
    padding-left: 1.5em;
    padding-right: 1.5em;
    align-self: center;
  }

    .sep-space {
        height: 1em;
        width: 100%;
    }

    .half-sep-space {
        height: 0.5em;
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