<template>
  <div class="hero">
    <div
      class="w-100 h-[48px] p-[12px 30px] flex justify-center items-center backdrop-filter[blur(12px)] gap-[1rem]"
    >
      <img src="@/assets/car-icon.svg" alt="" />
      <p class="text-[14px] text-[#ffffff]">¡Contrata hoy y obtén los mejores beneficios</p>
    </div>

    <div class="hero__content">
      <picture class="hero__img">
        <source srcset="@/assets/hero-sm.svg" media="(max-width: 767px)" />

        <source srcset="@/assets/hero-md.svg" media="(min-width: 768px) and (max-width: 1023px)" />

        <source srcset="@/assets/hero-lg.svg" media="(min-width: 1024px)" />

        <img src="@/assets/hero-lg.svg" alt="Descripción de la imagen adaptable" loading="lazy" />
      </picture>

      <div class="hero__actions">
        <p>Hazte cliente empresa del Banco de Chile y obtén tu producto a costo $0*</p>

        <div class="hero__actions__buttons">
          <button @click="prueba" class="hero__actions__button">Qiero Contratar</button>
          <button class="hero__actions__button">Nuestras Tarifas</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const prueba = () => {
  console.log('shot')
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 729px;
  border-radius: 0 0 48px 48px;
  background:
    linear-gradient(0deg, #3e3cf0, #3e3cf0),
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
  gap: 12px;
  width: 300px;
}
.hero__actions__button {
  height: 56;

  border-radius: 260px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  background-color: #32fadd;
}
</style>
