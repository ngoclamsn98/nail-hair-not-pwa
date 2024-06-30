<template>
  <Header
    :isBack="true"
    title="Bill Order"
  >
    <template v-slot:content>
      <form
        class="flex justify-start items-start w-[90%] h-full flex-col m-auto"
        @submit.prevent="onSubmit"
      >
        <input name="packages.0.categories.0.price" />
        <div class="flex w-full justify-center mt-[20px]">
          <Button class="mb-[20px] w-[150px]">
            <template v-slot:text>Submit</template>
          </Button>
        </div>
      </form>
    </template>
  </Header>
</template>

<script setup>
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useForm } from "vee-validate";

const { values } = useForm({
  // validationSchema: validationSchema,
});

const onSubmit = (e) => {
  console.log(values, "======");
};
</script>
