<template>
  <div>

    Hello
    <Test v-if="loaded" :template="template" />
  </div>
</template>

<script setup>
const router = useRouter();

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mockApiTemplate() {
  await timeout(500);

  return `<div>World. Template retrieved from api. Interact with counter: Test -> {{test}} </div><div><button @click='test++'>add + 1 </button></div>`;
}

const loaded = useState("loadTemplate", () => false);

const template =  useState("templateString", () => "")

const templateData = useAsyncData("asyncData", async () => {
  template.value = await mockApiTemplate();

  loaded.value = true;
});
</script>
