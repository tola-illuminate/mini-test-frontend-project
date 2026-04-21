const courses = [
  {
    title: "JavaScript Mastery",
    desc: "Master ES6+, Promises, and functional programming patterns.",
    img: "https://learn.edure.in/s/store/courses/636a0431e4b00641d2596354/cover.jpg?v=3",
    tag: "coding",
  },
  {
    title: "Python Bootcamp",
    desc: "From basic syntax to automation and data analysis.",
    img: "https://top10codingbootcamps.com/wp-content/uploads/2022/05/Coding-Bootcamp-Statistics-for-2022-4.png",
    tag: "python",
  },
  {
    title: "Fullstack Web Dev",
    desc: "Build and deploy scalable apps using the MERN stack.",
    img: "https://codemanbd.com/wp-content/uploads/2023/03/0b4e4459-527d-48a4-99ad-efc08581c45a.jpeg",
    tag: "webdev",
  },
  {
    title: "Java Java-Spring Boot",
    desc: "Design beautiful saleable system backend with java",
    img: "https://cdn.ostad.app/course/photo/2025-06-26T19-36-51.831Z-java-springb-thumb-copy.jpg",
    tag: "design",
  },
  {
    title: "AI & Machine Learning",
    desc: "Train models and understand neural networks from scratch.",
    img: "https://techvidvan.com/wp-content/uploads/2025/11/full-stack-machine-learning-with-ai-bootcamp-ibm-02.webp",
    tag: "ai",
  },
  {
    title: "Mobile App Development",
    desc: "Create cross-platform iOS and Android apps with React Native.",
    img: "https://cdn.axalize.vn/media/content/images/mobile-app-development-company.jpeg",
    tag: "mobile",
  },
  {
    title: "Cybersecurity Pro",
    desc: "Learn ethical hacking and network protection strategies.",
    img: "https://cyberlad.io/wp-content/uploads/2025/10/CyberLad_Cyber_Security_Bootcamp_Top10_Programs-2.webp",
    tag: "security",
  },
  {
    title: "Cloud Architecture",
    desc: "Deploy global infrastructure using AWS and Docker.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    tag: "devops",
  },
  {
    title: "Data Science with R",
    desc: "Statistical modeling and advanced data visualization.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?w=400",
    tag: "data",
  },
];

const grid = document.getElementById("course-grid");

// Loop through the array and create the HTML string
grid.innerHTML = courses
  .map(
    (course) => `
  <div class="rounded-xl overflow-hidden bg-white dark:bg-zinc-800 shadow">
    <img src="${course.img}" alt="${course.tag}" class="w-full h-48 object-cover" />
    <div class="p-5">
      <h3 class="font-bold mb-2 dark:text-white">${course.title}</h3>
      <p class="text-sm text-zinc-500">${course.desc}</p>
    </div>
  </div>
`,
  )
  .join("");
