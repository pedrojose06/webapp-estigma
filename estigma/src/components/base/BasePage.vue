<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ tituloPagina }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button>

                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <slot />
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/vue';
import { chatbubblesOutline, chatbubbleSharp } from 'ionicons/icons';


export default defineComponent({
    name: 'FolderPage',
    props: ['tituloPagina'],
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonButton,
    },
    setup() {
    return {
        chatbubblesOutline,
        chatbubbleSharp
    }
  }
});
</script>