import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: { 
    colors: {
      primary: colors.blue,
      secondary: colors.blue.lighten1,
      accent: colors.shades.black,
      success: colors.green.accent3,
      error: colors.red.darken1
    }
   }
});
