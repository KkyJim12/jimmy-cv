<template>
    <div class="bg-white shadow-md p-10 flex flex-col space-y-6 rounded overflow-x-auto">
        <h1 class="text-2xl font-semibold">Main Stacks</h1>
        <div class="flex flex-col space-y-6">
            <div class="flex space-x-6">
                <font-awesome-icon
                    v-for="mainStack in mainStacks"
                    :key="mainStack.id"
                    :class="`text-4xl text-${mainStack.color}-${mainStack.colorValue} hover:scale-110 transform duration-300 cursor-pointer`"
                    :icon="['fab', `${mainStack.icon}`]"
                />
            </div>
            <div class="flex space-x-10">
                <div class="flex flex-col space-y-2">
                    <h1 class="text-2xl font-semibold">Language</h1>
                    <h4>- Javascript</h4>
                    <h4>- PHP</h4>
                    <h4>- Java</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-2xl font-semibold">Styling</h1>
                    <h4>- Tailwind</h4>
                    <h4>- Bootstrap</h4>
                    <h4>- Vuetify</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-2xl font-semibold">Framework</h1>
                    <h4>- VueJS</h4>
                    <h4>- NuxtJS</h4>
                    <h4>- Laravel</h4>
                    <h4>- NodeJS</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-2xl font-semibold">Database</h1>
                    <h4>- Mysql</h4>
                    <h4>- Mongodb</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-2xl font-semibold">Cloud</h1>
                    <h4>- Docker</h4>
                    <h4>- AWS</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mainStacks: [
                {
                    id: 1,
                    title: 'VueJS',
                    icon: 'vuejs',
                    color: 'green',
                    colorValue: '500',
                },

                {
                    id: 2,
                    title: 'Node',
                    icon: 'node',
                    color: 'green',
                    colorValue: '700',
                },

                {
                    id: 3,
                    title: 'Laravel',
                    icon: 'laravel',
                    color: 'red',
                    colorValue: '500',
                },

                {
                    id: 4,
                    title: 'JS',
                    icon: 'js',
                    color: 'yellow',
                    colorValue: '300',
                },

                {
                    id: 5,
                    title: 'PHP',
                    icon: 'php',
                    color: 'blue',
                    colorValue: '500',
                },

                {
                    id: 6,
                    title: 'GIT',
                    icon: 'git-alt',
                    color: 'yellow',
                    colorValue: '500',
                },
            ],
        };
    },
};
</script>
