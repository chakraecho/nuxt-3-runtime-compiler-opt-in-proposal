<template>
  <div>
    <client-only>
      <Boom>
        <template #test>
        <div>         
          This is from app.vue
        </div>
        </template>
      </Boom>
    </client-only>
    <Test />
    <Hello />
    <Expose />
  </div>
</template>