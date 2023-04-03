<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>无界新能源</ion-title>
        <ion-buttons slot="end">
          <ion-button  @click="selectCar()">
            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">无界新能源</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item lines="none">
        <ion-label>
          <div class="car-mileage">
            <span class="mileage-text">281</span>
            <span class="mileage-unit">km</span>
          </div>
          <!-- <div class="car-battery">
            <span>电量 </span>
            <span>98%</span>
          </div> -->
        </ion-label>
      </ion-item>

      <!-- <ion-list lines="none">
        <ion-item @click="changeLange('en')">
          <ion-label>{{ $t('my.qiehuanyuyan') }}</ion-label>
        </ion-item>
        <ion-item @click="changeLange('zh-CN')">
          <ion-label>{{ $t('my.qiehuanyuyan') }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>No Lines</ion-label>
        </ion-item>
      </ion-list> -->
    </ion-content>
  </ion-page>
</template>
<style lang="scss">
  .car-mileage{
    text-align: center;
    .mileage-text{
      font-size: 20px;
    }
    .mileage-unit{
      font-size: 12px;
    }
  }
  .car-battery{
    text-align: center;
  }

</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons,IonButton,IonIcon,IonList,IonItem,IonLabel } from '@ionic/vue';
import cache from '@/utils/cache';
import { changeI18nLanguage } from '@/lang';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
function changeLange(value:string){
    changeI18nLanguage(value);
}
function selectCar(){
    console.log('select car click')
}
</script>

<style scoped>
</style>