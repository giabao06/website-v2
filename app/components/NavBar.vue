<template>
    <div
        class="min-w-full min-h-1/4 flex flex-row gap-3.5 p-4 pl-8 pr-8 bg-blue-100"
    >
        <div class="justify-start">
            <NuxtImg
                src="https://github.com/giabao06.png"
                alt="giabao06 github profile picture"
                width="48"
                height="48"
            />
        </div>
        <div class="justify-end flex flex-row gap-4 flex-1 items-center">
            <ul
                class="min-h-full flex flex-row list-image-none gap-6 items-center"
            >
                <li>About Me</li>
                <li>Contact</li>
                <li>Stuff I write</li>
            </ul>
            <select id="lang-select" class="border-solid border-stone-800">
                <option value="en-AU">English (Australia)</option>
                <option value="vi-VN">Tiếng Việt</option>
                <option value="fr-FR">Français (France)</option>
            </select>
        </div>
    </div>
</template>
