export default defineNuxtPlugin((nuxtApp) => {
  //? <githubToken> present in nuxtApp.config.ts file
  const { githubToken } = useRuntimeConfig();
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = githubToken;
  });
});
