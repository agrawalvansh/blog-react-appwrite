import service from "../appwrite/config-appwrite"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-center mb-4'>
                {console.log("1st",featuredImage)}
                {console.log(service.getFilePreview("2nd",featuredImage))}
                {console.log("3rd",{ $id, title, featuredImage })}
                  <img src={service.getFilePreview(featuredImage)} alt={title}
                  className='rounded-xl' />
  
              </div>
              <h2
              className='text-xl font-bold'
              >{title}</h2>
          </div>
      </Link>
    )
  }
  
  
  export default PostCard