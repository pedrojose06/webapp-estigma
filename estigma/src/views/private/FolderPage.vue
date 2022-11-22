<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
        <ion-buttons slot="end">
          <ion-button>
            <router-link to="/Messages">
              <ion-icon color="primary" :ios="chatbubblesOutline" :md="chatbubbleSharp"></ion-icon>
            </router-link>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonIcon } from '@ionic/vue';
import { chatbubblesOutline, chatbubbleSharp } from 'ionicons/icons';


export default defineComponent({
    name: 'FolderPage',
    props:['tituloPagina'],
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonButton,
        IonIcon,
    },
    setup() {

    return {
        chatbubblesOutline,
        chatbubbleSharp,

    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
