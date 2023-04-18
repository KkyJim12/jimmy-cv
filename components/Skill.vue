<template>
    <div class="bg-white shadow-md p-10 flex flex-col space-y-6 rounded overflow-x-auto">
        <h1 class="text-2xl font-semibold">Main Stacks</h1>
        <div class="flex flex-col space-y-6">
            <div class="flex space-x-6">
                <font-awesome-icon
                    v-for="mainStack in mainStacks"
                    :key="mainStack.id"
                    :class="
                        mainStack.title === 'VueJS'
                            ? 'text-4xl text-green-500 hover:scale-110 transform duration-300 cursor-pointer'
                            : mainStack.title === 'Laravel'
                            ? 'text-4xl text-red-500 hover:scale-110 transform duration-300 cursor-pointer'
                            : mainStack.title === 'Node'
                            ? 'text-4xl text-lime-500 hover:scale-110 transform duration-300 cursor-pointer'
                            : mainStack.title === 'JS'
                            ? 'text-4xl text-yellow-500 hover:scale-110 transform duration-300 cursor-pointer'
                            : mainStack.title === 'PHP'
                            ? 'text-4xl text-blue-500 hover:scale-110 transform duration-300 cursor-pointer'
                            : 'text-4xl text-orange-500 hover:scale-110 transform duration-300 cursor-pointer'
                    "
                    :icon="['fab', `${mainStack.icon}`]"
                />
            </div>
            <div class="flex space-x-10">
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">Language</h1>
                    <h4>- Javascript</h4>
                    <h4>- Go</h4>
                    <h4>- PHP</h4>
                    <h4>- Java</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">Styling</h1>
                    <h4>- Tailwind</h4>
                    <h4>- Bootstrap</h4>
                    <h4>- Vuetify</h4>
                    <h4>- Material UI</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">Framework</h1>
                    <h4>- VueJS</h4>
                    <h4>- React</h4>
                    <h4>- NuxtJS</h4>
                    <h4>- Laravel</h4>
                    <h4>- NodeJS</h4>
                    <h4>- Gin & Gorm</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">Database</h1>
                    <h4>- Mysql</h4>
                    <h4>- Mongodb</h4>
                    <h4>- Postgresql</h4>
                    <h4>- Redis</h4>
                    <h4>- Neo4J</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">Cloud</h1>
                    <h4>- Docker</h4>
                    <h4>- AWS</h4>
                    <h4>- GCP</h4>
                    <h4>- Netlify</h4>
                    <h4>- Digital Ocean</h4>
                    <h4>- Heroku</h4>
                </div>
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl font-semibold">Blockchain</h1>
                    <h4>- Solidity</h4>
                    <h4>- Hardhat</h4>
                    <h4>- Web3.js</h4>
                    <h4>- EtherJS</h4>
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
                },

                {
                    id: 2,
                    title: 'Laravel',
                    icon: 'laravel',
                },

                {
                    id: 3,
                    title: 'Node',
                    icon: 'node',
                },

                {
                    id: 4,
                    title: 'JS',
                    icon: 'js',
                },

                {
                    id: 5,
                    title: 'PHP',
                    icon: 'php',
                },

                {
                    id: 6,
                    title: 'GIT',
                    icon: 'git-alt',
                },
            ],
        };
    },
};
</script>
