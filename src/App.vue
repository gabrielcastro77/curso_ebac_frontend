<script setup>
  import { reactive } from 'vue';

  const estado = reactive({
    numero1: '',
    numero2: '',
    filtro: '',
  })

  const alert = () => {
    return 'ALERT: (escolha seu operador)';
  }

  const resultadoDaSoma = () => {
    return `Seu resultado é ${Number(estado.numero1) + Number(estado.numero2)}!`;
  }

  const resultadoDaSubtração = () => {
    return `Seu resultado é ${Number(estado.numero1) - Number(estado.numero2)}!`;
  }

  const calcuculo = () => {
    switch (estado.filtro) {
      case 'alert':
        return alert();
      case 'mais':
        return resultadoDaSoma();
      case 'menos':
        return resultadoDaSubtração();
      default:
        return 'ALERT: ( você ainda não digitou os números e seu operador)';
  }
  }
</script>

<template>
  <div class="container mt-4 mb-4 rounded-2">
    <form>
      <div class="row">
        <div class="col-md-4">
          <input @change="e => estado.numero1 = e.target.value" type="number" placeholder="digite um número" required class="form-control">
        </div>
        <div class="col-md-4">
          <input @change="e => estado.numero2 = e.target.value" type="number" placeholder="digite um número" required class="form-control">
        </div>
        <div class="col-md-4">
          <select @change="e => estado.filtro = e.target.value" class="form-control">
            <option value="alert">Escolha seu operador</option>
            <option value="mais">+</option>
            <option value="menos">-</option>
          </select>
        </div>
      </div>
    </form>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <span class="p-2">
          {{ calcuculo() }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
