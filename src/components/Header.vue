<template>
  <header>
    <img
    src="../assets/logo-mibolsillo.png"
    alt="logo"
    @click="reload"/>
    <h1><span>Mi</span>Bolsillo</h1>
    <img class="img_avatars"
    src="https://img.freepik.com/foto-gratis/joven-mujer-colombiana-atractiva-gafas-sol-posando-mientras-pie-junto-al-mar-dia_181624-41580.jpg?w=1800&t=st=1674592279~exp=1674592879~hmac=1276990bc65161f9f68c332774d2e5446f0b6b00d1d865b72e71e8732a58d9f7"
    alt="logo"
    @click="showNav = !showNav"
    />
  </header>
  <nav v-show="showNav">
    <ul>
      <p>pepito perez</p>
      <li>perfil</li>
      <li>cerrar</li>
    </ul>
  </nav>
</template>
<script>
  import { ref } from 'vue';
  export default{
    setup() {
      const showNav = ref(false);

      return {
        showNav
      };
    },
    methods:{
      reload(){
        location.reload();
      }
    }
  }
</script>

<style scoped>
/* scoped para que los estilos sean solo para el componente */
  header {
    display: flex;
    justify-content: space-between;
    padding-inline: 10px;
    align-items: center;
    width: 100vw;
    border-bottom: 1px solid #47688d50;
  }

  nav{
    position: absolute;
    right: 0;
    top: 62px;
    background-color: #47688d20;
    border-radius: 5px;
    width: 150px;
  }

  ul{
    padding: 10px 20px;
    margin: 0;
    text-align: end;
    list-style: none;
  }

  li{
    margin: 10px 0;
  }

  img,
  span {
    width: 48px;
    cursor: pointer;
  }
  .img_avatars{
    border-radius: 50%;
    width: 48px;
    height: 48px;
    object-fit: cover;
  }

  h1 {
    font-size: 1.4rem;
    color: var(--brand-blue);
  }

  h1 span {
    color: var(--brand-green);
  }
</style>