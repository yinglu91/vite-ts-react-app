import blogData from '../../blog.json'

type Blog = {
  id: number
  title: string
  cover: string
  author: string
}

const Blog = () => {
  const blogContent = (blog: Blog) => {
    const { id, title, cover, author } = blog

    return (
      <div
        className='card'
        key={id}
      >
        <img
          src={cover}
          alt=''
          width='230'
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
      <div className='blog'>{blogData.map(blogContent)}</div>
    </div>
  )
}

export default Blog
