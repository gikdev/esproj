<script lang="ts">
  const links = [
    { content: 'Contact', id: 0},
    { content: 'Pricing', id: 1},
    { content: 'Download', id: 2},
  ]
  // const calc_vw = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // let vw = calc_vw();
  // window.addEventListener('resize', () => vw = calc_vw())
  // $: console.log(vw)
</script>



<!-- {#if vw < 350}

<nav class="navbar">
  <div class="flex-1">
    <a href='.' class={brand_classes}>ES</a>
  </div>
  <div class="flex-none">
    <label for="my-drawer" class="flex flex-col items-center btn btn-info text-primary-content drawer-button" role="button">
      <span class='h-[2px] w-3 bg-white block my-[1px]'></span>
      <span class='h-[2px] w-3 bg-white block my-[1px]'></span>
      <span class='h-[2px] w-3 bg-white block my-[1px]'></span>
    </label>
  </div>
</nav>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {#each links as link}
        <li><a href="." class="hover:text-info active:text-primary-content">{link.content}</a></li>
      {/each}
    </ul>
  </div>
</div>

{:else} -->

<nav class="navbar font-poppins">
  <div class="flex-1">
    <a href='.' class='btn btn-ghost font-fredoka-one text-3xl text-base-300 hover:text-primary-content'>ES</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      {#each links as link}
        <li><a href="." class="hover:text-primary-content">{link.content}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<!-- {/if} -->
