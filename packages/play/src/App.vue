<script setup lang="ts">
const btnClick = (e: MouseEvent) => {
  console.log(e)
}
</script>

<template>


  <gz-button @click="btnClick"> Default </gz-button>
  <gz-button type="primary"> Primary </gz-button>
  <gz-button type="success"> success </gz-button>
  <gz-button type="warning"> warning </gz-button>
  <gz-button type="info"> info </gz-button>
  <gz-button type="danger"> danger </gz-button>
  <div style="margin-bottom: 10px"> </div>

  <gz-button plain> Default </gz-button>
  <gz-button plain type="primary"> Primary </gz-button>
  <gz-button plain type="success"> success </gz-button>
  <gz-button plain type="info"> info </gz-button>
  <gz-button plain type="warning"> warning </gz-button>
  <gz-button plain type="danger"> danger </gz-button>
  <div style="margin-bottom: 10px"> </div>

  <gz-button round> Default </gz-button>
  <gz-button round type="primary"> Primary </gz-button>
  <gz-button round type="success"> success </gz-button>
  <gz-button round type="info"> info </gz-button>
  <gz-button round type="warning"> warning </gz-button>
  <gz-button round type="danger"> danger </gz-button>
  <div style="margin-bottom: 10px"> </div>

  <gz-button circle> Xx </gz-button>
  <gz-button circle type="primary"> Xx </gz-button>
  <gz-button circle type="success"> Xx </gz-button>
  <gz-button circle type="info"> Xx </gz-button>
  <gz-button circle type="warning"> Xx </gz-button>
  <gz-button circle type="danger"> Xx </gz-button>
  <br>



</template>