<script setup>
import { ref, onMounted } from 'vue'

// State for mobile menu toggle
const isMobileMenuOpen = ref(false)
const isLoggedIn = ref(false)

// Check auth status on mount (and reactive tracking if needed)
onMounted(() => {
  isLoggedIn.value = true
})


</script>
 <template>
    <header>
      <nav class="fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-4 py-2 bg-white border-b-[5px] border-[#b3b3b2] shadow-md" id="mytopnav">

        <!-- Brand Logo / Title -->
        <div class="flex items-center text-[32px] font-bold text-[#828280] hover:opacity-90 transition-opacity" to="/">
            <strong class="px-1 text-brand-purple text-[30px]">HT&amp;Me</strong>
            <img src="../assets/images/logo-sweet_.png" alt="logo" height="36" class="inline-block align-text-top mt-[5px] !h-9 w-auto">
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
            <div aria-current="page" id="homeLarge" class="bi bi-house text-brand-purple text-[20px] hidden md:inline px-2" to="/"></div>

            <div @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/">Home</div>

            <!-- My Account link only displays if the user is authenticated -->
            <div v-if="isLoggedIn" @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/account">My Account</div>

            <div @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/favourites">My Favourites</div>
            <div @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/personal-support">My Personal Support</div>
            <div @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/contacts">My Contacts</div>
            <div @click="isMobileMenuOpen = false" class="link px-4 py-2 font-bold text-[#828280] hover:text-[#585857] hover:border-b-[5px] hover:border-brand-purple hover:-mb-[10px] transition-all w-full md:w-auto text-center md:text-left" to="/about">About the Team</div>


        </div>
    </nav>
  </header>
 </template>



