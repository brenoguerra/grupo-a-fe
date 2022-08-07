import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: { 
    colors: {
      text: colors.shades.white,
      primary: colors.blue,
      secondary: colors.blue.lighten3,
      accent: colors.shades.black,
      success: colors.green.accent3,
      error: colors.red.darken1
    }
   }
});
