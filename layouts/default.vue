<template>
  <v-app id="application" dark>
    <v-app-bar
        app
        extended
    >
      <v-app-bar-nav-icon title="menu"

                          aria-label="menu"></v-app-bar-nav-icon>

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
        {{response}}
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

const {data: response} = await useFetch(`https://api.biolinkys.com/api/public/link/arjos`)

useHead({
  title: response.value.title,
  titleTemplate: `%s - ${response.value.description} | BioLinkys.com`,
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: response.value.description
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    { property: "og:site_name", content: response.value.title },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: response.value.url,
    },
    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url",
      content: response.value.img_url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: response.value.title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: response.value.description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: response.value.img_url,
    },
    //Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: response.value.url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: response.value.title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:response.value.description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: response.value.img_url,
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      href: response.value.img_url
    },
  ],
})
</script>