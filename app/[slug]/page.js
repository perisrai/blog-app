export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is a placeholder content for the blog post "{params.slug}".</p>
    </div>
  );
}
