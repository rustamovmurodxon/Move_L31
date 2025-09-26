import { CastViews } from '@/entities/cast'
import React, { memo } from 'react'
import { useParams } from 'react-router-dom'

export const Cast = memo(() => {
  const {id}=useParams()
    return (
    <div>
        <CastViews type="cast" id={id as string} />
            
    </div>
  )
})
