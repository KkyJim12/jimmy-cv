<template>
  <div
    class="grid grid-cols-12 p-10 gap-x-6 bg-gradient-to-r from-red-500 to-purple-500 h-screen"
  >
    <div class="col-span-3">
      <div class="bg-white shadow-md p-10 flex flex-col space-y-6 rounded">
        <img
          class="w-full h-auto rounded-full"
          src="/images/profile.jpeg"
          alt="profile"
        />
        <hr />
        <h1
          class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500"
        >
          Piyakarn Nimmakulvirut (Jimmy)
        </h1>
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
      <div class="bg-white shadow-md p-10 flex space-x-6 mt-6 h-60 rounded">
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Languages</h1>
          <div class="flex flex-col space-y-6">
            <div class="flex space-x-4 items-center">
              <h4 class="text-xl font-semibold">Thai</h4>
              <p>- Native Language</p>
            </div>
            <div class="flex space-x-4 items-center">
              <h4 class="text-xl font-semibold">English</h4>
              <p>- Proficient</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">IELTS Overall - 6</h1>
          <div class="flex space-x-6">
            <div class="flex flex-col space-y-6">
              <div class="flex space-x-4 items-center">
                <h4 class="text-xl font-semibold">Listening</h4>
                <p>- 6.5</p>
              </div>
              <div class="flex space-x-4 items-center">
                <h4 class="text-xl font-semibold">Reading</h4>
                <p>- 6.5</p>
              </div>
            </div>
            <div class="flex flex-col space-y-6">
              <div class="flex space-x-4 items-center">
                <h4 class="text-xl font-semibold">Speaking</h4>
                <p>- 6</p>
              </div>
              <div class="flex space-x-4 items-center">
                <h4 class="text-xl font-semibold">Writing</h4>
                <p>- 5.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-6">
      <div class="bg-white shadow-md p-10 flex flex-col space-y-6 rounded">
        <h1 class="text-2xl font-semibold">Stacks</h1>
        <div class="flex flex-col space-y-6">
          <div class="flex space-x-6">
            <font-awesome-icon
              class="text-2xl text-red-500 hover:scale-110 transform duration-300"
              :icon="['fab', 'vuejs']"
            />
            <font-awesome-icon
              class="text-2xl text-red-500 hover:scale-110 transform duration-300"
              :icon="['fab', 'react']"
            />
            <font-awesome-icon
              class="text-2xl text-red-500 hover:scale-110 transform duration-300"
              :icon="['fab', 'node']"
            />
            <font-awesome-icon
              class="text-2xl text-red-500 hover:scale-110 transform duration-300"
              :icon="['fab', 'laravel']"
            />
            <font-awesome-icon
              class="text-2xl text-red-500 hover:scale-110 transform duration-300"
              :icon="['fab', 'js']"
            />
            <font-awesome-icon
              class="text-2xl text-red-500 hover:scale-110 transform duration-300"
              :icon="['fab', 'php']"
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
              <h1 class="text-2xl font-semibold">Language & Framework</h1>
              <h4>- Typescript</h4>
              <h4>- NestJS</h4>
              <h4>- NuxtJS</h4>
              <h4>- NextJS</h4>
            </div>
            <div class="flex flex-col space-y-2">
              <h1 class="text-2xl font-semibold">Database and Protocol</h1>
              <h4>- Mysql</h4>
              <h4>- Postgresql</h4>
              <h4>- Mongodb</h4>
              <h4>- Graphql</h4>
            </div>
            <div class="flex flex-col space-y-2">
              <h1 class="text-2xl font-semibold">Blockchain</h1>
              <h4>- Solidity</h4>
              <h4>- Etherjs</h4>
              <h4>- Web3js</h4>
              <h4>- Hardhat</h4>
            </div>
            <div class="flex flex-col space-y-2">
              <h1 class="text-2xl font-semibold">AWS</h1>
              <h4>- S3</h4>
              <h4>- EC2</h4>
              <h4>- Route53</h4>
              <h4>- Amplify</h4>
            </div>
            <div class="flex flex-col space-y-2">
              <h1 class="text-2xl font-semibold">Cloud & Tools</h1>
              <h4>- Docker</h4>
              <h4>- Git</h4>
              <h4>- Netlify</h4>
              <h4>- Heroku</h4>
            </div>
          </div>
        </div>
      </div>
      <HighlightProject />
      <PasttimeProject />
    </div>
    <div class="col-span-3">
      <div
        class="bg-white shadow-md p-10 flex flex-col space-y-6 h-content rounded"
      >
        <PersonalInfo />
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Educations</h1>
          <div class="flex flex-col space-y-3">
            <div class="flex justify-between">
              <h4>2022-current</h4>
              <p>MSc Computing at University of Northampton</p>
            </div>
            <div class="flex justify-between">
              <h4>2021</h4>
              <p>Business & Management at University of Northampton</p>
            </div>
            <div class="flex justify-between">
              <h4>2019-2020</h4>
              <p>Business & Hotel Management at Finn College</p>
            </div>
            <div class="flex justify-between">
              <h4>2016</h4>
              <p>GED Certificate (Grade 12 Equavalence)</p>
            </div>
            <div class="flex justify-between">
              <h4>2014-2015</h4>
              <p>Sci-Math at Triamudom suksa School</p>
            </div>
            <div class="flex justify-between">
              <h4>2011-2013</h4>
              <p>English Program at Samakkhi Wittayakom School</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Work Experiences</h1>
          <div class="flex flex-col space-y-3">
            <div class="flex justify-between">
              <h4>2016-current</h4>
              <p>Freelance Software developer</p>
            </div>
            <div class="flex justify-between">
              <h4>2019-2020</h4>
              <p>Programming Tutoring</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Other fields skill</h1>
          <div class="flex justify-between">
            <div class="flex flex-col space-y-1">
              <h4 class="font-semibold">Marketing</h4>
              <p>- SEO</p>
              <p>- Facebook Ads</p>
              <p>- Google Adwords</p>
            </div>
            <div class="flex flex-col space-y-1">
              <h4 class="font-semibold">Blockchain</h4>
              <p>- Crypto Trading</p>
              <p>- DEFI</p>
              <p>- Gamefi</p>
            </div>
            <div class="flex flex-col space-y-1">
              <h4 class="font-semibold">Transportation</h4>
              <p>- Car</p>
              <p>- Rails way</p>
            </div>
          </div>
        </div>
      </div>
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
export default {}
</script>
