
 <template>
  <footer class="mt-auto py-6 bg-brand-purple text-white">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-start gap-6">

            <!-- Footer Menu Column -->
            <div class="w-full md:w-3/12">
                <ul class="list-none p-0 m-0 space-y-1">
                    <li class="border-b border-white/30 text-white pb-2 font-bold text-lg">
                        Menu
                    </li>
                    <li class="py-1">
                        <span id="footerUserGuide" class="text-white/90 hover:text-white hover:underline transition-colors">User Guide</span>
                    </li>
                    <li class="py-1">
                        <span id="footerGlossary" class="text-white/90 hover:text-white hover:underline transition-colors">Glossary</span>
                    </li>
                    <li class="py-1">
                        <span id="footerIndex" class="text-white/90 hover:text-white hover:underline transition-colors">Index List</span>
                    </li>
                    <li class="py-1">
                        <span id="footerPrivacyNotice"  class="text-white/90 hover:text-white hover:underline transition-colors">Privacy Notice</span>
                    </li>
                    <li class="pt-2">
                        <small class="text-white/80">&copy; Newcastle University 2026</small>
                    </li>
                </ul>
            </div>

            <!-- Footer Logos Column -->
            <div class="w-full md:w-9/12 flex flex-row justify-around flex-wrap items-center gap-4  p-4 rounded-xl">
                <img class="logo m-2 !h-[45px] w-autoobject-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="../assets/images/logo-ncl.png" alt="Newcastle University" />
                <img class="logo m-2 !h-[45px] w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="../assets/images/logo-brookes.png" alt="Oxford Brookes University" />
                <img class="logo m-2 !h-[45px] w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="../assets/images/logo-ucl.png" alt="UCL" />
                <img class="logo m-2 !h-[45px] w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="../assets/images/logo-nihr.png" alt="NIHR" />
                <img class="logo m-2 !h-[45px] w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" src="../assets/images/logo-nuth.png" alt="NUTH" />
            </div>
        </div>
    </div>


</footer>

 </template>

<script>

export default {
  name: 'AppFooter',
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
