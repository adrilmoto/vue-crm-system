<template>
<nav class="navbar orange lighten-1">
  <div class="nav-wrapper">
    <div class="navbar-left">
      <a href="#" @click.prevent="$emit('click')">
        <i class="material-icons black-text">dehaze</i>
      </a>
      <span class="black-text"> {{date | date}} </span>
    </div>
    <ul class="right hide-on-small-and-down">
      <li>
        <a class="dropdown-trigger black-text" href="#" ref="dropdown" data-target="dropdown">
          <span>USER NAME</span>
          <i class="material-icons right">arrow_drop_down</i>
        </a>
        <ul id='dropdown' class='dropdown-content'>
          <li>
            <router-link to="/profile" class="black-text">
              <i class="material-icons">account_circle</i>Профиль
            </router-link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <a href="#" class="black-text" @click.prevent="logout()">
              <i class="material-icons">assignment_return</i>Выйти
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  data () {
    return {
      date: new Date(),
      interval: null,
      dropdown: null
    }
  },
  methods: {
    async logout() {
      console.log('logout')
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
      conststrainWidth: true
    })
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.droopdown &&  this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>
