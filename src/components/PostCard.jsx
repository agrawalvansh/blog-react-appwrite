import React, { useState } from 'react'
import appwriteService from "../appwrite/config-appwrite"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const [imageLoading, setImageLoading] = useState(true)
    
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-full aspect-video relative'>
                  {imageLoading && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  )}
                  <img 
                      src={appwriteService.getFilePreview(featuredImage)}
                      alt={title}
                      className='w-full h-full object-cover'
                      onLoad={() => setImageLoading(false)}
                      style={{ opacity: imageLoading ? 0 : 1 }}
                  />
              </div>
              <div className="p-4">
                  <h2 className='text-xl font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors'>
                      {title}
                  </h2>
              </div>
          </div>
      </Link>
    )
}

export default PostCard