<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ lastSelectedCar }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="selectCar">
            <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{lastSelectedCar}}</ion-title>
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
import {ref} from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButtons,IonButton,IonIcon,IonList,IonItem,IonLabel,alertController, AlertInput } from '@ionic/vue';
import cache from '@/utils/cache';
import { changeI18nLanguage } from '@/lang';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
function changeLange(value:string){
    changeI18nLanguage(value);
}
const selectCar=async()=>{
  const alert = await alertController.create({
          header: '切换汽车',
          buttons: alertButtons,
          inputs:alertInputs
        });
  await alert.present();
}
let nowCar='无界新能源';
const lastSelectedCar=ref('无界新能源');
const changeCar=(input:AlertInput)=>{
  nowCar=input.value;
  console.log(nowCar)
}
const alertButtons=[{
  text:'确定',
  role:'confirm',
  handler:()=>{
    console.log(alertInputs);
    lastSelectedCar.value=nowCar;
    alertInputs.forEach(c=>{
      if(c.value===nowCar){
        c.checked=true
      }else{
        c.checked=false;
      }
    });
  }
}];
const alertInputs:AlertInput[]=[{
  label:'无界新能源',
  type:'radio',
  value:'无界新能源',
  checked:true,
  handler:changeCar
},{
  label:'无界2',
  type:'radio',
  value:'无界2',
  handler:changeCar
},{
  label:'无界3',
  type:'radio',
  value:'无界3',
  handler:changeCar
}];

</script>

<style scoped>
</style>