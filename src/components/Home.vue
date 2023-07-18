<template>
  <Layout>
    <template #header>
      <Header/>
    </template>
    <template #resume>
      <Resume
      :label="label"
      :totalLabel="'Ahorro Total'"
      :amount="amount"
      :totalAmount="5000"
      >
      <template #graphic>
        graphic
      </template>
      <template #action>
        action
      </template>
    </Resume>
    </template>
    <template #movement>
      <Movement
      :movements="movements"
      />
    </template>
  </Layout>
</template>

<script>
  import Layout from './Layout.vue';
  import Header from './Header.vue';
  import Resume from './Resume/Index.vue';
  import Movement from './Movements/Index.vue'
  export default{
    components:{
      Layout,
      Header,
      Resume,
      Movement
    },
    data() {
      return {
        amount:null,
        label:null,
        movements: [{
          id: 0,
          title: "lorem ipsum dolor",
          description: "lorem ipsum dolor",
          amount: 1000,
        },{
          id: 1,
          title: "lorem ipsum dolor",
          description: "lorem ipsum dolor",
          amount: -2000,
        },{
          id: 2,
          title: "lorem ipsum dolor",
          description: "lorem ipsum dolor",
          amount: 100,
        },{
          id: 3,
          title: "lorem ipsum dolor",
          description: "lorem ipsum dolor",
          amount: -500,
        },{
          id: 4,
          title: "lorem ipsum dolor",
          description: "lorem ipsum dolor",
          amount: 1500,
        },{
          id: 5,
          title: "lorem ipsum dolor",
          description: "lorem ipsum dolor",
          amount: 3000,
        }]
      }
    },
  }
</script>