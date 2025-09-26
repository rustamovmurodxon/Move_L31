import { CastViews } from '@/entities/cast'
import  { memo } from 'react'
import { useParams } from 'react-router-dom'

export const Others =memo( () => {
    const {id}=useParams()
  return (
    <div>
                <CastViews type="crew" id={id as string} />

    </div>
  )
})
