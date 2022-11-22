<template>
   <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title> Mensagens </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-card color="tertiary">
        <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            Card Content
        </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton,IonCard, IonCardContent,IonCardHeader,IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default defineComponent({
    name:'MessagesPage',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle
    },
    data(){
        return{
            tituloPagina:'Menssagens'
        }
    }
});
</script>