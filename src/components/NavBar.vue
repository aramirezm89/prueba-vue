<template>
  <nav class="nav">
    <div class="nav__container">
      <img src="@/assets/main-logo.svg" alt="" />
      <div class="nav__actions">
        <button class="main__button">Contratar</button>
        <button class="menu__button">
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
</style>
