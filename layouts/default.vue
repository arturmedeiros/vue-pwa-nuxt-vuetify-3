<template>
  <v-app id="application" dark>
    <v-app-bar
        app
        extended
    >
      <v-app-bar-nav-icon title="menu" aria-label="menu"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn title="menu-right"
             aria-label="menu-right"
             icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
<!--        <v-row>
          <v-col
              v-for="n in 24"
              :key="n"
              cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>-->
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

</script>