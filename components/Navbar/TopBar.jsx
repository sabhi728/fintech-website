import { cn } from '@/utils/cn'

const TopBar = ({ sticky }) => {
  return (
    <div
      className={cn(
        'top-nav fixed left-0 top-0 w-full origin-top bg-primary py-2 text-center transition-all duration-500',
        sticky ? ' scale-y-0' : 'scale-y-100',
      )}>
    </div>
  )
}

export default TopBar
