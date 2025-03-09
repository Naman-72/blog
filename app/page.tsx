import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, friend! Pleased to meet you.
      </h1>
      <p className="mb-4">
        Welcome! If I directed you here, I’m glad you made it. Feel free to explore, and reach out if you have any questions—I’m excited to collaborate and work together!
      </p>

      <p className="mb-4">
        I’m an entrepreneur passionate about solving real-world problems and making a meaningful impact. Based in the vibrant city of Bangalore, I’m a proud graduate of IIT Guwahati and am gearing up to launch my startup. I believe true success comes from collaborating with brilliant minds and building something that lasts.
      </p>

      <p className="mb-4">
        I’m always open to connecting and supporting your goals. You can reach me via text message, email, or on <a href="https://www.linkedin.com/in/naman125/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>—I’m available anytime, except when flying or sleeping. Let’s connect and help each other thrive!
      </p>

      <blockquote className="mt-8 italic">“I am the master of my fate, I am the captain of my soul.” — William Ernest Henley</blockquote>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
} 
