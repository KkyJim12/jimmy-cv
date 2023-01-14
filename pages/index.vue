<template>
    <div
        class="grid grid-cols-12 p-10 gap-x-6 bg-gradient-to-r from-red-500 to-purple-500 min-h-screen gap-y-10 md:gap-y-6 2xl:gap-y-0"
    >
        <div class="col-span-12 md:col-span-4 2xl:col-span-3"><ProfileInfo /></div>
        <div class="col-span-12 md:col-span-8 2xl:col-span-6">
            <Skill />
            <HighlightProject />
        </div>
        <div class="col-span-12 md:col-span-12 2xl:col-span-3">
            <Experience />
        </div>
    </div>
</template>

<style>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
    scrollbar-width: auto;
    scrollbar-color: #96a1b0 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 16px;
}

*::-webkit-scrollbar-track {
    background: #ffffff;
}

*::-webkit-scrollbar-thumb {
    background-color: #96a1b0;
    border-radius: 10px;
    border: 3px solid #ffffff;
}
</style>

<script>
export default {};
</script>
