<template>
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
      {{ profile.fullName }} {{ `(${profile.nickName})` }}
    </h1>
    <h4>Gender: {{ profile.gender }}</h4>
    <h4>
      Birthdate: {{ profile.birthday }}
      {{ `(${profile.age} years)` }}
    </h4>
    <h4>
      Address: <br />
      {{ profile.address }}
    </h4>
    <h4>Phone: {{ profile.phoneNumber }}</h4>
    <h4>Email: {{ profile.email }}</h4>
    <hr />
    <SocialMedia />
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        fullName: 'Piyakarn Nimmakulvirut',
        nickName: 'Jimmy',
        gender: 'Male',
        birthday: '15/12/1996',
        age: '26',
        address:
          '1655/149 Petchburi tudmai road. Makkasan Ratchathewi Bangkok 10400',
        phoneNumber: '065-8528414',
        email: 'piyakarn.nmk@gmail.com',
      },
    }
  },
}
</script>
