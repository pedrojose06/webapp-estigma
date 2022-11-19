<template>
    <ion-page>
        <ion-content :fullscreen=true>
            <div id="container">
                <ion-item-group>
                    <ion-item>
                        <ion-label position="floating">Usuáro</ion-label>
                        <ion-input placeholder="Insira seu username"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Senha</ion-label>
                        <ion-input placeholder="Insira sua senha"></ion-input>
                    </ion-item>
                </ion-item-group>
                <p>Esqueceu sua senha ? Clique <a target="_blank" rel="noopener noreferrer"
                        href="https://ionicframework.com/docs/components">aqui</a></p>

                    <ion-button router-link="/folder/Inbox">
                        Logar
                    </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { IonPage, IonContent, IonLabel, IonInput, IonButton, IonItem, IonItemGroup } from '@ionic/vue'

export default defineComponent({
    name: 'FolderPage',
    components: {
        IonPage,
        IonContent,
        IonLabel,
        IonInput,
        IonButton,
        IonItem,
        IonItemGroup
    }


})


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
