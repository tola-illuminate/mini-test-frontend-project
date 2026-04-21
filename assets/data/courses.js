const courses = [
  {
    title: "JavaScript Mastery",
    desc: "Master ES6+, Promises, and functional programming patterns.",
    img: "https://learn.edure.in/s/store/courses/636a0431e4b00641d2596354/cover.jpg?v=3",
    tag: "coding",
    price: "30$",
  },
  {
    title: "Python Bootcamp",
    desc: "From basic syntax to automation and data analysis.",
    img: "https://top10codingbootcamps.com/wp-content/uploads/2022/05/Coding-Bootcamp-Statistics-for-2022-4.png",
    tag: "python",
    price: "25$",
  },
  {
    title: "Fullstack Web Dev",
    desc: "Build and deploy scalable apps using the MERN stack.",
    img: "https://codemanbd.com/wp-content/uploads/2023/03/0b4e4459-527d-48a4-99ad-efc08581c45a.jpeg",
    tag: "webdev",
    price: "120$",
  },
  {
    title: "Java Java-Spring Boot",
    desc: "Design beautiful saleable system backend with java",
    img: "https://cdn.ostad.app/course/photo/2025-06-26T19-36-51.831Z-java-springb-thumb-copy.jpg",
    tag: "design",
    price: "90$",
  },
  {
    title: "AI & Machine Learning",
    desc: "Train models and understand neural networks from scratch.",
    img: "https://techvidvan.com/wp-content/uploads/2025/11/full-stack-machine-learning-with-ai-bootcamp-ibm-02.webp",
    tag: "ai",
    price: "150$",
  },
  {
    title: "Mobile App Development",
    desc: "Create cross-platform iOS and Android apps with React Native.",
    img: "https://cdn.axalize.vn/media/content/images/mobile-app-development-company.jpeg",
    tag: "mobile",
    price: "75$",
  },
  {
    title: "Cybersecurity Pro",
    desc: "Learn ethical hacking and network protection strategies.",
    img: "https://cyberlad.io/wp-content/uploads/2025/10/CyberLad_Cyber_Security_Bootcamp_Top10_Programs-2.webp",
    tag: "security",
    price: "60$",
  },
  {
    title: "Cloud Architecture",
    desc: "Deploy global infrastructure using AWS and Docker.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    tag: "devops",
    price: "100$",
  },
  {
    title: "Data Science with R",
    desc: "Statistical modeling and advanced data visualization.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?w=400",
    tag: "data",
    price: "130$",
  },
];

const tagColors = {
  coding:
    "bg-blue-100   text-blue-700   dark:bg-blue-500/20 border border-blue-300  dark:text-blue-300",
  python:
    "bg-green-100  text-green-700  dark:bg-green-900/20 border border-green-300   dark:text-green-300",
  webdev:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  design:
    "bg-pink-100   text-pink-700   dark:bg-pink-900/40   dark:text-pink-300",
  ai: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  mobile:
    "bg-cyan-100   text-cyan-700   dark:bg-cyan-900/40   dark:text-cyan-300",
  security:
    "bg-red-100    text-red-700    dark:bg-red-900/40    dark:text-red-300",
  devops:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  data: "bg-teal-100   text-teal-700   dark:bg-teal-900/40   dark:text-teal-300",
};

const defaultTagColor =
  "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";

const grid = document.getElementById("course-grid");

// Loop through the array and create the HTML string

grid.innerHTML = courses
  .map((course) => {
    const tagClass = tagColors[course.tag] ?? defaultTagColor; // fallback if tag not found
    return `
  <div class="relative group rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

    <div class="overflow-hidden h-48">
      <img src="${course.img}" alt="${course.tag}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>

    <div class="p-5 flex flex-col gap-2 ">
      <h3 class="font-semibold text-base leading-snug text-zinc-900 dark:text-white line-clamp-2">${course.title}</h3>
      <p class="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">${course.desc}</p>
       <span class="absolute top-100 right-4 z-10 text-xs font-semibold px-4 py-1 rounded-full ${tagClass}">
      ${course.tag}
    </span>
    </div>

    <div class="flex justify-between items-center px-5 pb-5 pt-3 border-t dark:border-zinc-700 dark:border-zinc4-800">
      <span class="text-lg font-bold text-zinc-900 dark:text-white">${course.price}</span>
      <button class="text-xs font-semibold px-4 py-2 rounded-xl gradient-bg  text-white dark:text-zinc-100 hover:opacity-80 transition-opacity">
        Enroll
      </button>
    </div>
  </div>`;
  })
  .join("");
