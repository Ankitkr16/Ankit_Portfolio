import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "resume",
  "journey",
  "profiles",
  "contact"
];

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.2 }
    );

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
}
