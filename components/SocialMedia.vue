<template>
    <div class="flex space-x-4">
        <div v-for="socialMedia in socialMedias" :key="socialMedia.id">
            <font-awesome-icon
                @click="openSocialLink(socialMedia.link)"
                :class="`text-${socialMedia.color}-500 hover:scale-110 transform duration-300 cursor-pointer text-4xl`"
                :icon="['fab', socialMedia.icon]"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialMedias: [
                {
                    id: 1,
                    title: 'Facebook',
                    icon: 'facebook-square',
                    link: 'https://www.facebook.com/piyakarn.nmk/',
                    color: 'blue',
                },
                {
                    id: 2,
                    title: 'Instagram',
                    icon: 'instagram-square',
                    link: 'https://www.instagram.com/jimmynmk/',
                    color: 'pink',
                },
                {
                    id: 3,
                    title: 'Linkedin',
                    icon: 'linkedin',
                    link: 'https://www.linkedin.com/in/piyakarn-nimmakulvirut-212844178/',
                    color: 'blue',
                },
                {
                    id: 4,
                    title: 'Github',
                    icon: 'github',
                    link: 'https://github.com/KkyJim12',
                    color: 'purple',
                },
                {
                    id: 5,
                    title: 'Youtube',
                    icon: 'youtube',
                    link: 'https://www.youtube.com/channel/UC3Ax6ZsESImZZGLUkpbZPVw',
                    color: 'red',
                },
            ],
        };
    },
    methods: {
        openSocialLink(url) {
            window.open(url, '_blank');
        },
    },
};
</script>
