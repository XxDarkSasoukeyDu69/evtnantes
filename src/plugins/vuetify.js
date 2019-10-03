import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import moment from "moment";

Vue.use(Vuetify);

const now = moment();
const limiteStart = now.clone().hours(9).minutes(20)
const limiteEnd = now.clone().hour(9).minutes(27)
if (now.isAfter(limiteStart) && now.isBefore(limiteEnd)) {
  console.log('Nuit')
} else {
  console.log('Jour')
}

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0089ff',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
