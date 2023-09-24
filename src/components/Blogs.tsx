import blogsData from '../data/blogs.json'
import BlogItem from './BlogItem'

export type BlogData = {
  id: number
  title: string
  cover: string
  author: string
}

const Blogs = () => {
  return (
    <div className='container'>
      <div className='blog'>
        {blogsData.map((blog: BlogData) => (
          <BlogItem
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  )
}

export default Blogs
