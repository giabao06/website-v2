<template>
    <div
        class="w-full min-h-1/4 flex flex-row gap-3.5 pl-8 pr-8 bg-navblue shadow-lg"
    >
        <div class="justify-start pt-4 pb-4">
            <NuxtLink to="/">
                <NuxtImg
                    src="https://github.com/giabao06.png"
                    alt="giabao06 github profile picture"
                    width="48"
                    height="48"
                />
            </NuxtLink>
        </div>
        <div class="justify-end inline-flex flex-row gap-4 flex-1 items-center">
            <ul
                class="h-full inline-flex flex-row list-image-none items-center w-sm"
            >
                <li class="px-3 my-auto w-full h-full bg-about">
                    <NuxtLink
                        to="/about"
                        class="select-none w-full h-full flex items-center justify-center"
                        >About Me</NuxtLink
                    >
                </li>
                <li class="px-3 my-auto w-full h-full bg-contact">
                    <NuxtLink
                        to="/contact"
                        class="select-none w-full h-full flex items-center justify-center"
                        >Contact</NuxtLink
                    >
                </li>
                <li class="px-3 my-auto w-full h-full bg-stuff">
                    <NuxtLink
                        to="/stuff"
                        class="select-none w-full h-full flex items-center justify-center"
                        >Stuff I wrote</NuxtLink
                    >
                </li>
            </ul>
            <select id="lang-select" class="border-solid border-stone-800">
                <option value="en-AU">English (Australia)</option>
                <option value="vi-VN">Tiếng Việt</option>
                <option value="fr-FR">Français (France)</option>
            </select>
        </div>
    </div>
</template>
