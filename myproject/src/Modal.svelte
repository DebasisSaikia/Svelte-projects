<script>
  export let message = "Default value";
  export let showModal = false;
  export let isPromo = false;
</script>

{#if showModal}
  <div class="backDrop" class:promo={isPromo} on:click|self>
    <div class="modal">
      <p>You are doing Good !!</p>
      <p>{message}</p>
    </div>
  </div>
{/if}

<style>
  .backDrop {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modal {
    padding: 10px;
    border-radius: 5px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background-color: azure;
  }
  .promo .modal {
    background-color: orangered;
    color: #fff;
  }
</style>
