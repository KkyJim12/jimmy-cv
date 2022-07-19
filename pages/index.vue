<template>
  <div
    class="grid grid-cols-12 p-10 gap-x-6 bg-gradient-to-r from-red-500 to-purple-500 min-h-screen gap-y-10 md:gap-y-6 2xl:gap-y-0"
  >
    <div class="col-span-12 md:col-span-4 2xl:col-span-3">
      <div
        class="bg-white shadow-md p-10 flex flex-col space-y-3 rounded mb-6 h-full overflow-x-auto"
      >
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
        <h4>Gender: Male</h4>
        <h4>Birthdate: 15/12/1996 (25 years)</h4>
        <h4>
          Address: <br />
          1655/149 Petchburi tudmai road. Makkasan Ratchatewi <br />
          Bangkok 10400
        </h4>
        <h4>TH. (+66) 0658528414</h4>
        <h4>UK. (+44) 07824492883</h4>
        <h4>Email: piyakarn.nmk@gmail.com</h4>
        <hr />
        <div class="flex space-x-4">
          <font-awesome-icon
            class="text-blue-500 hover:scale-110 transform duration-300 cursor-pointer"
            :icon="['fab', 'facebook-square']"
          />
          <font-awesome-icon
            class="text-pink-500 hover:scale-110 transform duration-300 cursor-pointer"
            :icon="['fab', 'instagram-square']"
          />
          <font-awesome-icon
            class="text-blue-400 hover:scale-110 transform duration-300 cursor-pointer"
            :icon="['fab', 'linkedin']"
          />
          <font-awesome-icon
            class="text-purple-800 hover:scale-110 transform duration-300 cursor-pointer"
            :icon="['fab', 'github']"
          />
          <font-awesome-icon
            class="text-red-500 hover:scale-110 transform duration-300 cursor-pointer"
            :icon="['fab', 'youtube']"
          />
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-8 2xl:col-span-6">
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
      <HighlightProject />
    </div>
    <div class="col-span-12 md:col-span-12 2xl:col-span-3">
      <div
        class="bg-white shadow-md p-10 flex flex-col space-y-6 rounded h-full overflow-x-auto"
      >
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Educations</h1>
          <div class="flex flex-col space-y-3">
            <div class="grid grid-cols-3">
              <div class="col-span-1">
                <h4>2022-current</h4>
              </div>
              <div class="col-span-2">
                <p class="text-right">
                  MSc Computing at University of Northampton
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-1">
                <h4>2021</h4>
              </div>
              <div class="col-span-2">
                <p class="text-right">
                  Business & Management at University of Northampton
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-1">
                <h4>2019-2020</h4>
              </div>
              <div class="col-span-2">
                <p class="text-right">
                  Business & Hotel Management at Finn College
                </p>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-1">
                <h4>2016</h4>
              </div>
              <div class="col-span-2">
                <p class="text-right">GED Certificate (Grade 12 Equavalence)</p>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-1">
                <h4>2014-2015</h4>
              </div>
              <div class="col-span-2">
                <p class="text-right">Sci-Math at Triamudom suksa School</p>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div class="col-span-1">
                <h4>2011-2013</h4>
              </div>
              <div class="col-span-2">
                <p class="text-right">
                  English Program at Samakkhi Wittayakom School
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Work Experiences</h1>
          <div class="flex flex-col space-y-3">
            <div class="flex justify-between">
              <h4>2016-current</h4>
              <p class="text-right">Freelance Software developer</p>
            </div>
            <div class="flex justify-between">
              <h4>2019-2020</h4>
              <p class="text-right">Programming Tutoring</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex flex-col space-y-6">
          <h1 class="md:text-xl xl:text-2xl font-semibold">
            IELTS Overall - 6
          </h1>
          <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
            <div class="flex flex-1 flex-col space-y-6">
              <div class="flex space-x-4 items-center">
                <h4 class="text-xl font-semibold">Listening</h4>
                <p>- 6.5</p>
              </div>
              <div class="flex space-x-4 items-center">
                <h4 class="text-xl font-semibold">Reading</h4>
                <p>- 6.5</p>
              </div>
            </div>
            <div class="flex flex-1 flex-col space-y-6">
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
        <hr />
        <div class="flex flex-col space-y-6">
          <h1 class="text-2xl font-semibold">Other fields skill</h1>
          <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between">
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
              <h4 class="font-semibold">Languages</h4>
              <p>- Thai</p>
              <p>- English</p>
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
