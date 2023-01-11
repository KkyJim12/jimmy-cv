<template>
  <div
    class="bg-white shadow-md p-10 flex flex-col space-y-6 rounded overflow-x-auto"
  >
    <h1 class="text-2xl font-semibold">Stacks</h1>
    <div class="flex flex-col space-y-6">
      <div class="flex space-x-6">
        <font-awesome-icon
          class="text-green-500 hover:scale-110 transform duration-300 cursor-pointer"
          :icon="['fab', 'vuejs']"
        />
        <font-awesome-icon
          class="hover:scale-110 text-blue-300 transform duration-300 cursor-pointer"
          :icon="['fab', 'react']"
        />
        <font-awesome-icon
          class="hover:scale-110 text-green-700 transform duration-300 cursor-pointer"
          :icon="['fab', 'node']"
        />
        <font-awesome-icon
          class="text-red-500 hover:scale-110 transform duration-300 cursor-pointer"
          :icon="['fab', 'laravel']"
        />
        <font-awesome-icon
          class="text-yellow-300 hover:scale-110 transform duration-300 cursor-pointer"
          :icon="['fab', 'js']"
        />
        <font-awesome-icon
          class="text-blue-600 hover:scale-110 transform duration-300 cursor-pointer"
          :icon="['fab', 'php']"
        />
        <font-awesome-icon
          class="text-yellow-600 hover:scale-110 transform duration-300 cursor-pointer"
          :icon="['fab', 'git-alt']"
        />
      </div>
      <div class="flex space-x-10">
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold">Styling</h1>
          <h4>- Tailwind</h4>
          <h4>- Bootstrap</h4>
          <h4>- Vuetify</h4>
          <h4>- Material UI</h4>
        </div>
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold">Framework</h1>
          <h4>- NestJS</h4>
          <h4>- NuxtJS</h4>
          <h4>- NextJS</h4>
        </div>
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold">Database</h1>
          <h4>- Mysql</h4>
          <h4>- Postgresql</h4>
          <h4>- Mongodb</h4>
        </div>
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold">AWS</h1>
          <h4>- S3</h4>
          <h4>- EC2</h4>
          <h4>- Route53</h4>
          <h4>- Amplify</h4>
        </div>
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold">Cloud</h1>
          <h4>- Docker</h4>
          <h4>- Netlify</h4>
          <h4>- Heroku</h4>
          <h4>- Digital Ocean</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
