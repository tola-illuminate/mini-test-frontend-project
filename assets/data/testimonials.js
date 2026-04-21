const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    company: "Google",
    quote:
      "This platform helped me land my first developer job. The projects are real!",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Sarah Smith",
    role: "UX Designer",
    company: "Airbnb",
    quote:
      "The curriculum is incredibly well-structured. I love the design focus.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Mike Jones",
    role: "Data Scientist",
    company: "Meta",
    quote:
      "Mentorship here is unmatched. Finally understood complex ML concepts.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "Stripe",
    quote: "A game changer for career switchers. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "David Kim",
    role: "Fullstack Dev",
    company: "Vercel",
    quote: "The community support is amazing. I never felt stuck for long.",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    name: "Lisa Wang",
    role: "Security Engineer",
    company: "Microsoft",
    quote: "Top-tier security modules. The labs are challenging and fun.",
    avatar: "https://i.pravatar.cc/150?u=6",
  },
  {
    name: "Chris Evans",
    role: "Mobile Developer",
    company: "Apple",
    quote: "Swift and Kotlin courses are the best I've found online.",
    avatar: "https://i.pravatar.cc/150?u=7",
  },
  {
    name: "Anna Müller",
    role: "Backend Engineer",
    company: "Amazon",
    quote: "Scalability lessons were eye-opening. Clean code is now my mantra.",
    avatar: "https://i.pravatar.cc/150?u=8",
  },
  {
    name: "James Wilson",
    role: "DevOps",
    company: "Netflix",
    quote: "Automating workflows has never been easier to learn.",
    avatar: "https://i.pravatar.cc/150?u=9",
  },
  {
    name: "Sita Patel",
    role: "AI Researcher",
    company: "OpenAI",
    quote:
      "Cutting edge content. Keeps me updated with the fast-moving AI world.",
    avatar: "https://i.pravatar.cc/150?u=10",
  },
];

// const testimonialGrid = document.getElementById("testimonial-grid");

const sliderWrapper = document.getElementById("testimonial-slider-wrapper");

// 1. Inject the slides
sliderWrapper.innerHTML = testimonials
  .map(
    (item) => `
  <div class="swiper-slide h-auto">
    <div class="h-full bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300">
      <div class="flex items-center gap-4 mb-6">
        <img src="${item.avatar}" class="w-12 h-12 rounded-full ring-4 ring-zinc-50 dark:ring-zinc-800" alt="${item.name}">
        <div>
          <h4 class="font-bold text-base dark:text-white leading-none">${item.name}</h4>
          <p class="text-xs text-zinc-500 mt-1">${item.role} | ${item.company}</p>
        </div>
      </div>
      <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed italic">
        "${item.quote}"
      </p>
    </div>
  </div>
`,
  )
  .join("");

// 2. Initialize Swiper
const swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
