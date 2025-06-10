<template>
  <nav class="nav">
    <div class="nav__container">
      <img src="@/assets/main-logo.svg" alt="" class="nav__logo" />
      <ul class="nav__links">
        <li class="font-light hover:font-bold">
          <router-link to="#">Productos y Tarifas</router-link>
        </li>
        <li class="font-light hover:font-bold">
          <router-link to="#">COMO CONTRATAR</router-link>
        </li>
        <li class="font-light hover:font-bold">
          <router-link to="#">beneficios</router-link>
        </li>
      </ul>
      <div class="nav__actions">
        <button
          class="main__button transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-opacity-90"
        >
          Contratar
        </button>
        <button
          class="menu__button transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-opacity-90"
        >
          <img src="@/assets/menu-icon.svg" alt="menu" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 64px;
  background: #1a1e89;
  display: flex;
  justify-content: center;
  padding: 24px 15px;
}

.nav__logo {
  width: 128px;
  height: 16px;
}

.nav__container {
  width: 100%;

  display: flex;
  align-items: center;
  color: white;
  margin: 0 auto;
  justify-content: space-between;
  align-content: center;
}
.main__button {
  width: 109px;
  height: 32px;
  border-radius: 260px;
  background-color: #00dbbc;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 24px;
  color: #1a1e89;
}
.menu__button {
  width: 28px;
  height: 28px;
}
.nav__actions {
  display: flex;
  gap: 16px;
}
.nav__link {
  text-decoration: none;
  font-size: 1rem;
  color: #ffffff;
}
.nav__links {
  display: none;
}

@media (min-width: 768px) {
  .nav__container {
    width: 95%;
  }
  .nav__links {
    display: flex;
    gap: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 24px;
  }

  .menu__button {
    display: none;
  }
}

@media (min-width: 1024px) {
  .nav__container {
    width: 90%;
  }
  .nav__links {
    gap: 48px;
  }

  .nav__logo {
    width: 164px;
    height: 21px;
  }
}
</style>
