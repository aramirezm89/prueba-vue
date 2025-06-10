<template>
  <div class="hero">
    <div
      class="w-100 h-[48px] p-[12px 30px] flex justify-center items-center gap-[1rem] bg-[#1a1e8980] backdrop-blur-[12px]"
    >
      <img src="@/assets/car-icon.svg" alt="" />
      <p class="text-[14px] lg:text-[20px] text-[#ffffff] font-normal">
        ¡Contrata hoy y obtén <span class="font-bold">los mejores beneficios</span>
      </p>
    </div>

    <div class="hero__content">
      <picture class="hero__img">
        <source srcset="@/assets/hero-sm.svg" media="(max-width: 767px)" />

        <source srcset="@/assets/hero-md.svg" media="(min-width: 768px) and (max-width: 1023px)" />

        <source srcset="@/assets/hero-lg.svg" media="(min-width: 1024px)" />

        <img
          class="hero__img-lg"
          src="@/assets/hero-lg.svg"
          alt="Descripción adaptable"
          loading="lazy"
        />
      </picture>

      <div class="hero__actions">
        <div class="hero-text-container" :key="currentSlideIndex">
          <transition name="slide-fade">
            <div v-if="currentSlide.type === 'default'" class="hero-text">
              <p class="font-normal">
                Hazte cliente empresa del Banco de Chile
                <span class="font-bold">y obtén tu producto a costo $0*</span>
              </p>
            </div>
            <div v-else class="hero-text">
              <p class="font-normal">
                Conoce a <span class="font-bold">{{ currentSlide.content }}</span>
              </p>
            </div>
          </transition>
        </div>

        <div class="hero__actions__buttons">
          <button
            class="hero__actions__button transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-opacity-90"
          >
            Qiero Contratar
          </button>
          <button
            class="hero__actions__button transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-opacity-90"
          >
            Nuestras Tarifas
          </button>
        </div>

        <div class="hero__controls--lg">
          <div class="hero__controls__buttons">
            <button
              class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
              @click="prevSlide"
            >
              <img src="@/assets/arrow-left.svg" alt="" />
            </button>
            <button
              class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
              @click="nextSlide"
            >
              <img src="@/assets/arrow-right.svg" alt="" />
            </button>
          </div>
          <div>
            <button
              class="w-[56px] h-[56px] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2"
              @click="toggleAutoSlide"
            >
              <img v-if="isPlaying" src="@/assets/pause-icon.svg" alt="" />
              <span v-else class="material-symbols-outlined text-gray-200"> play_arrow </span>
            </button>
          </div>
        </div>
      </div>

      <div class="hero__controls">
        <div class="hero__controls__buttons">
          <button
            class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
            @click="prevSlide"
          >
            <img src="@/assets/arrow-left.svg" alt="" />
          </button>
          <button
            class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
            @click="nextSlide"
          >
            <img src="@/assets/arrow-right.svg" alt="" />
          </button>
        </div>
        <div>
          <button
            class="w-[56px] h-[56px] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2"
            @click="toggleAutoSlide"
          >
            <img v-if="isPlaying" src="@/assets/pause-icon.svg" alt="" />
            <span v-else class="material-symbols-outlined text-gray-200"> play_arrow </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, onBeforeUnmount } from 'vue'
import { getPokemons } from '@/api/pokeapi'

const pokemons = ref([])
const currentSlideIndex = ref(0)
const isPlaying = ref(true)
const slideInterval = ref(null)

// Slides array combining default text and pokemons
const slides = computed(() => {
  const defaultSlide = { type: 'default', content: 'default' }
  const pokemonSlides = pokemons.value.map((pokemon) => ({
    type: 'pokemon',
    content: pokemon.name,
  }))

  return [defaultSlide, ...pokemonSlides]
})

// Current slide based on index
const currentSlide = computed(() => {
  return slides.value[currentSlideIndex.value] || { type: 'default', content: 'default' }
})

// Functions to control the slider
const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
}

const startAutoSlide = () => {
  if (slideInterval.value) clearInterval(slideInterval.value)
  slideInterval.value = setInterval(() => {
    nextSlide()
  }, 2000) // Change slide every 3 seconds
}

const stopAutoSlide = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

const toggleAutoSlide = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startAutoSlide()
  } else {
    stopAutoSlide()
  }
}

onMounted(async () => {
  pokemons.value = await getPokemons()
    .then((res) => {
      console.log(res)
      return res.data.results
    })
    .catch((err) => console.log(err))

  // Start auto sliding when component is mounted
  startAutoSlide()
})

onBeforeUnmount(() => {
  // Clean up interval when component is unmounted
  stopAutoSlide()
})
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 729px;
  border-radius: 0 0 48px 48px;
  background:
    linear-gradient(0deg, #1a1e89, #3e3cf0),
    linear-gradient(0deg, rgba(26, 30, 137, 0.8) 0%, rgba(26, 30, 137, 0) 100%);
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('@/assets/rectangule.svg');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right top -50px;
  pointer-events: none; /* This allows clicks to pass through to elements below */
}

.hero__content {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 38.79px;
}

.hero__img {
  margin: 0 auto;
  z-index: 1;
}

.hero__actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
}

.hero__actions__buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
}
.hero__actions__button {
  height: 56;
  font-size: 14px;
  font-weight: 700;
  border-radius: 260px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  background-color: #32fadd;
  text-transform: uppercase;
}

.hero__actions__button:nth-child(2) {
  background-color: transparent;
  border: 2px solid #ffffff;
}

.hero__controls {
  width: 192px;
  height: 56px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  gap: 12px;
}
.hero__controls__buttons {
  display: flex;
  gap: 12px;

  button {
    width: 56px;
    height: 56px;
    border-radius: 43px;
    background-color: #0a1861cc;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }
  }
}

.hero__controls--lg {
  display: none;
}

@media (min-width: 768px) {
  .hero {
    height: 584px;
  }

  .hero::before {
    background-image: url('@/assets/rectangule-md.svg');
    background-position: right top -85px;
  }

  .hero__content {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .hero__img {
    order: 2;
    width: 50%;
  }
  .hero__actions {
    order: 1;
    width: 50%;
  }

  .hero__controls {
    order: 3;
  }

  .hero__controls--lg {
    display: none;
  }
}
@media (min-width: 1024px) {
  .hero__content {
    width: 90%;
    margin-top: 0;
    margin-right: 0;
  }
  .hero::before {
    background-image: url('@/assets/rectangule-lg.svg');
    background-position: right top -75px;
  }

  .hero__img {
    order: 2;
    width: 60%;
  }
  .hero__actions {
    order: 1;
    width: 35%;
    font-size: 40px;
    text-align: start;
  }
  .hero__actions__buttons {
    flex-direction: row;
    width: 100%;
  }
  .hero__actions__button {
    min-width: 198px;
  }

  .hero__controls {
    display: none;
  }

  .hero__controls--lg {
    display: flex;
    order: 3;
    align-self: flex-start;
    padding-top: 80px;
    gap: 12px;
  }
  .hero__img-lg {
    height: 554px;
  }

  .hero__actions__button:nth-child(2) {
    width: 206px;
  }
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.hero-text-container {
  width: 100%;
}

.hero-text {
  width: 100%;
}

.hero-text p {
  text-align: left;
  width: 100%;
}

@media (max-width: 1023px) {
  .hero-text p {
    text-align: center;
  }
}
</style>
