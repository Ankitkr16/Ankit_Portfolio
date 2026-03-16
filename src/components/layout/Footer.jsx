const footerLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    logo: "https://cdn.simpleicons.org/github/ffffff"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    logo: "https://cdn.simpleicons.org/leetcode/FFA116"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org",
    logo: "https://cdn.simpleicons.org/geeksforgeeks/2F8D46"
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com",
    logo: "https://cdn.simpleicons.org/hackerrank/00EA64"
  }
];

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 text-sm text-mist md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Ankit. Crafted with intent.</p>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 transition hover:border-accent/60 hover:text-white"
            >
              <img
                src={link.logo}
                alt={link.name}
                loading="lazy"
                className="h-4 w-4 shrink-0 object-contain"
              />
              <span className="break-words text-sm leading-tight">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
