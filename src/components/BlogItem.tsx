import { BlogData } from './Blogs'

type Prop = {
  blog: BlogData
}

const BlogItem = (prop: Prop) => {
  const { title, cover, author } = prop.blog

  return (
    <div className='card'>
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

export default BlogItem
