<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list lines="none">
        <ion-item @click="changeLange('en')">
          <ion-label>{{ $t('my.qiehuanyuyan') }}</ion-label>
        </ion-item>
        <ion-item @click="changeLange('zh-CN')">
          <ion-label>{{ $t('my.qiehuanyuyan') }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>No Lines</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import cache from '@/utils/cache';
import { changeI18nLanguage } from '@/lang';
function changeLange(value:string){
    changeI18nLanguage(value);
}
</script>
