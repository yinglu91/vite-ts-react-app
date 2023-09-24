import blogsData from '../data/blogs.json'

type BlogData = {
  id: number
  title: string
  cover: string
  author: string
}

const Blogs = () => {
  const blogContent = (blog: BlogData) => {
    const { id, title, cover, author } = blog

    return (
      <div
        className='card'
        key={id}
      >
        <img
          src={cover}
          alt=''
        />
        <div className='details'>
          <h2>{title}</h2>
          <h4>{author}</h4>
        </div>
      </div>
    )
  }
  return (
    <div className='container'>
      <div className='blog'>{blogsData.map(blogContent)}</div>
    </div>
  )
}

export default Blogs
