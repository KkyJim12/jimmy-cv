<template>
    <div style="height: 70vh" class="bg-white shadow-md p-10 flex flex-col space-y-6 mt-6 rounded overflow-auto">
        <h1 class="text-2xl font-semibold">Highlight Projects</h1>
        <div class="flex flex-col space-y-6">
            <div v-for="project in projects" :key="project.id" class="flex flex-col space-y-2">
                <h4 class="text-lg font-semibold">{{ project.title }} {{ `(${project.type})` }}</h4>
                <p>Stacks: {{ project.stacks }}</p>
                <p>{{ project.description }}</p>
                <p>Role: {{ project.role }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Kuliber',
                    stacks: 'NuxtJS, Laravel, Tailwind, Mysql, Web socket',
                    description: 'Chat and stock management system.',
                    role: 'Build a website.',
                    type: 'Personal, MSC Dissertation',
                },
                {
                    id: 2,
                    title: 'Crypto Dashboard',
                    stacks: ' React, Tailwind, Web Socket',
                    description: 'Crypto Dashboard cloning design from Goko connect to Binance web socket',
                    role: 'Build a dashboard part that connect to binance web socket and api.',
                    type: 'Freelance',
                },
                {
                    id: 3,
                    title: 'Spinwheel',
                    stacks: 'React, Tailwind, NodeJS (Express), Mysql',
                    description: 'Game item random online.',
                    role: 'Build a whole website.',
                    type: 'Freelance',
                },
                {
                    id: 4,
                    title: 'Messenger web',
                    stacks: ' NuxtJS, Tailwind',
                    description: 'Chat app connect to Facebook messenger.',
                    role: 'Create chat page that connect to api that integrate with facebook messenger.',
                    type: 'Freelance',
                },
                {
                    id: 5,
                    title: 'Royaltour',
                    stacks: ' NuxtJS',
                    description: 'Tour agency system',
                    role: 'Build a whole website.',
                    type: 'Freelance',
                },
                {
                    id: 6,
                    title: 'Jimmytechnology',
                    stacks: ' Laravel, Jquery, Bootstrap, Mongodb',
                    description: 'Company portfolio website for Jimmytechnology co., ltd.',

                    role: 'Dicut website from Figma.',
                    type: 'Personal',
                },
                {
                    id: 7,
                    title: 'Jimmycoding',
                    stacks: 'Laravel, Mysql',
                    description: 'E learning platform for jimmycoding programming school.',
                    role: 'Build a whole website',
                    type: 'Personal',
                },
            ],
        };
    },
};
</script>
