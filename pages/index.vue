<template>
  <div class="grid grid-cols-12 p-10">
    <div class="col-span-3">
      <div class="bg-white shadow-md p-10 flex flex-col space-y-6">
        <img
          class="w-full h-auto rounded-full"
          src="/images/profile.jpeg"
          alt="profile"
        />
        <hr />
        <h1 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">Piyakarn Nimmakulvirut</h1>
        <h4>15/12/1996 (25 years)</h4>
        <h4>
          Address: <br />
          1655/149 Petchburi tudmai road. Makkasan Ratchatewi <br />
          Bangkok 10400
        </h4>
        <hr />
        <div class="flex space-x-4">
          <font-awesome-icon
            class="text-2xl text-blue-500 hover:scale-110 transform duration-300"
            :icon="['fab', 'facebook-square']"
          />
          <font-awesome-icon
            class="text-2xl text-pink-500 hover:scale-110 transform duration-300"
            :icon="['fab', 'instagram-square']"
          />
          <font-awesome-icon
            class="text-2xl text-blue-400 hover:scale-110 transform duration-300"
            :icon="['fab', 'linkedin']"
          />
          <font-awesome-icon
            class="text-2xl text-purple-800 hover:scale-110 transform duration-300"
            :icon="['fab', 'github']"
          />
          <font-awesome-icon
            class="text-2xl text-red-500 hover:scale-110 transform duration-300"
            :icon="['fab', 'youtube']"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {}
</script>