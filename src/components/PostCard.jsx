import service from "../appwrite/config-appwrite"
import {Link} from 'react-router-dom'
import { useState } from 'react'

function PostCard({$id, title, featuredImage}) {
    const [imageLoading, setImageLoading] = useState(true)
    
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]'>
              <div className='w-full justify-center mb-4 aspect-video overflow-hidden rounded-xl relative'>
                  {imageLoading && (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  )}
                  <img 
                      src={service.getFilePreview(featuredImage)} 
                      alt={title}
                      className='rounded-xl w-full h-full object-cover'
                      onLoad={() => setImageLoading(false)}
                      style={{ opacity: imageLoading ? 0 : 1 }}
                  />
              </div>
              <h2 className='text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400'>{title}</h2>
          </div>
      </Link>
    )
}

export default PostCard