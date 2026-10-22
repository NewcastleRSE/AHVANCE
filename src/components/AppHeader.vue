
 <template>
    <header>
      <nav class="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-4 py-2 bg-white border-b-[5px] border-[#b3b3b2] shadow-md" id="mytopnav">

        <!-- Brand Logo / Title -->
        <NuxtLink class="flex items-center text-[32px] font-bold text-[#828280] hover:opacity-90 transition-opacity" to="/">
            <strong class="px-1 text-brand-purple text-[30px]">HT&amp;Me</strong>
            <img src="../assets/images/logo-sweet_.png" alt="logo" height="36" class="inline-block align-text-top mt-[5px] !h-9 w-auto">
        </NuxtLink>

        <!-- Small Screen Home Icon & Mobile Hamburger Group -->
        <div class="flex items-center gap-3 md:hidden">
            <!-- Small Screen Home Icon -->
            <NuxtLink aria-current="page" class="bi bi-house text-brand-purple text-[20px]" to="/"></NuxtLink>

            <!-- Mobile Hamburger Toggle Button with Built-in SVG -->
            <button @click="toggleMobileMenu" class="p-2 text-[#585857] hover:text-black focus:outline-none" aria-label="Toggle Menu">
                <!-- Hamburger Bars Icon -->
                <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Close (X) Icon when open -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Navigation Links Container -->
        <div
          id="topnavlinks"
          :class="[
            'w-full md:w-auto items-center gap-1 mt-3 md:mt-0',
            isMobileMenuOpen ? 'flex flex-col md:flex-row' : 'hidden md:flex'
          ]"
        >
            <!-- Large Screen Home Icon (Hidden on mobile) -->
            <NuxtLink aria-current="page" id="homeLarge" class="bi bi-house text-brand-purple text-[20px] hidden md:inline px-2" to="/"></NuxtLink>

            <NuxtLink @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/">Home</NuxtLink>

            <!-- My Account link only displays if the user is authenticated -->
            <NuxtLink v-if="isLoggedIn" @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/account">My Account</NuxtLink>

            <NuxtLink @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/favourites">My Favourites</NuxtLink>
            <NuxtLink @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/personal-support">My Personal Support</NuxtLink>
            <NuxtLink @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/contacts">My Contacts</NuxtLink>
            <NuxtLink @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/about">About the Team</NuxtLink>

            <!-- Logout Button -->
            <button
              @click="handleLogout"
              v-if="isLoggedIn"
              class="inline-block px-5 py-1.5 ml-0 md:ml-2 mt-2 md:mt-0 text-white bg-brand-purple hover:bg-purple-500 rounded-[2rem] font-normal text-center transition-colors shadow-sm"
              id="navlogout"
            >
              Log Out
            </button>
        </div>
    </nav>
  </header>
 </template>

<script>

export default {
  name: 'AppHeader',
  components: {

  },
  computed: {
  },
  methods: {
  }
}
</script>


<style>


</style>
