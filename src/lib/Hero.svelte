<script lang='ts'>
  import ES from '../assets/es.webp'
  import Nav from './Nav.svelte'
</script>


<div class="hero overflow-hidden bg-info text-neutral-focus px-10 font-poppins font-light">
  <div class="hero-content flex-col">
    <Nav />
    <div class="grid grid-cols-2 px-5 mt-12">
      <div>
        <h1 class="[line-height:1.2] text-6xl font-poppins font-extrabold text-base-100">
          Meet <strong class="font-fredoka-one text-primary-content">ES</strong>: The best file manager for android
        </h1>
        <div class="mt-12 flex gap-8 w-auto">
          <button class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-6 h-6 fill-current" viewBox="0 0 512 512"><title>Google Playstore</title><path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"/></svg>
            &nbsp;&nbsp;
            download
          </button>
          <button class="btn btn-outline w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-6 h-6 fill-current" viewBox="0 0 512 512"><title>Apple</title><path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"/><path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"/></svg>
            &nbsp;&nbsp;
            Maybe...
          </button>
        </div>
      </div>

      <div class="mockup-phone relative rotate-[20deg] -z-10 ">
        <div class="camera"></div> 
        <div class="display">
          <div class="artboard artboard-demo phone-4">
             <img alt='random' src={ES} class="ml-auto max-w-sm rounded-lg shadow-2xl">
          </div>
        </div>
      </div>
     
    </div>
  </div>
</div>
