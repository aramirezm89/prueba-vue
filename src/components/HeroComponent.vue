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
        <p class="font-normal">
          Hazte cliente empresa del Banco de Chile
          <span class="font-bold">y obtén tu producto a costo $0*</span>
        </p>

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
            >
              <img src="@/assets/arrow-left.svg" alt="" />
            </button>
            <button
              class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
            >
              <img src="@/assets/arrow-right.svg" alt="" />
            </button>
          </div>
          <div>
            <button
              class="w-[56px] h-[56px] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2"
            >
              <img src="@/assets/play-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div class="hero__controls">
        <div class="hero__controls__buttons">
          <button
            class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
          >
            <img src="@/assets/arrow-left.svg" alt="" />
          </button>
          <button
            class="transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2 rounded-full"
          >
            <img src="@/assets/arrow-right.svg" alt="" />
          </button>
        </div>
        <div>
          <button
            class="w-[56px] h-[56px] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-gray-100/20 p-2"
          >
            <img src="@/assets/play-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  background-position: right top 0;
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
}
</style>
