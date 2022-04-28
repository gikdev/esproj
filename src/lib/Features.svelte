<script>
  import Feature from "./Feature.svelte";
  const features = [
    {
      title: 'Easy to use', 
      logo: '',
      desc: 'So easy, just need to learn it!',
      id: 0
    },
    {
      title: 'Best Features', 
      logo: '',
      desc: 'We have a lot of features, even more than you can think of.',
      id: 1
    },
    {
      title: 'Loved by users', 
      logo: '',
      desc: 'Almost every one that used it, loved it',
      id: 2
    },
  ]
</script>

<div class="flex justify-around py-32">
  {#each features as {title, logo, desc, id}}
    <Feature {title} {logo} {desc} {id} />
  {/each}
</div>
