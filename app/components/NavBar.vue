<template>
    <div
        class="w-full min-h-1/4 flex flex-row gap-3.5 pl-8 pr-8 bg-navblue shadow-lg"
    >
        <div class="justify-start pt-4 pb-4">
            <NuxtLink to="/">
                <NuxtImg
                    src="profile.jpg"
                    alt="giabao06 github profile picture"
                    width="48"
                    height="48"
                    class="rounded-3xl"
                />
            </NuxtLink>
        </div>
        <div
            class="justify-end inline-flex flex-row gap-4 flex-1 items-center font-quicksand"
        >
            <ul
                class="h-full inline-flex flex-row list-image-none items-center w-sm"
            >
                <li class="px-3 my-auto w-full h-full bg-about">
                    <NuxtLink
                        to="/"
                        class="select-none w-full h-full flex items-center justify-center"
                        >About Me</NuxtLink
                    >
                </li>
                <li class="px-3 my-auto w-full h-full bg-contact">
                    <NuxtLink
                        to="/"
                        class="select-none w-full h-full flex items-center justify-center"
                        >Contact</NuxtLink
                    >
                </li>
                <li class="px-3 my-auto w-full h-full bg-stuff">
                    <NuxtLink
                        to="/"
                        class="select-none w-full h-full flex items-center justify-center"
                        >Stuff I wrote</NuxtLink
                    >
                </li>
            </ul>
            <select id="lang-select" class="border-solid border-stone-800">
                <option value="en-AU">English (Australia)</option>
                <option value="vi-VN">:O</option>
                <option value="fr-FR">C'est i18n?</option>
            </select>
        </div>
    </div>
</template>
