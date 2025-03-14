<script>
	let links = [
		{ name: "CS2", href: "/cs2", img: "/cs2.svg"},
		{ name: "Home", href: "/" },
		{ name: "Matches", href: "/matches" },
		{ name: "Tournaments", href: "/tournaments" },
		{ name: "News", href: "/news" },
		{ name: "Rules", href: "/rules" },
		{ name: "FAQ", href: "/faq" },
		{ name: "Premium", link: "/premium", icon: true }
	];
</script>



<nav class="nav">
	<div class="nav-container">
		<div class="logo-container">
			<img class="logo" src="/logo.svg" alt="LOGO">
			<h1>Cyber Dragons</h1>
		</div>

		<ul class="nav-links">
			{#each links as link (link.href)}
				<li>
					<a href={link.href} class="links">

						{#if link.icon}
							<svg stroke="currentColor" fill="#C52435" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(144, 238, 144);">
								<path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
							</svg>
						{/if}

						{#if link.img}
							<!-- Иконка CS2 -->
							<img src="{link.img}" alt="{link.name}" style="width: 20px; height: 20px;">
						{/if}
						{link.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>


<style>
		.logo-container {
				cursor: pointer;
				gap: 20px;
        width: 20vmax;
				display: flex;
		}

		.logo-container h1 {
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
        color: white;
		}

		.logo {
				width: 50px;
				height: 50px;
		}

    .nav {
        padding: 20px 20px;
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: white;
    }

    .nav-links {
        color: rgb(225, 229, 233);
        list-style: none;
        display: flex;
        gap: 30px;
    }

    .nav-links a {
        text-decoration: none;
        color: rgb(225, 229, 233);
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 5px;
        position: relative;
        transition: color 0.3s ease, transform 0.3s ease;
				cursor: pointer;
    }

    .nav-links a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 2px;
        background-color: #C52435;
        transition: width 0.3s ease-in-out;
    }

    .nav-links a:hover {
        color: white;
        transform: scale(1.10);
    }

    .nav-links a:hover::after {
        width: 100%;
    }
</style>