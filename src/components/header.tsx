import Image from "next/image";

export default function Header() {
  return (
    <header>
        <h1><a href="fizzbuzz.html">accuratelinuxgraphs.com</a></h1>
        <p>YOUR source for the most ACCURATE linux graphs around.</p>
        <noscript><h3>enable js for the best experience</h3></noscript>
        <img id="site-icon" src="img/ico/grain.png" title="a project of the grain" />
    </header>
  );
}
